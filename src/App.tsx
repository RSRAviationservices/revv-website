import { Hero } from './components/Hero'
import { About } from './components/About'
import { Technology } from './components/Technology'
import { Products } from './components/Products'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="about-section" aria-label="About section">
          <About />
        </section>
        <section id="technology-section" aria-label="Technology section">
          <Technology />
        </section>
        <section id="products-section" aria-label="Products section">
          <Products />
        </section>
        <section id="team-section" aria-label="Team section">
          <Team />
        </section>
        <section id="contact-section" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
