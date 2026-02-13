'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clsx from 'clsx'
import styles from './SplitText.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SplitTextProps {
  id: string
  children: string
  className?: string
  delay?: number
}

export const SplitText: React.FC<SplitTextProps> = ({ id, children, className, delay = 0 }) => {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    
    // Select chars by class name but we need to match the hashed class from modules
    const chars = ref.current.children
    
    gsap.fromTo(chars, 
      { 
        y: 100, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 95%',
          end: 'center 50%',
          scrub: 1,
        }
      }
    )
  }, [delay])

  return (
    <span id={id} ref={ref} className={clsx(styles.wrapper, className)}>
      {children.split('').map((char, i) => (
        <span key={i} className={styles.char} style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
