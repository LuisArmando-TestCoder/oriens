import { SmoothScroll } from '@/components/organisms/SmoothScroll/SmoothScroll'
import { Scene } from '@/components/_canvas/Scene'
import { Hero } from '@/components/organisms/Hero/Hero'
import { getAllPosts } from '@/utils/posts'
export default function Home() {
  const posts = getAllPosts()

  return (
    <SmoothScroll>
      <Scene posts={posts} />
      <main id="main-content">
        <Hero />
      </main>
    </SmoothScroll>
  )
}
