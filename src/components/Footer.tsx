'use client'

import { Linkedin, Youtube, Twitter, ChevronRight } from 'lucide-react'
import revvLogo from '@/assets/revv-logo-full-removebg-preview.png'

export function Footer() {
  const partnerships = [
    'DRDO Accredited',
    'SIDM Member',
    'iDEX Program',
    'Make in India'
  ]

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Technology', href: '#technology' },
    { name: 'Products', href: '#products' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ]

  const sectors = [
    'Defense & Security',
    'Surveillance & ISR',
    'Meteorology',
    'Logistics',
    'Geospatial'
  ]

  return (
    <footer className="relative py-16 bg-card border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 grid-tactical opacity-10" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <div className="mb-4">
                <img src={revvLogo} alt="Revv Aerospace" className="h-16 w-auto invert" loading="lazy" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                India's next-generation aerospace and defense company specializing in indigenous UAV development for mission-critical applications.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.linkedin.com/company/revv-aerospace-pvt-ltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted/50 border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted/50 border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-foreground">Navigation</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
           {/* FAQ Section */}
          <div className="col-span-12 md:col-span-6">
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-foreground">Common Inquiries</h4>
            <div className="space-y-3">
              {[
                { q: "What types of drones do you manufacture?", a: "We specialize in indigenous tactical UAVs (Fixed-Wing, VTOL, Multirotor) for defense and industrial use." },
                { q: "Are your platforms Made in India?", a: "Yes, 100% indigenous design and manufacturing, aligned with Atmanirbhar Bharat initiatives." },
                { q: "Do you offer custom development?", a: "We provide end-to-end R&D and manufacturing for payloads, airframes, and mission software." },
                { q: "What sectors do you serve?", a: "Primarily Defense, Surveillance, Meteorology, Logistics, and Geospatial mapping." },
                { q: "Where can we see your drones?", a: "Visit our HQ in Navi Mumbai or request a demo for specific use cases." }
              ].map((item, idx) => (
                <details key={idx} className="group">
                  <summary className="list-none flex justify-between items-center cursor-pointer text-muted-foreground hover:text-primary transition-colors text-sm py-1">
                    <span>{item.q}</span>
                    <span className="opacity-50 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <p className="text-xs text-muted-foreground/80 mt-2 pl-2 border-l-2 border-primary/30 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Revv Aerospace Pvt. Ltd. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-primary" />
              Navi Mumbai, Maharashtra 410208, India
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
