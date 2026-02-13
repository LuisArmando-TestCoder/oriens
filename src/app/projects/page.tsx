import React from 'react'
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle'
import styles from './page.module.scss'

export default function ProjectsPage() {
  return (
    <main className={styles.projects}>
      <VideoTitle text="PROJECTS" pushToRead />
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>AIBAN</h3>
          <p>We turn job-trapped founders into owners. Most people with great ideas get stuck in the execution. We build the leverage so you can focus on the exploration.</p>
          <a href="https://aiban.news/" target="_blank" rel="noopener noreferrer">Visit Site →</a>
        </div>
        
        <div className={styles.card}>
          <h3>Engagement AI</h3>
          <p>We help business owners grow their companies in a way that sets them free from running the company day‑to‑day.</p>
          <a href="https://aiexecutions.com/" target="_blank" rel="noopener noreferrer">Visit Site →</a>
        </div>

        <div className={styles.card}>
          <h3>Portfolio</h3>
          <p>Deeply interested in delivering clean experiences to all types of users when creating the product, because its quality in all axis feels deeply personal.</p>
          <a href="https://testcoder.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site →</a>
        </div>
      </div>
    </main>
  )
}
