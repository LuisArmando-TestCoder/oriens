import React from 'react'
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle'
import { getAllPosts } from '@/utils/posts'
import styles from './page.module.scss'
import { PoemList } from '@/components/organisms/PoemList/PoemList'

export default function PoemsPage() {
  const posts = getAllPosts()

  return (
    <main className={styles.poems}>
      <VideoTitle text="POEMS" pushToRead />
      <PoemList initialPosts={posts} />
    </main>
  )
}
