'use client'
import React from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import { SplitText } from '../../molecules/SplitText/SplitText'
import { Magnetic } from '../../molecules/Magnetic/Magnetic'
import { useStore } from '@/store/useStore'
import styles from './Hero.module.scss'

export const Hero = () => {
  const setExplored = useStore((state) => state.setExplored)
  const lenis = useStore((state) => state.lenis)

  const handleExplore = () => {
    setExplored(true)
    lenis?.scrollTo('#blog-preview')
  }

  return (
    <section id="hero" className={styles.hero}>
      <Heading id="hero-title" tag="h1" className={styles.title}>
        <SplitText id="hero-title-text" delay={0.2}>
          ORIENS
        </SplitText>
      </Heading>
      
      <p id="hero-desc" className={styles.text}>
        <SplitText id="hero-desc-text" delay={0.5}>
          Poética orgánica, corporal y ontológicamente violenta
        </SplitText>
      </p>

      <Magnetic>
        <Button id="hero-cta" onClick={handleExplore}>EXPLORE</Button>
      </Magnetic>
    </section>
  )
}
