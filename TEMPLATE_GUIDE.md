# Oriens Template Guide

Welcome to the Oriens Template. This website has been designed to be fully customizable through a single configuration file.

## Quick Start

All site-wide content, metadata, and branding are centralized in:
`src/content/siteContent.ts`

### 1. Customizing Branding & Meta
Update the `metadata` object in `siteContent.ts` to change the site title, description, keywords, and OpenGraph (social sharing) information.

### 2. Customizing the Theme
The `theme` object in `siteContent.ts` allows you to change the core color palette:
- `background`: Main site background
- `foreground`: Primary text color
- `primary`: Accent color for buttons and highlights
- `secondary`: Secondary accent color
- `accent`: Additional highlight color

### 3. Modifying Navigation
Update the `navigation.links` array to add, remove, or rename links in the menu.

### 4. Hero & About Sections
- **Hero**: Change the large video title, subtitle, and CTA button text in the `hero` object.
- **About**: Modify the professional bio, technical stack, and sections. The images for the slider are also managed here.

### 5. Blog Posts (Markdown)
Individual posts are stored as `.md` files in:
`src/content/posts/`

The site automatically parses these files. To add a new post, simply create a new `.md` file in that directory.

---

## Technical Details

- **Framework**: Next.js 15 (App Router)
- **Styling**: SCSS Modules + CSS Variables (linked to `siteContent.ts`)
- **Animation**: Framer Motion, GSAP, and Custom Canvas components
- **Type Safety**: Fully written in TypeScript
