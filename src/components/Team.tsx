'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, ChevronRight } from 'lucide-react'
import rishabImg from '@/assets/rishab.jpg'
import sameerImg from '@/assets/sameer.jpg'
import sureshImg from '@/assets/suresh.jpg'

export function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const team = [
    {
      name: "Rishab Kumar Yadav",
      role: "Head of R&D & Engineering",
      description: "Leads all research and engineering development. Expert in aerodynamics, propulsion systems, and autonomous UAV architectures.",
      image: sameerImg,
      linkedin: "https://www.linkedin.com/company/revv-aerospace-pvt-ltd/",
      color: "primary"
    },
    {
      name: "Mohd Sameer Aslam Khan",
      role: "Head of Operations & Strategy",
      description: "Oversees operational framework and strategic direction. Coordinates cross-functional teams and formulates growth strategies.",
      image: rishabImg,
      linkedin: "https://www.linkedin.com/in/sameer-khan-92a400249",
      color: "accent"
    },
    {
      name: "Suresh Rahangdale",
      role: "Director & Head of Funding",
      description: "Provides financial oversight and strategic guidance. Expertise in investment and partnerships drives growth trajectory.",
      image: sureshImg,
      linkedin: "https://www.linkedin.com/in/suresh-rahangdale-67992b169",
      color: "primary"
    }
  ]

  const openPositions = [
    "UAV R&D Engineer",
    "Flight Test Specialist", 
    "Composite Engineer",
    "Systems Integration"
  ]

  return (
    <section 
      ref={sectionRef}
      id="team" 
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-tactical opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        {/* Glow orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-bold text-primary tracking-[0.3em] uppercase">
              Leadership
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
            OUR TEAM
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Visionary leaders driving India's aerospace innovation
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="group"
            >
              <div className="card-tactical p-8 h-full hover:border-primary/50 transition-all duration-500">
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 rounded-lg blur-xl opacity-30 ${
                    member.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`} />
                  <div className="relative w-28 h-28 mx-auto clip-tactical overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                    member.color === 'primary' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-accent/20 text-accent'
                  }`}>
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-6">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-muted/50 border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
