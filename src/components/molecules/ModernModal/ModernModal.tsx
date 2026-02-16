'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import styles from './ModernModal.module.scss'
import { createPortal } from 'react-dom'

interface ModernModalProps {
  isOpen: boolean
  onClose: () => void
  image: { src: string; alt: string } | null
}

export const ModernModal = ({ isOpen, onClose, image }: ModernModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(isOpen)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setVisible(true)
      document.body.style.overflow = 'hidden'
      
      // Animation In
      const ctx = gsap.context(() => {
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        })
        
        gsap.fromTo(imageRef.current, {
          scale: 0.9,
          opacity: 0,
          y: 30,
          rotationX: 10
        }, {
          scale: 1,
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.1
        })
      }, modalRef)
      
      return () => ctx.revert()
      
    } else {
      document.body.style.overflow = ''
      
      // Animation Out
      if (visible) {
        const ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                scale: 0.95,
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: 'power2.in'
            })
            gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in',
                delay: 0.1,
                onComplete: () => setVisible(false)
            })
        }, modalRef)
        return () => ctx.revert()
      }
    }
  }, [isOpen, visible])

  if (!isMounted) return null
  if (!visible && !isOpen) return null

  return createPortal(
    <div className={styles.modal} ref={modalRef}>
      <div className={styles.overlay} ref={overlayRef} onClick={onClose}></div>
      <div className={styles.content} ref={imageRef}>
         {image && (
             <div className={styles.imageWrapper} onClick={(e) => e.stopPropagation()}>
                 <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className={styles.image}
                    sizes="90vw"
                    priority
                 />
             </div>
         )}
         <button className={styles.closeButton} onClick={onClose}>
            CLOSE
         </button>
      </div>
    </div>,
    document.body
  )
}
