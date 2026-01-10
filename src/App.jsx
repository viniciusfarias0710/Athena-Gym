import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Plans from './pages/Plans'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'
import Schedule from './pages/Schedule'
import CallToAction from './pages/CallToAction'
import Contact from './pages/Contact'
import { DarkModeProvider } from './contexts/DarkModeContext'
import './App.css'

export default function App() {
  return (
    <DarkModeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Plans />
          <Team />
          <Testimonials />
          <Schedule />
          <CallToAction />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  )
}
