import { Metadata, ResolvingMetadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/utils/posts'
import markdownToHtml from '@/utils/markdownToHtml'
import { notFound } from 'next/navigation'
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

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const content = await markdownToHtml(post.content || '')

  return (
    <>
      <Scene />
      <main
        id="post-content"
        style={{
          minHeight: '100vh',
          padding: '10vh 20vw',
          position: 'relative',
          zIndex: 1,
          background: 'rgba(0,0,0,0.8)',
        }}
      >
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <Link href="/" style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            ← Inicio
          </Link>
          <Link
            href="/poems"
            style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            ← Back to Gallery
          </Link>
        </div>

        <article>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '1rem', opacity: 0.5, marginBottom: '4rem', letterSpacing: '0.2em' }}>{post.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, marginBottom: '8rem' }}
          />
        </article>

        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            marginTop: '4rem',
          }}
        >
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} style={{ flex: 1, textAlign: 'left', textDecoration: 'none' }}>
              <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.4, textTransform: 'uppercase' }}>
                Anterior
              </span>
              <span style={{ display: 'block', fontSize: '1.2rem', color: 'var(--foreground)', marginTop: '0.5rem' }}>
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div style={{ flex: 1 }} />
          )}

          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} style={{ flex: 1, textAlign: 'right', textDecoration: 'none' }}>
              <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.4, textTransform: 'uppercase' }}>
                Siguiente
              </span>
              <span style={{ display: 'block', fontSize: '1.2rem', color: 'var(--foreground)', marginTop: '0.5rem' }}>
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div style={{ flex: 1 }} />
          )}
        </nav>
      </main>
    </>
  )
}
