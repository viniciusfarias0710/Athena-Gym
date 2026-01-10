import { useState, useRef } from 'react'
import './About.css'
import aboutImage1 from '../assets/about/about-image1.jpg'
import aboutImage2 from '../assets/about/about-image2.jpg'
import aboutImage3 from '../assets/about/about-image3.jpg'
import aboutImage4 from '../assets/about/about-image4.jpg'

export default function About() {
  const images = [aboutImage1, aboutImage2, aboutImage3, aboutImage4]
  const altTexts = ['Sobre Athena Gym', 'Nossa Equipe', 'Treinamento em Ação', 'Sobre Athena Gym']
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage()
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevImage()
    }
  }
  return (
    <section id="about" className="about section section-alt">
      <div className="container">
        <div className="about-header">
          <h2>Sobre Athena Gym</h2>
          <p className="section-subtitle">Conheça nossa história e nossa missão</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Quem Somos</h3>
            <p>
              A Athena Gym é mais do que uma academia. Somos uma comunidade dedicada a transformar vidas através do movimento, saúde e bem-estar. Com mais de 15 anos de experiência, temos ajudado milhares de pessoas a alcançar seus objetivos.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <h4>Missão</h4>
                <p>Capacitar pessoas através do fitness e bem-estar, criando um ambiente inclusivo e motivador.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">👁️</div>
                <h4>Visão</h4>
                <p>Ser a academia de referência em qualidade, inovação e impacto na saúde da comunidade.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💚</div>
                <h4>Valores</h4>
                <p>Comprometimento, excelência, inclusão e inovação em tudo que fazemos.</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-box" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={altTexts[index]}
                  className={index === currentImageIndex ? 'active' : ''}
                />
              ))}
            </div>
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
