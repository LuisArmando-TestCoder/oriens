import { SmoothScroll } from '@/components/organisms/SmoothScroll/SmoothScroll'
import { Scene } from '@/components/_canvas/Scene'
import { Hero } from '@/components/organisms/Hero/Hero'
import { getAllPosts } from '@/utils/posts'
import { SplitText } from '@/components/molecules/SplitText/SplitText'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts()

  return (
    <SmoothScroll>
      <Scene posts={posts} />
      <main id="main-content">
        <Hero />
        <section id="blog-preview" style={{ minHeight: '100vh', padding: '10vh 5vw', position: 'relative', zIndex: 1 }}>
          <h2 id="blog-title" style={{ fontSize: '4rem', marginBottom: '4rem', fontFamily: 'var(--font-geist-sans)' }}>LATEST POSTS</h2>
          <div className="posts-list">
             {posts.map(post => (
               <div key={post.slug} style={{ marginBottom: '6rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
                 <Link href={`/blog/${post.slug}`}>
                   <h3 style={{ fontSize: '3rem', marginBottom: '1rem', cursor: 'pointer' }}>
                     <SplitText id={`title-${post.slug}`} delay={0.1}>
                       {post.title}
                     </SplitText>
                   </h3>
                 </Link>
                 <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>{post.excerpt}</p>
                 <p style={{ fontSize: '0.9rem', opacity: 0.5, marginTop: '1rem' }}>{post.date}</p>
               </div>
             ))}
          </div>
        </section>
      </main>
    </SmoothScroll>
  )
}
