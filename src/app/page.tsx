import { Scene } from '@/components/_canvas/Scene'
import { Hero } from '@/components/organisms/Hero/Hero'
import { About } from '@/components/organisms/About/About'
import { getAllPosts } from '@/utils/posts'
export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <Scene posts={posts} />
      <main id="main-content">
        <Hero />
        <About />
      </main>
    </>
  )
}
