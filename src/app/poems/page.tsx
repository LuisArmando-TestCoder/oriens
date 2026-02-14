import React from 'react'
import { Metadata } from 'next'
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle'
import { getAllPosts } from '@/utils/posts'
import styles from './page.module.scss'
import { PoemList } from '@/components/organisms/PoemList/PoemList'

export const metadata: Metadata = {
  title: "Poemas | Aba Oriens",
  description: "Archivo cronológico de textos, poemas y reflexiones de Aba Oriens. Una exploración de la poética orgánica y corporal.",
};

export default function PoemsPage() {
  const posts = getAllPosts()

  return (
    <main className={styles.poems}>
      <VideoTitle text="POEMS" pushToRead />
      <PoemList initialPosts={posts} />
    </main>
  )
}
