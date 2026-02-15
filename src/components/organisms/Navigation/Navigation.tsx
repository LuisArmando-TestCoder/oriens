'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { siteContent } from '@/content/siteContent'
import styles from './Navigation.module.scss'

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const { navigation, footer } = siteContent

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const closeMenu = () => {
    setIsActive(false)
  }

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.hamWrapper} onClick={toggleMenu}>
          <svg className={clsx(styles.ham, styles.hamRotate, styles.ham4, isActive && styles.active)} viewBox="0 0 100 100" width="80">
            <path
              className={clsx(styles.line, styles.top)}
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path
              className={clsx(styles.line, styles.middle)}
              d="m 70,50 h -40"
            />
            <path
              className={clsx(styles.line, styles.bottom)}
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
      </div>

      <nav className={clsx(styles.menu, isActive && styles.open)}>
        <div className={clsx(styles.brandingSide, styles.left)}>
          <div className={styles.verticalText}>
            {footer.identityKeywords.join(' | ')}
          </div>
        </div>

        <div className={styles.links}>
          {navigation.links.map((link, i) => (
            <Link key={i} href={link.href} className={styles.link} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={clsx(styles.brandingSide, styles.right)}>
          <div className={styles.creativeEngineering}>
            <p className={styles.title}>{footer.creativeEngineering.title}</p>
            <p className={styles.text}>{footer.creativeEngineering.text}</p>
          </div>
        </div>
      </nav>
    </>
  )
}
