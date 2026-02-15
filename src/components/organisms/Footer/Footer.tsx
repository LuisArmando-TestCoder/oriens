import React from 'react'
import Link from 'next/link'
import { siteContent } from '@/content/siteContent'
import styles from './Footer.module.scss'

export const Footer = () => {
  const { footer } = siteContent

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Column 1: Identity / Aba Oriens */}
        <div className={styles.column}>
          <h2 className={styles.brand}>{footer.brand}</h2>
          <p className={styles.tagline}>
            {footer.tagline}
          </p>
          <div className={styles.keywords}>
            {footer.identityKeywords.map((keyword, i) => (
              <span key={i}>{keyword}</span>
            ))}
          </div>
        </div>

        {/* Column 2: Creative Engineering / Luis Murillo */}
        <div className={styles.column}>
          <h3 className={styles.heading}>{footer.creativeEngineering.title}</h3>
          <p className={styles.text}>
            {footer.creativeEngineering.text}
          </p>
          <ul className={styles.list}>
            {footer.creativeEngineering.stack.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 3: Projects */}
        <div className={styles.column}>
          <h3 className={styles.heading}>{footer.projects.title}</h3>
          <ul className={styles.links}>
            {footer.projects.links.map((link, i) => (
              <li key={i}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Sitemap & Connect */}
        <div className={styles.column}>
          <h3 className={styles.heading}>{footer.explore.title}</h3>
          <ul className={styles.links}>
            {footer.explore.links.map((link, i) => (
              <li key={i}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
          
          <h3 className={`${styles.heading} ${styles.connect}`}>{footer.connect.title}</h3>
          <ul className={styles.social}>
            {footer.connect.links.map((link, i) => (
              <li key={i}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a></li>
            ))}
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} {footer.copyright}</p>
        <p className={styles.credit}>{footer.credit}</p>
      </div>
    </footer>
  )
}
