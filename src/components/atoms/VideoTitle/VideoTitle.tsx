'use client'
import React, { useRef, useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'
import gsap from 'gsap'
import styles from './VideoTitle.module.scss'
import clsx from 'clsx'

interface VideoTitleProps {
  text: string
  videoURL?: string
  scaleSpeed?: number
  offset?: number
  pushToRead?: boolean
  z?: boolean
}

export const VideoTitle = ({
  text,
  videoURL = "https://www.pexels.com/download/video/4508110",
  scaleSpeed = 1,
  offset = 0,
  pushToRead = false,
  z = false
}: VideoTitleProps) => {
  const lenis = useStore((state) => state.lenis)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleWrapperRef = useRef<HTMLSpanElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const safeId = `title-${text.replace(/\s+/g, '-').toLowerCase()}`
  
  // State for spacer height calculation
  const [spacerHeight, setSpacerHeight] = useState(0)
  
  // Calculate font size based on text length (100vw / length)
  // We use ch as a rough approximation or just vw units directly.
  // "100vw divided by word length" -> 100 / text.length vw
  const fontSize = `${100 / (text.length || 1)}vw`

  useEffect(() => {
    if (!lenis) return

    const update = (time: number, deltaTime: number, frame: number) => {
      const scroll = lenis.scroll || 0 
      
      if (titleWrapperRef.current) {
        // Move text horizontally based on scroll
        titleWrapperRef.current.style.transform = `translate3d(${offset - scroll * scaleSpeed}px, 0, 0)`
      }
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [lenis, pushToRead, offset, scaleSpeed])

  // Calculate spacer height on mount/resize
  useEffect(() => {
    if (!pushToRead) return

    const calculateHeight = () => {
      if (titleWrapperRef.current) {
          // Logic from Svelte: (offset / window.innerHeight) + (offsetWidth / window.innerWidth) / scaleSpeed
          // Converting to vh
          const offsetVh = (offset / window.innerHeight)
          const widthVh = (titleWrapperRef.current.offsetWidth / window.innerWidth) / scaleSpeed
          setSpacerHeight((offsetVh + widthVh) * 100)
      }
    }

    calculateHeight()
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [pushToRead, offset, scaleSpeed, text])

  return (
    <div 
        className={styles.track} 
        style={{ height: pushToRead ? `${100 + spacerHeight}vh` : 'auto' }}
    >
      <div 
        ref={containerRef}
        className={clsx(styles.soft, pushToRead && styles.pushToRead)}
        style={{ 
            zIndex: z ? 1 : 0
        }}
      >
        <video 
            playsInline 
            muted 
            autoPlay 
            loop 
            className={styles.video} 
            src={videoURL}
        />
        <h1 
            className={styles.title}
            style={{ fontSize }}
        >
            <span 
                id={safeId} 
                ref={titleWrapperRef}
                className={styles.titleWrapper}
            >
                {text}
            </span>
        </h1>
      </div>
    </div>
  )
}
