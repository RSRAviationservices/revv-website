'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Clock, Eye, Cpu, Radio, Target, Zap, Shield, Crosshair } from 'lucide-react'

export function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedProduct, setSelectedProduct] = useState(0)

  const products = [
    {
      model: "REVV1",
      type: "Flying Wing / MALE",
      useCase: "Tactical ISR, Meteorological Study",
      endurance: "150 mins",
      description: "Medium-Altitude Long Endurance tactical UAV designed for intelligence, surveillance, and reconnaissance missions with advanced EO/IR imaging capabilities.",
      features: [
        { icon: Eye, label: "EO/IR Imaging" },
        { icon: Cpu, label: "AI-Assisted Navigation" },
        { icon: Shield, label: "Stealth Capability" },
        { icon: Radio, label: "Silent Rotor" }
      ],
      image: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800&h=500&fit=crop&auto=format",
      color: "primary"
    },
    {
      model: "REVV2",
      type: "Ground Effect Vehicle (GEV)",
      useCase: "Coastal Security, Anti-Narcotics",
      endurance: "3-4 hrs",
      description: "Revolutionary ground-effect vehicle optimized for coastal patrol and maritime surveillance with water-skimming capabilities.",
      features: [
        { icon: Zap, label: "eVTOL Capable" },
        { icon: Eye, label: "Thermal Vision" },
        { icon: Target, label: "Water Skimming" },
        { icon: Radio, label: "GPS Auto Return" }
      ],
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&h=500&fit=crop&auto=format",
      color: "accent"
    },
    {
      model: "REVV3",
      type: "Loitering Munition",
      useCase: "Strike Operations, Heavy Lifting",
      endurance: "120 min",
      description: "Precision loitering munition platform with AI-assisted targeting for tactical strike operations and payload delivery.",
      features: [
        { icon: Crosshair, label: "AI Targeting" },
        { icon: Shield, label: "Low Signature" },
        { icon: Target, label: "Precision Strike" },
        { icon: Cpu, label: "Modular Payload" }
      ],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=500&fit=crop&auto=format",
      color: "primary"
    },
    {
      model: "REVV4",
      type: "Pseudo Satellite / HALE",
      useCase: "Weather Survey, High Altitude ISR",
      endurance: "16+ hrs",
      description: "High-Altitude Long Endurance platform for extended surveillance and atmospheric research missions.",
      features: [
        { icon: Radio, label: "Climate Sensors" },
        { icon: Shield, label: "Stratospheric Flight" },
        { icon: Eye, label: "Intelligence Collection" },
        { icon: Clock, label: "Long Endurance" }
      ],
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&h=500&fit=crop&auto=format",
      color: "accent"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-tactical opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Glow orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
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
              Product Catalogue
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
            UAV PLATFORMS
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Mission-ready aerial systems designed for diverse operational requirements
          </motion.p>
        </div>

        {/* Product Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {products.map((product, index) => (
            <button
              key={product.model}
              onClick={() => setSelectedProduct(index)}
              className={`px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 clip-tactical-sm ${
                selectedProduct === index
                  ? 'bg-primary text-white glow-primary'
                  : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {product.model}
            </button>
          ))}
        </motion.div>

        {/* Selected Product Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative">
                <div className={`absolute inset-0 rounded-lg blur-3xl opacity-20 ${
                  products[selectedProduct].color === 'primary' ? 'bg-primary' : 'bg-accent'
                }`} />
                <div className="relative card-tactical overflow-hidden">
                  <img
                    src={products[selectedProduct].image}
                    alt={products[selectedProduct].model}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className={`inline-block px-4 py-2 clip-tactical-sm text-sm font-bold uppercase tracking-wider ${
                      products[selectedProduct].color === 'primary' 
                        ? 'bg-primary/90 text-white' 
                        : 'bg-accent/90 text-black'
                    }`}>
                      {products[selectedProduct].type}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl lg:text-5xl font-black mb-4" style={{ fontFamily: 'Orbitron' }}>
                    {products[selectedProduct].model}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {products[selectedProduct].useCase}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {products[selectedProduct].description}
                  </p>
                </div>

                {/* Endurance */}
                <div className="card-tactical p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/20 clip-tactical-sm flex items-center justify-center">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">Flight Endurance</div>
                      <div className="data-value text-3xl">{products[selectedProduct].endurance}</div>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div>
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {products[selectedProduct].features.map((feature) => (
                      <div
                        key={feature.label}
                        className="flex items-center gap-3 bg-muted/50 border border-border rounded-lg px-4 py-3 group hover:border-primary/30 transition-all"
                      >
                        <feature.icon className={`w-5 h-5 ${
                          products[selectedProduct].color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                        <span className="text-foreground text-sm font-medium">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full btn-tactical px-8 py-4 text-white text-lg cursor-pointer"
                >
                  <span>Request Specifications</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold text-center mb-8 uppercase tracking-wider">Complete Product Line</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.model}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                onClick={() => setSelectedProduct(index)}
                className={`cursor-pointer bg-card border rounded-lg p-6 transition-all duration-300 hover:scale-105 ${
                  selectedProduct === index 
                    ? 'border-primary/50 bg-primary/5' 
                    : 'border-border hover:border-primary/30'
                }`}
              >
                <div className="text-2xl font-black mb-2" style={{ fontFamily: 'Orbitron' }}>
                  {product.model}
                </div>
                <div className="text-sm text-muted-foreground mb-4">{product.type}</div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">{product.endurance}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
