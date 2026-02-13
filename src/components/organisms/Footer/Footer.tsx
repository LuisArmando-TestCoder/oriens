import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Column 1: Identity / Aba Oriens */}
        <div className={styles.column}>
          <h2 className={styles.brand}>Aba Oriens</h2>
          <p className={styles.tagline}>
            Poética orgánica, corporal y ontológicamente violenta.
          </p>
          <div className={styles.keywords}>
            <span>Cuerpo</span>
            <span>Mística</span>
            <span>Tecnología</span>
          </div>
        </div>

        {/* Column 2: Creative Engineering / Luis Murillo */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Creative Engineering</h3>
          <p className={styles.text}>
            Delivering clean experiences through code, generative art, and automation.
          </p>
          <ul className={styles.list}>
            <li>TypeScript / JavaScript</li>
            <li>WebGL / Creative Coding</li>
            <li>Go / Automation</li>
          </ul>
        </div>

        {/* Column 3: Projects */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Projects</h3>
          <ul className={styles.links}>
            <li>
              <a href="https://aiban.news/" target="_blank" rel="noopener noreferrer">AIBAN</a>
            </li>
            <li>
              <a href="https://aiexecutions.com/" target="_blank" rel="noopener noreferrer">Engagement AI</a>
            </li>
            <li>
              <a href="https://testcoder.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio Legacy</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Sitemap & Connect */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Explore</h3>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/poems">Poems</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
          
          <h3 className={`${styles.heading} ${styles.connect}`}>Connect</h3>
          <ul className={styles.social}>
            <li><a href="https://github.com/LuisArmando-TestCoder" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://codepen.io/LuisArmando-TC" target="_blank" rel="noopener noreferrer">CodePen</a></li>
            <li><a href="mailto:oriens@aiban.news">Email</a></li>
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Aba Oriens. All rights reserved.</p>
        <p className={styles.credit}>Designed & Built by Luis Murillo</p>
      </div>
    </footer>
  )
}
