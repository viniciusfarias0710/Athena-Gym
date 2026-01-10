import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useDarkMode()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header sticky">
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <h1>Athena Gym</h1>
          </div>

          {/* Menu Button Mobile */}
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <button onClick={() => scrollToSection('hero')} className="nav-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="nav-link">
                Serviços
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('plans')} className="nav-link">
                Planos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('team')} className="nav-link">
                Equipe
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('schedule')} className="nav-link">
                Horários
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contato
              </button>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA Button */}
          <button className="btn btn-primary cta-button" onClick={() => scrollToSection('contact')}>
            Matricule-se
          </button>
        </nav>
      </div>
    </header>
  )
}
