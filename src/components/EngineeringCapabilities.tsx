'use client'

import { motion } from 'framer-motion'
import { Settings, Box, TrendingUp, Layers, Printer, Cpu, GitMerge, FileText, Users } from 'lucide-react'

export function EngineeringCapabilities() {
  const capabilities = [
    {
      icon: Settings,
      title: "Aerospace Engineering & System Design",
      description: "Mission-driven concept development, UAV configuration design (fixed-wing, multirotor, VTOL), and systems architecture definition."
    },
    {
      icon: Box,
      title: "CAD Design & Digital Engineering",
      description: "Detailed 3D CAD modelling, parametric design, DFM/DFA, and configuration control for airframes and structures."
    },
    {
      icon: TrendingUp,
      title: "Aerodynamic & Structural Analysis",
      description: "CFD for performance evaluation, structural stress analysis, weight optimization, and design validation."
    },
    {
      icon: Layers,
      title: "Composite Manufacturing",
      description: "Design and fabrication of lightweight composite UAV structures using hand lay-up and vacuum-assisted processes."
    },
    {
      icon: Printer,
      title: "Additive Manufacturing (3D Printing)",
      description: "Rapid prototyping and low-volume production of complex aerospace components using advanced 3D printing."
    },
    {
      icon: Cpu,
      title: "Precision CNC Machining",
      description: "High-accuracy machining of metallic and non-metallic aerospace-grade components with tight tolerance control."
    },
    {
      icon: GitMerge,
      title: "Prototype Development",
      description: "Rapid fabrication, multi-disciplinary integration, and iterative refinement of technology demonstrators."
    },
    {
      icon: FileText,
      title: "Engineering Documentation",
      description: "Comprehensive engineering drawings, design justification, and IP-protected documentation workflows."
    },
    {
      icon: Users,
      title: "Custom Development & Collaboration",
      description: "Joint R&D, prototype development, and engineering consultancy with academic and industry partners."
    }
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid-tactical" />
        <div className="absolute top-0 left-0 w-full h-px bg-primary/20" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-primary/20" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
               Technical Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Orbitron' }}>
              ENGINEERING, DESIGN & <br />
              <span className="text-primary text-glow-primary">MANUFACTURING</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Integrated capabilities across aerospace design, advanced manufacturing, and precision engineering 
              supporting the full concept-to-prototype lifecycle.
            </p>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Connecting Lines (Decorative) */}
          <div className="absolute inset-0 border border-primary/10 hidden lg:block pointer-events-none" />
          
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-card/30 border border-primary/10 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30 group-hover:border-primary transition-colors" />

              <div className="flex items-start gap-5">
                <div className="mt-1 p-3 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 font-mono">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/10 pl-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 border border-primary/20 bg-primary/5 rounded-full">
            <span className="text-sm font-mono text-muted-foreground">
              Commitment to <span className="text-primary font-bold">Indigenous Capability Development</span> & <span className="text-primary font-bold">Atmanirbhar Bharat</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
