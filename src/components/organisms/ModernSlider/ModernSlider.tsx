'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'
import styles from './ModernSlider.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable)
}

interface ModernSliderProps {
  images: { src: string; alt: string }[]
}

export const ModernSlider = ({ images }: ModernSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return

    const track = trackRef.current
    const container = containerRef.current
    const items = gsap.utils.toArray('.slider-item') as HTMLElement[]
    const itemWidth = items[0].offsetWidth
    const gap = 20 // matches CSS gap
    const totalWidth = items.length * (itemWidth + gap) - gap
    
    // Initial setup
    gsap.set(items, { 
      x: (i) => i * (itemWidth + gap) 
    })

    let progress = 0
    const wrap = gsap.utils.wrap(0, items.length)
    const snap = gsap.utils.snap(itemWidth + gap)
    
    // Draggable instance
    const draggableProxy = document.createElement('div')
    const draggable = Draggable.create(draggableProxy, {
      trigger: container,
      type: 'x',
      inertia: true,
      onDrag: function(this: any) { update(this.x) },
      onThrowUpdate: function(this: any) { update(this.x) },
      snap: {
        x: (value) => snap(value)
      }
    })[0]

    function update(x: number) {
      // Logic for infinite slider or bounded slider
      // For simplicity, let's make it a bounded modern slider with parallax
      
      const p = -x / (itemWidth + gap)
      setActiveIndex(Math.round(p))
      
      gsap.to(track, {
        x: x,
        duration: 0.5,
        ease: 'power2.out'
      })

      // Parallax effect on images
      items.forEach((item, i) => {
        const img = item.querySelector('img')
        if (img) {
          const dist = i - p
          gsap.to(img, {
            x: dist * 50, // Parallax strength
            scale: 1 - Math.abs(dist) * 0.05,
            duration: 0.5,
            ease: 'power2.out'
          })
        }
      })
      
      // Update progress bar
      if (progressRef.current) {
        const progressWidth = Math.min(Math.max(-x / (totalWidth - container.offsetWidth), 0), 1)
        gsap.to(progressRef.current, {
            width: `${progressWidth * 100}%`
        })
      }
    }

    // Cleanup
    return () => {
        draggable.kill()
    }
  }, [images])

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.track} ref={trackRef}>
        {images.map((img, i) => (
          <div key={i} className={`${styles.item} slider-item`}>
            <div className={styles.imageContainer}>
              <img src={img.src} alt={img.alt} />
            </div>
            <div className={styles.overlay}>
               <span>0{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.progress}>
          <div className={styles.progressBar} ref={progressRef}></div>
      </div>
    </div>
  )
}
