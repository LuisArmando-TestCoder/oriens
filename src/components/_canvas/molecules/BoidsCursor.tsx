import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const BoidsCursor = () => {
  const boid1 = useRef<THREE.Mesh>(null)
  const boid2 = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    // Project mouse to world at z=0
    const vec = new THREE.Vector3(state.pointer.x, state.pointer.y, 0)
    vec.unproject(state.camera)
    const dir = vec.sub(state.camera.position).normalize()
    const distance = -state.camera.position.z / dir.z
    const target = state.camera.position.clone().add(dir.multiplyScalar(distance))
    
    if (boid1.current && boid2.current) {
      const time = state.clock.elapsedTime
      
      // Boid 1
      boid1.current.position.lerp(target, 0.1)
      boid1.current.position.x += Math.sin(time * 5) * 0.1
      boid1.current.position.y += Math.cos(time * 5) * 0.1
      boid1.current.lookAt(target)
      
      // Boid 2
      boid2.current.position.lerp(target, 0.05)
      boid2.current.position.x += Math.cos(time * 3) * 0.3
      boid2.current.position.y += Math.sin(time * 3) * 0.3
      boid2.current.lookAt(target)
    }
  })

  return (
    <>
      <mesh ref={boid1}>
        <coneGeometry args={[0.05, 0.2, 8]} />
        <meshBasicMaterial color="#ff0055" />
      </mesh>
      <mesh ref={boid2}>
        <coneGeometry args={[0.05, 0.2, 8]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>
    </>
  )
}
