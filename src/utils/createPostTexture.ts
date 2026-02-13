import * as THREE from 'three'

export const createPostTexture = (title: string = 'Untitled', date: string = ''): THREE.Texture => {
  if (typeof document === 'undefined') return new THREE.Texture()

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.Texture()

  // Background - transparent for particles? Or black?
  // User said "html into an image". HTML usually has bg.
  // Let's make it black for contrast or transparent for cool effect.
  // If transparent, fewer particles.
  ctx.fillStyle = 'rgba(0,0,0,0)' // Transparent
  ctx.clearRect(0, 0, 512, 512)

  // We need pixels to generate particles. So we need solid colors.
  
  // Title
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 60px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  const words = title.split(' ')
  let line = ''
  let y = 200
  const lineHeight = 70

  for(let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    const metrics = ctx.measureText(testLine)
    const testWidth = metrics.width
    if (testWidth > 400 && n > 0) {
      ctx.fillText(line, 256, y)
      line = words[n] + ' '
      y += lineHeight
    }
    else {
      line = testLine
    }
  }
  ctx.fillText(line, 256, y)

  // Date
  ctx.font = '30px Arial'
  ctx.fillStyle = '#ff0055'
  ctx.fillText(date, 256, y + 100)

  // Border
  ctx.strokeStyle = '#ffffff'
  ctx.lineWidth = 15
  ctx.strokeRect(20, 20, 472, 472)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}
