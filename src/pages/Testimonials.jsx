import './Testimonials.css'
import { useState, useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alexander',
      rating: 5,
      text: 'Muito bom! Mudou minha vida. Saí do sedentarismo para uma vida mais saudável. Recomendo!'
    },
    {
      name: 'Maria',
      rating: 4,
      text: 'Excelente atendimento, ótimos instrutores. A academia mais completa que já frequentei.'
    },
    {
      name: 'João',
      rating: 5,
      text: 'Ambiente agradável, equipamentos novos e instrutores muito profissionais. Aprovei!'
    },
    {
      name: 'Sofia',
      rating: 3,
      text: 'Desde que comecei na Athena Academy, percebi mudanças significativas em meu corpo e saúde.'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }



  const handleTouchStart = (e) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="testimonials section section-alt">
      <div className="container">
        <div className="testimonials-header">
          <h2>O Que Nossos Alunos Dizem</h2>
          <p className="section-subtitle">Depoimentos de quem já transformou sua vida conosco</p>
        </div>

        <div className="testimonials-container">
          <div
            className="testimonials-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card card">
                  <div className="testimonial-rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-name">— {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
