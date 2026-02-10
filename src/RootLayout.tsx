import { ReactNode } from 'react'
import { Toaster } from '@/components/ui/sonner'
import './index.css'

interface RootLayoutProps {
  children: ReactNode
}

/**
 * Root layout component for the Revv Aerospace website.
 * Provides consistent structure, metadata handling, and global UI components.
 */
export function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      {children}
      <Toaster richColors />
    </>
  )
}

// Metadata for the application (used in index.html)
export const metadata = {
  title: 'Revv Aerospace | India\'s Indigenous Defense Drone Manufacturer',
  description: 'Revv Aerospace Pvt. Ltd. offers integrated capabilities across aerospace design, advanced manufacturing, and precision engineering, supporting the development of unmanned systems and aerospace components.',
  keywords: 'revv aerospace, drone, indian drone, revv, UAV, defense, manufacturing, indigenous, Atmanirbhar Bharat, aerospace engineering, made in india, precision engineering, tactical drones',
  author: 'Revv Aerospace',
  ogImage: 'https://www.revvaerospace.com/revv-logo-full.jpeg',
  canonicalUrl: 'https://www.revvaerospace.com',
}
