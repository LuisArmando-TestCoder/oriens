import React from 'react'
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle'
import Link from 'next/link'
import { getAllPosts } from '@/utils/posts'
import { SplitText } from '@/components/molecules/SplitText/SplitText'
import styles from './page.module.scss'

export default function PoemsPage() {
  const posts = getAllPosts()

  return (
    <main className={styles.poems}>
      <VideoTitle text="POEMS" pushToRead />
      
      <div className={styles.list}>
        {posts.map(post => (
          <div key={post.slug} className={styles.post}>
            <Link href={`/blog/${post.slug}`}>
              <h3>
                <SplitText id={`poem-title-${post.slug}`} delay={0.2}>
                  {post.title}
                </SplitText>
              </h3>
            </Link>
            <p>{post.excerpt}</p>
            <span className={styles.date}>{post.date}</span>
          </div>
        ))}
      </div>
    </main>
  )
}
