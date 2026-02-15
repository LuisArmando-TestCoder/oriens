'use client'

import React, { useState, useMemo, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { SplitText } from '@/components/molecules/SplitText/SplitText'
import styles from '@/app/poems/page.module.scss'
import { Post } from '@/utils/posts'

interface PoemListProps {
  initialPosts: Post[]
}

const ITEMS_PER_PAGE = 5

const PoemListContent: React.FC<PoemListProps> = ({ initialPosts }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Sync currentPage with URL on mount and searchParams change
  useEffect(() => {
    const page = searchParams.get('page')
    if (page) {
      setCurrentPage(parseInt(page, 10))
    } else {
      setCurrentPage(1)
    }
  }, [searchParams])

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove standard accents
      .replace(/ñ/g, 'n')
      .replace(/[áàäâ]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöô]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/ñ/g, 'n')
      .replace(/¨/g, '') // Strip ¨ specifically if it remains
      .trim()
  }

  const filteredPosts = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery)
    if (!normalizedQuery) return initialPosts

    return initialPosts.filter(post => {
      const normalizedTitle = normalizeText(post.title)
      const normalizedContent = normalizeText(post.content)
      const normalizedDate = normalizeText(post.date)

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedContent.includes(normalizedQuery) ||
        normalizedDate.includes(normalizedQuery)
      )
    })
  }, [initialPosts, searchQuery])

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE)
  
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredPosts.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredPosts, currentPage])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) // Reset to first page on search
    
    // Clear page param on search
    const params = new URLSearchParams(searchParams.toString())
    params.delete('page')
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', page.toString())
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar poemas..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.list}>
        {currentPosts.length > 0 ? (
          currentPosts.map(post => (
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
          ))
        ) : (
          <div className={styles.noResults}>No se encontraron poemas.</div>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Anterior
          </button>
          
          <span className={styles.pageInfo}>
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
}

export const PoemList: React.FC<PoemListProps> = (props) => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <PoemListContent {...props} />
    </Suspense>
  )
}
