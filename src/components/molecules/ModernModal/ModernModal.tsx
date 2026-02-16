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
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(isOpen)
  const [isMounted, setIsMounted] = useState(false)
  
  // Scanning logic refs
  const isScanning = useRef(false)
  const xTo = useRef<gsap.QuickToFunc | null>(null)
  const yTo = useRef<gsap.QuickToFunc | null>(null)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Initialize QuickTo
  useEffect(() => {
    if (isOpen && wrapperRef.current) {
        const img = wrapperRef.current.querySelector('img');
        if (img) {
            xTo.current = gsap.quickTo(img, "x", { duration: 0.1, ease: "power2.out" });
            yTo.current = gsap.quickTo(img, "y", { duration: 0.1, ease: "power2.out" });
        }
    }
  }, [isOpen])

  const handlePointerDown = (e: React.PointerEvent) => {
      e.stopPropagation();
      e.preventDefault(); // Prevent default drag behavior
      isScanning.current = true;
      
      const img = wrapperRef.current?.querySelector('img');
      if (img) {
        gsap.to(img, {
            scale: 2.5,
            duration: 0.4,
            ease: 'power2.out'
        });
        handlePointerMove(e);
      }
  }
  
  const handlePointerUp = (e: React.PointerEvent) => {
      e.stopPropagation();
      isScanning.current = false;
      
      const img = wrapperRef.current?.querySelector('img');
      if (img) {
        gsap.to(img, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.75)'
        });
      }
  }
  
  const handlePointerMove = (e: React.PointerEvent) => {
      if (!isScanning.current || !wrapperRef.current) return;
      
      const rect = wrapperRef.current.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width;
      const yPct = (e.clientY - rect.top) / rect.height;
      
      const safeX = Math.max(0, Math.min(1, xPct));
      const safeY = Math.max(0, Math.min(1, yPct));
      
      const scale = 2.5;
      const width = rect.width;
      const height = rect.height;
      
      // Calculate pan to center the mouse position
      const targetX = (0.5 - safeX) * width * (scale - 1);
      const targetY = (0.5 - safeY) * height * (scale - 1);
      
      xTo.current?.(targetX);
      yTo.current?.(targetY);
  }

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
             <div 
                className={styles.imageWrapper} 
                ref={wrapperRef}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onPointerMove={handlePointerMove}
                onClick={(e) => e.stopPropagation()}
                style={{ cursor: isScanning.current ? 'none' : 'zoom-in' }}
             >
                 <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className={styles.image}
                    sizes="90vw"
                    priority
                    draggable={false}
                 />
             </div>
         )}
         <button className={styles.closeButton} onClick={onClose}>
            CERRAR
         </button>
      </div>
    </div>,
    document.body
  )
}
