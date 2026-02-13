import React from 'react'
import type { ThreeElements } from '@react-three/fiber'
import type { Mesh } from 'three'

type PlaneProps = ThreeElements['mesh'] & {
  width?: number
  height?: number
  widthSegments?: number
  heightSegments?: number
}

export const Plane = React.forwardRef<Mesh, PlaneProps>(
  ({ width = 1, height = 1, widthSegments = 1, heightSegments = 1, children, ...props }, ref) => {
    return (
      <mesh ref={ref} {...props}>
        <planeGeometry args={[width, height, widthSegments, heightSegments]} />
        {children}
      </mesh>
    )
  }
)

Plane.displayName = 'Plane'
