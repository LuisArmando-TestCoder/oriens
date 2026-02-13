import React, { useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { Plane } from '../atoms/Plane'

const ColorShiftMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color(0.2, 0.0, 0.1) },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec2 vUv;

    void main() {
      vec2 p = vUv * 2.0 - 1.0;
      float d = length(p);
      vec3 color = uColor + 0.5 * cos(uTime + vUv.xyx + vec3(0,2,4));
      
      // Noise/Grain
      float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
      
      gl_FragColor = vec4(color + noise * 0.1, 1.0);
    }
  `
)

extend({ ColorShiftMaterial })

// Add type definition for the new material
declare module '@react-three/fiber' {
  interface ThreeElements {
    colorShiftMaterial: any
  }
}

export const ShaderPlane = (props: any) => {
  const materialRef = useRef<any>()

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uTime += delta
    }
  })

  return (
    <Plane {...props}>
      <colorShiftMaterial ref={materialRef} transparent />
    </Plane>
  )
}
