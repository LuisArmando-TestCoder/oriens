import React, { useMemo } from 'react'
import type { Post } from '@/utils/posts'
import { createPostTexture } from '@/utils/createPostTexture'
import { ParticleImage } from '../molecules/ParticleImage'
import { useRouter } from 'next/navigation'

export const PostGridParticles = ({ posts }: { posts: Post[] }) => {
  const router = useRouter()

  const textures = useMemo(() => {
    return posts.map(post => createPostTexture(post.title, post.date))
  }, [posts])

  return (
    <group position={[0, 0, -5]}>
      {posts.map((post, i) => {
        // Grid Layout
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = (col - 1) * 6
        const y = -(row - 0.5) * 6
        
        return (
          <group 
            key={post.slug} 
            position={[x, y, 0]}
          >
            <ParticleImage texture={textures[i]} scale={1.5} />
            {/* Interaction Plane */}
            <mesh 
              onClick={() => router.push(`/blog/${post.slug}`)}
              onPointerOver={() => (document.body.style.cursor = 'pointer')}
              onPointerOut={() => (document.body.style.cursor = 'auto')}
              visible={false}
            >
              <planeGeometry args={[5, 5]} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}
