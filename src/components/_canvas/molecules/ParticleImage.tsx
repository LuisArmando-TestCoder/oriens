import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'

const ParticleMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector3(100, 100, 0), // Default far away
    uRadius: 1.5,
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uRadius;
    
    attribute vec3 targetPosition;
    attribute float pSize;
    attribute vec3 color;
    
    varying vec3 vColor;
    
    // Simplex noise function can be added for organic movement
    
    void main() {
      vColor = color;
      
      vec3 pos = targetPosition;
      
      // Calculate distance to mouse in world space (approximate if model is at 0,0,0)
      // Actually we should transform mouse to local space or pos to world space.
      // Assuming mesh is in world space or mouse is transformed.
      
      float dist = distance(pos.xy, uMouse.xy);
      
      if (dist < uRadius) {
        // Gravitate towards mouse
        vec3 dir = normalize(uMouse - pos);
        float force = (uRadius - dist) / uRadius;
        
        // Add some noise or swirl here for "flocking" feel?
        // Simple attraction for now:
        pos += dir * force * 1.5;
        
        // Add random z-offset for "construction/deconstruction" feel
        pos.z += force * 2.0 * sin(uTime * 10.0 + pos.x);
      }
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = pSize * (50.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment Shader
  `
    varying vec3 vColor;
    void main() {
      // Circular particle
      vec2 coord = gl_PointCoord - vec2(0.5);
      if (length(coord) > 0.5) discard;
      
      gl_FragColor = vec4(vColor, 1.0);
    }
  `
)

extend({ ParticleMaterial })

// Add type definition for the new material
declare module '@react-three/fiber' {
  interface ThreeElements {
    particleMaterial: any
  }
}

interface ParticleImageProps {
  texture: THREE.Texture | null
  scale?: number
}

export const ParticleImage = ({ texture, scale = 1 }: ParticleImageProps) => {
  const materialRef = useRef<any>()
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors, sizes } = useMemo(() => {
    if (!texture) return { positions: new Float32Array(0), colors: new Float32Array(0), sizes: new Float32Array(0) }

    const image = texture.image as HTMLImageElement | HTMLCanvasElement
    const width = image.width
    const height = image.height
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return { positions: new Float32Array(0), colors: new Float32Array(0), sizes: new Float32Array(0) }

    ctx.drawImage(image, 0, 0)
    const data = ctx.getImageData(0, 0, width, height).data

    const pos = []
    const col = []
    const siz = []

    const numParticles = width * height
    // Sampling step to reduce particle count if needed (e.g., every 4th pixel)
    const step = 4 

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const i = (y * width + x) * 4
        const r = data[i] / 255
        const g = data[i + 1] / 255
        const b = data[i + 2] / 255
        const a = data[i + 3] / 255

        if (a > 0.1) { // Only non-transparent pixels
          // Center the image
          const px = (x - width / 2) * 0.01 * scale
          const py = -(y - height / 2) * 0.01 * scale // Flip Y
          const pz = 0

          pos.push(px, py, pz)
          col.push(r, g, b)
          siz.push(0.15) // Base size
        }
      }
    }

    return {
      positions: new Float32Array(pos),
      colors: new Float32Array(col),
      sizes: new Float32Array(siz),
    }
  }, [texture, scale])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime
      
      // Map mouse (-1 to 1) to world coordinates approximately
      // This requires raycasting or unprojecting for accuracy, 
      // but for "mouse interaction" on a 2D plane at z=0, we can project.
      const vec = new THREE.Vector3(state.pointer.x, state.pointer.y, 0)
      vec.unproject(state.camera)
      const dir = vec.sub(state.camera.position).normalize()
      const distance = -state.camera.position.z / dir.z
      const pos = state.camera.position.clone().add(dir.multiplyScalar(distance))
      
      // Update uMouse with world position on Z=0 plane
      materialRef.current.uMouse.copy(pos)
    }
  })

  if (!texture) return null

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-targetPosition"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-pSize"
          count={sizes.length / 1}
          array={sizes}
          itemSize={1}
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <particleMaterial ref={materialRef} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}
