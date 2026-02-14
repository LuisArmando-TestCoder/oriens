'use client'
import React from 'react'
import { VideoTitle } from '../../atoms/VideoTitle/VideoTitle'
import { Button } from '../../atoms/Button/Button'
import { SplitText } from '../../molecules/SplitText/SplitText'
import { Magnetic } from '../../molecules/Magnetic/Magnetic'
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import styles from './Hero.module.scss'

export const Hero = () => {
  const setExplored = useStore((state) => state.setExplored)
  const router = useRouter()

  const handleExplore = () => {
    router.push('/projects')
    setExplored(true)
  }

  return (
    <section id="hero" className={styles.hero}>
      <VideoTitle text="ORIENS" />
      
      <div className={styles.content}>
        <p id="hero-desc" className={styles.text}>
            <SplitText id="hero-desc-text" delay={0.5}>
            Poética orgánica, corporal y violenta
            </SplitText>
        </p>
        <Magnetic>
            <Button id="hero-cta" onClick={handleExplore}>EXPLORAR</Button>
        </Magnetic>
      </div>
    </section>
  )
}
