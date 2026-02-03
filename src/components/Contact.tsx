'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Youtube, Twitter, Loader2 } from 'lucide-react'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    enquiryType: 'general',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const { error } = await supabase
        .from('contact_queries')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          organization: formData.organization.trim() || null,
          enquiry_type: formData.enquiryType,
          message: formData.message.trim()
        })

      if (error) throw error

      toast({
        title: "Enquiry Submitted",
        description: "Thank you! Our defense team will contact you shortly.",
      })
      
      setFormData({
        name: '',
        email: '',
        organization: '',
        enquiryType: 'general',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting enquiry:', error)
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const quickActions = [
    "Submit Proposal",
    "Connect with Founders",
    "Strategic Partnership",
    "Book a Visit"
  ]

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-tactical opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Glow orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
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
              Get in Touch
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
            CONTACT US
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Partner with India's next-generation defense drone manufacturer
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card-tactical p-8">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Orbitron' }}>
                SEND AN ENQUIRY
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Organization</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Company / Organization"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Enquiry Type</label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({...formData, enquiryType: e.target.value})}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="procurement">Procurement</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="investment">Investment</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full btn-tactical px-8 py-4 text-white cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="card-tactical p-8">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Orbitron' }}>
                CONTACT INFORMATION
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 clip-tactical-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:info@revvaerospace.in" className="text-foreground hover:text-primary transition-colors font-medium">
                      info@revvaerospace.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 clip-tactical-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Phone</div>
                    <a href="tel:+919594811777" className="text-foreground hover:text-accent transition-colors font-medium">
                      +91 95948 11777
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 clip-tactical-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Address</div>
                    <p className="text-foreground font-medium">
                      G-24, Road: Unit No-B-69/70, Platinum Springs<br />
                      Plot Number: 6, G-20, Navde, Taloja<br />
                      Navi Mumbai, Maharashtra 410208
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links
            <div className="card-tactical p-8">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <button 
                    key={action}
                    className="bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/30 text-foreground font-medium py-3 px-4 rounded-lg transition-all text-sm text-left"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
