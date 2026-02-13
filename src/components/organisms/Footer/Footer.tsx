import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Aba Oriens. All rights reserved.</p>
    </footer>
  )
}
