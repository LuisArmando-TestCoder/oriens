'use client'
import React, { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { Post } from '@/utils/posts'
import { useRouter } from 'next/navigation'

export const PostGallery3D = ({ posts }: { posts: Post[] }) => {
  const groupRef = useRef<THREE.Group>(null)
  const router = useRouter()

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the gallery slowly
      groupRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {posts.map((post, i) => {
        // Arrange in a circle/spiral
        const radius = 4
        const angle = (i / posts.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (i - posts.length / 2) * 1.5

        return (
          <group key={post.slug} position={[x, y, z]} lookAt={new THREE.Vector3(0, y, 0)}>
            <Text
              color="white"
              fontSize={0.5}
              anchorX="center"
              anchorY="middle"
              onClick={() => router.push(`/blog/${post.slug}`)}
              onPointerOver={(e) => (document.body.style.cursor = 'pointer')}
              onPointerOut={(e) => (document.body.style.cursor = 'auto')}
            >
              {post.title}
            </Text>
            <Text
              position={[0, -0.4, 0]}
              color="#aaaaaa"
              fontSize={0.2}
              anchorX="center"
              anchorY="middle"
            >
              {post.date}
            </Text>
          </group>
        )
      })}
    </group>
  )
}
