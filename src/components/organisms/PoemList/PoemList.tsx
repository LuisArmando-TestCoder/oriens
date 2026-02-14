'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { SplitText } from '@/components/molecules/SplitText/SplitText'
import styles from '@/app/poems/page.module.scss'
import { Post } from '@/utils/posts'

interface PoemListProps {
  initialPosts: Post[]
}

const ITEMS_PER_PAGE = 5

export const PoemList: React.FC<PoemListProps> = ({ initialPosts }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove standard accents
      .replace(/ñ/g, 'n') // Replace ñ with n specifically if not handled by NFD (though NFD usually splits ñ to n + ~)
      // Actually, NFD splits ñ into n + ~, so the accent removal above handles it.
      // But let's be explicit as requested: "replace of all vowels with accents ´ to their naked form or ñ without ˜ as n"
      // The user also mentioned "normalization including ¨ and stripping it from both end of the search comparison".
      // Let's implement a custom replacement to be safe and exact.
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
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search poems..."
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
          <div className={styles.noResults}>No poems found.</div>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Previous
          </button>
          
          <span className={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
