'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function DronePortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeComparison, setActiveComparison] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const comparisons = [
    {
      id: 1,
      title: "Mountain Vista Campaign",
      before: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format&sat=-100",
      after: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format",
      description: "Color grading and atmospheric enhancement for luxury resort promotion"
    },
    {
      id: 2,
      title: "Coastal Real Estate",
      before: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format&sat=-100",
      after: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
      description: "Aerial oceanfront property showcase with enhanced vibrancy"
    },
    {
      id: 3,
      title: "Urban Skyline Series",
      before: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop&auto=format&sat=-100",
      after: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop&auto=format",
      description: "Golden hour city aerial with cinematic color treatment"
    }
  ]

  const behindTheScenes = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop&auto=format",
      title: "DJI Inspire 2 Setup",
      description: "Our primary aerial platform for cinema-grade footage"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400&h=300&fit=crop&auto=format",
      title: "Pre-Flight Planning",
      description: "Meticulous route mapping for every shoot"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=400&h=300&fit=crop&auto=format",
      title: "On-Location Capture",
      description: "Remote landscapes require precision flying"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=300&fit=crop&auto=format",
      title: "Post-Production Suite",
      description: "Where raw footage becomes cinematic art"
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section id="drone-portfolio" className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00CAB1]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Drone path animation */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 600">
          <motion.path
            d="M 0 300 Q 250 100 500 300 T 1000 300"
            stroke="url(#droneGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            {/* Animated drone icon */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-cyan-400"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M2 12h4m12 0h4" />
                  <path d="M12 2v4m0 12v4" />
                  <path d="M5.5 5.5l2 2m9 9l2 2" />
                  <path d="M18.5 5.5l-2 2m-9 9l-2 2" />
                </svg>
              </motion.div>
              {/* Propeller blur effect */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-400/40 rounded-full blur-sm animate-spin" style={{ animationDuration: '0.1s' }} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400/40 rounded-full blur-sm animate-spin" style={{ animationDuration: '0.1s' }} />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400/40 rounded-full blur-sm animate-spin" style={{ animationDuration: '0.1s' }} />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-400/40 rounded-full blur-sm animate-spin" style={{ animationDuration: '0.1s' }} />
            </div>
            <span className="text-sm font-semibold text-cyan-300/80 tracking-widest uppercase">
              Aerial Cinematography
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-cyan-100 to-[#00CAB1]/40 bg-clip-text text-transparent"
          >
            Drone Portfolio
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Breathtaking perspectives from above—showcasing the transformative power of aerial cinematography
          </motion.p>
        </div>

        {/* Before/After Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Before & After</h3>
          
          {/* Comparison selector */}
          <div className="flex justify-center gap-4 mb-8">
            {comparisons.map((comp, index) => (
              <button
                key={comp.id}
                onClick={() => {
                  setActiveComparison(index)
                  setSliderPosition(50)
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeComparison === index
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                }`}
              >
                {comp.title}
              </button>
            ))}
          </div>
          
          {/* Comparison slider */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            <div className="relative aspect-video">
              {/* After image (full) */}
              <img
                src={comparisons[activeComparison].after}
                alt="After color grading"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Before image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={comparisons[activeComparison].before}
                  alt="Before color grading"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
              
              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Slider handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" strokeWidth="2">
                    <path d="M18 8l4 4-4 4M6 8l-4 4 4 4" />
                  </svg>
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded-full text-xs text-white font-medium backdrop-blur-sm">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 rounded-full text-xs text-white font-medium backdrop-blur-sm">
                AFTER
              </div>
              
              {/* Range input (invisible, for interaction) */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </div>
            
            {/* Description */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
              <p className="text-gray-300 text-center">
                {comparisons[activeComparison].description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Behind the Scenes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Behind the Scenes</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {behindTheScenes.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-gray-900 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Flight Hours" },
            { value: "120+", label: "Projects Completed" },
            { value: "4K/8K", label: "Resolution" },
            { value: "50+", label: "Locations Worldwide" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-[#00CAB1] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
