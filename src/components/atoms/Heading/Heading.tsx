import React from 'react'
import styles from './Heading.module.scss'
import clsx from 'clsx'

interface HeadingProps {
  id: string // Mandatory
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({ id, tag = 'h1', children, className }) => {
  const Tag = tag
  return (
    <Tag id={id} className={clsx(styles.heading, styles[tag], className)}>
      {children}
    </Tag>
  )
}
