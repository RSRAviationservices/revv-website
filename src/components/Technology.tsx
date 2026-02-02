'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plane, Wrench, Eye, Radio, RefreshCw, Satellite, Zap, Shield, Target } from 'lucide-react'

export function Technology() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const capabilities = [
    {
      title: "Indigenous UAV Development",
      description: "Complete in-house design, prototyping, and deployment of fixed-wing, VTOL, and conceptual UAM drones.",
      icon: Plane,
      color: "primary"
    },
    {
      title: "Advanced Composite Manufacturing",
      description: "Vacuum-bagged carbon fiber structures for superior strength-to-weight ratio and stealth capabilities.",
      icon: Wrench,
      color: "accent"
    },
    {
      title: "Stealth Engineering",
      description: "Radar signature minimization using tailored geometries and composite skin integration.",
      icon: Eye,
      color: "primary"
    },
    {
      title: "Secure Long-Range Telemetry",
      description: "Encrypted, interference-resistant telemetry systems with 50–70+ km operational range.",
      icon: Radio,
      color: "accent"
    },
    {
      title: "Modular Mission Architecture",
      description: "Swap payloads for surveillance, logistics, mapping, or tactical engagement within minutes.",
      icon: RefreshCw,
      color: "primary"
    },
    {
      title: "Indian Satellite Integration",
      description: "GNSS configurations using NavIC-only receivers for strategic autonomy.",
      icon: Satellite,
      color: "accent"
    }
  ]

  const specs = [
    { value: "8-12", unit: "Hours", label: "Flight Endurance", icon: Zap },
    { value: "100-120", unit: "km", label: "Operational Range", icon: Target },
    { value: "50-70", unit: "km", label: "Telemetry Range", icon: Radio },
    { value: "15,000", unit: "ft", label: "Max Altitude", icon: Shield }
  ]

  return (
    <section 
      ref={sectionRef}
      id="technology" 
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-tactical opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        {/* Glow orbs */}
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-sm font-bold text-accent tracking-[0.3em] uppercase">
              Technology & Capabilities
            </span>
            <div className="w-12 h-px bg-accent" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
            style={{ fontFamily: 'Orbitron' }}
          >
            CORE COMPETENCIES
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Cutting-edge aerospace technology developed in-house for mission-critical operations
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group card-tactical p-8 hover:border-primary/50 transition-all duration-500"
            >
              <div className={`w-14 h-14 clip-tactical-sm flex items-center justify-center mb-6 transition-colors ${
                cap.color === 'primary' 
                  ? 'bg-primary/20 group-hover:bg-primary/30' 
                  : 'bg-accent/20 group-hover:bg-accent/30'
              }`}>
                <cap.icon className={`w-7 h-7 ${cap.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
              </div>
              
              <h3 className={`text-lg font-bold mb-4 transition-colors ${
                cap.color === 'primary' 
                  ? 'text-foreground group-hover:text-primary' 
                  : 'text-foreground group-hover:text-accent'
              }`}>
                {cap.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Specs Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="card-tactical p-8 lg:p-12 max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'Orbitron' }}>
              TECHNICAL SPECIFICATIONS
            </h3>
            <p className="text-muted-foreground">Industry-leading performance metrics</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="text-center p-6 rounded-lg bg-muted/50 border border-border group hover:border-primary/30 transition-all"
              >
                <spec.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="data-value text-3xl lg:text-4xl mb-1">
                  {spec.value}
                </div>
                <div className="text-lg text-accent font-semibold mb-2">{spec.unit}</div>
                <div className="data-label">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
