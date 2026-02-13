'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { ShaderPlane } from './molecules/ShaderPlane'
import { PostGridParticles } from './organisms/PostGridParticles'
import { BoidsCursor } from './molecules/BoidsCursor'
import type { Post } from '@/utils/posts'
import { useStore } from '@/store/useStore'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CameraController = () => {
  const isExplored = useStore((state) => state.isExplored)
  
  useFrame((state) => {
    // Zoom out to see grid when explored
    const targetZ = isExplored ? 15 : 5
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.03)
  })
  return null
}

export const Scene = ({ posts = [] }: { posts?: Post[] }) => {
  const isExplored = useStore((state) => state.isExplored)

  return (
    <div id="webgl-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: -1 }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
        <CameraController />
        <Suspense fallback={null}>
          <ShaderPlane position={[0, 0, -5]} width={20} height={20} widthSegments={32} heightSegments={32} />
          {isExplored && posts.length > 0 && <PostGridParticles posts={posts} />}
          <BoidsCursor />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
