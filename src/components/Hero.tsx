'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ChevronDown, Radar, Shield, Target, Crosshair } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import revvLogo from '@/assets/revv-logo-full-removebg-preview.png'
import heroVideo from '@/assets/Indigenous_Drone_Platform_Video_Generation.mp4'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const stats = [
    { value: "6", label: "UAV Platforms", icon: Target },
    { value: "200+km", label: "Max Range", icon: Radar },
    { value: "20+hrs", label: "Endurance", icon: Shield },
    { value: "95%", label: "Indigenous", icon: Crosshair },
  ]

  return (
    <div ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=1920&h=1080&fit=crop&auto=format"
          alt="Military drone surveillance"
          className="w-full h-full object-cover scale-110"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
        
        {/* Tactical grid overlay */}
        <div className="absolute inset-0 grid-tactical opacity-40" />
        
        {/* Scan lines effect */}
        <div className="absolute inset-0 scan-lines opacity-30" />
        
        {/* Hex pattern */}
        <div className="absolute inset-0 hex-pattern" />
      </motion.div>

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-500 ${
            isScrolled 
              ? 'bg-background/95 backdrop-blur-xl border-b border-primary/20' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img src={revvLogo} alt="Revv Aerospace" className="h-16 sm:h-20 w-auto invert" />
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Technology', 'Products', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-foreground/80 hover:text-primary font-semibold uppercase text-sm tracking-wider gentle-animation story-link"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Side - CTA + Mobile Menu */}
            <div className="flex items-center space-x-3 relative">
              {/* CTA Button - Hidden on mobile */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hidden sm:block btn-tactical px-6 py-3 text-white text-sm cursor-pointer"
              >
                <span>Defense Enquiry</span>
              </motion.button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 rounded-lg border border-primary/30 text-foreground hover:bg-primary/10 active:bg-primary/20 gentle-animation cursor-pointer z-[120] relative"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="mobile-menu-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-lg border border-primary/30 text-foreground hover:bg-primary/10 gentle-animation cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col px-6 pb-6 h-full">
            <div className="flex flex-col space-y-2">
              {['About', 'Technology', 'Products', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
              className="btn-tactical px-6 py-4 text-white mt-8 cursor-pointer"
            >
              <span>Defense Enquiry</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex flex-col justify-center pt-20"
      >
        <div className="max-w-4xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-60"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
            </div>
            <span className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 px-5 py-2.5 clip-tactical-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-bold uppercase text-sm tracking-wider">Made in India 🇮🇳</span>
            </span>
          </motion.div>
          
          {/* Text Content Wrapper with Video Background */}
          <div className="relative py-10">
            

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-8 relative z-10"
              style={{ fontFamily: 'Orbitron' }}
            >
              <span className="block text-foreground">INDIA'S INDIGENOUS</span>
              <span className="block text-primary text-glow-primary">DEFENSE DRONE</span>
              <span className="block text-foreground">MANUFACTURER</span>
            </motion.h1>
          
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed relative z-10"
            >
              Engineering the future of <span className="text-accent text-glow-accent">tactical UAVs</span> for 
              national security, surveillance, and strategic operations.
            </motion.p>

          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px hsl(25 95% 53% / 0.4)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const productsSection = document.getElementById('products')
                productsSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-tactical px-8 py-4 text-white text-lg cursor-pointer"
            >
              <span>Explore UAV Platforms</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-tactical-outline px-8 py-4 text-primary text-lg cursor-pointer"
            >
              Connect with Team
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                className="card-tactical p-5 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <div className="data-value text-2xl lg:text-3xl">{stat.value}</div>
                </div>
                <div className="data-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById('about')
            aboutSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Fly With Us</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 right-8 w-32 h-32 border-r-2 border-t-2 border-primary/20 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-primary/20 hidden lg:block" />
    </div>
  )
}
