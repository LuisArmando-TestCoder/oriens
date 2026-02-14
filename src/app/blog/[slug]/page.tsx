import { Metadata, ResolvingMetadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/utils/posts'
import markdownToHtml from '@/utils/markdownToHtml'
import { notFound } from 'next/navigation'
import { SmoothScroll } from '@/components/organisms/SmoothScroll/SmoothScroll'
import { Scene } from '@/components/_canvas/Scene'
import Link from 'next/link'

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Aba Oriens',
    }
  }

  return {
    title: `${post.title} | Aba Oriens`,
    description: post.excerpt || `Entrada del ${post.date}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Entrada del ${post.date}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Aba Oriens'],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <SmoothScroll>
      <Scene />
      <main id="post-content" style={{ minHeight: '100vh', padding: '10vh 20vw', position: 'relative', zIndex: 1, background: 'rgba(0,0,0,0.8)' }}>
        <Link href="/" style={{ fontSize: '1.2rem', marginBottom: '2rem', display: 'inline-block', opacity: 0.6 }}>
          ← Back to Gallery
        </Link>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontFamily: 'var(--font-geist-sans)' }}>{post.title}</h1>
        <p style={{ fontSize: '1rem', opacity: 0.5, marginBottom: '4rem' }}>{post.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}
        />
      </main>
    </SmoothScroll>
  )
}
