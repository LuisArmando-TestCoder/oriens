import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string // Mandatory
  children: React.ReactNode
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ id, children, className, ...props }, ref) => {
    return (
      <button ref={ref} id={id} className={clsx(styles.button, className)} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
