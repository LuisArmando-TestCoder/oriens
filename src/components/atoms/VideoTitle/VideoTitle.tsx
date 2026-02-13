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
  videoURL = "https://videos.pexels.com/video-files/31196472/13325298_2560_1440_25fps.mp4",
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

    const update = () => {
      const scroll = lenis.scroll
      
      // If pushToRead is true, we want the container to be fixed (pinned).
      // We rely on CSS position: fixed for that.
      // We do NOT want to translate it vertically with scroll, otherwise it scrolls away.
      // If pushToRead is false, it's relative and scrolls naturally.
      
      if (titleWrapperRef.current) {
        // Move text horizontally based on scroll
        // Svelte: left: {offset + $smoothScrollTarget * scaleSpeed}px
        // $smoothScrollTarget is -scroll.
        // So left should be offset - scroll * scaleSpeed
        titleWrapperRef.current.style.left = `${offset - scroll * scaleSpeed}px`
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
