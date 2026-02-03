'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Cpu, Clock, Radio, Crosshair } from 'lucide-react'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const timeline = [
    { year: "2023", title: "Conceptual Foundation", description: "Initial R&D and UAV system architecture" },
    { year: "2024", title: "Prototyping Phase", description: "Advanced composite manufacturing setup" },
    { year: "2025", title: "Platform Testing", description: "Flight testing and partnership outreach" },
    { year: "2026", title: "Operational Deployment", description: "Mission-ready production scaling" }
  ]

  const propositions = [
    { icon: Target, title: "100% Made in India", description: "Complete indigenous design & manufacturing", color: "primary" },
    { icon: Cpu, title: "AI-Integrated Systems", description: "Autonomous navigation & smart tracking", color: "accent" },
    { icon: Eye, title: "EO/IR Imaging", description: "Thermal & infrared for all conditions", color: "primary" },
    { icon: Clock, title: "8-12 Hour Endurance", description: "Extended operational flight time", color: "accent" },
    { icon: Radio, title: "100-120 km Range", description: "Long-range secure telemetry", color: "primary" },
    { icon: Crosshair, title: "Dual-Use Platforms", description: "ISR, defense, meteorology applications", color: "accent" }
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-tactical opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Glow orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
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
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-bold text-primary tracking-[0.3em] uppercase">
              About Revv Aerospace
            </span>
            <div className="w-12 h-px bg-primary" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
            style={{ fontFamily: 'Orbitron' }}
          >
            PIONEERING INDIGENOUS
            <span className="block text-primary text-glow-primary">UAV INNOVATION</span>
          </motion.h2>
        </div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="card-tactical p-8 lg:p-12">
            <p className="text-xl text-foreground leading-relaxed mb-6">
              <strong className="text-primary">Revv Aerospace Pvt. Ltd.</strong> is a next-generation Indian aerospace and defense company headquartered in Navi Mumbai, Maharashtra. We specialize in the research, design, development, and deployment of indigenous Unmanned Aerial Vehicles (UAVs) and Autonomous Aerial Systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our drone platforms serve defense, surveillance, logistics, meteorology, and geospatial sectors—delivering scalable, mission-customizable solutions powered by advanced AI, composite engineering, and real-time data systems.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="card-tactical p-8 group hover:border-primary/50 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary/20 clip-tactical-sm flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-4" style={{ fontFamily: 'Orbitron' }}>
              OUR MISSION
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To develop world-class, indigenously built aerial systems that empower India's defense and commercial sectors with reliable, intelligent UAV technology for national security and aerospace advancement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="card-tactical p-8 group hover:border-accent/50 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-accent/20 clip-tactical-sm flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-4" style={{ fontFamily: 'Orbitron' }}>
              OUR VISION
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To position India at the global forefront of aerospace innovation by delivering sovereign UAV solutions that combine stealth, autonomy, AI, and high-performance engineering.
            </p>
          </motion.div>
        </div>

        {/* Unique Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-black text-center mb-12" style={{ fontFamily: 'Orbitron' }}>
            UNIQUE CAPABILITIES
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {propositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="group bg-card/50 border border-border hover:border-primary/30 rounded-lg p-6 transition-all duration-300 hover:bg-card"
              >
                <prop.icon className={`w-8 h-8 mb-4 ${prop.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {prop.title}
                </h4>
                <p className="text-muted-foreground text-sm">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-2xl font-black text-center mb-12" style={{ fontFamily: 'Orbitron' }}>
            DEVELOPMENT ROADMAP
          </h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary lg:-translate-x-px" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
                >
                  <div className={`lg:w-1/2 pl-8 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="card-tactical p-6 inline-block">
                      <div className="data-value text-3xl mb-2">{item.year}</div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-primary" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
