import './Hero.css'

export default function Hero() {
  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>Transforme seu Corpo, Transforme sua Vida</h1>
            <p>Na Athena Gym, você encontra os melhores profissionais para ajudar você a alcançar seus objetivos. Com planos flexíveis e modalidades variadas, começar é mais fácil do que nunca.</p>
            <div className="hero-actions">
              <button className="btn btn-primary">Comece Agora</button>
              <button className="btn btn-secondary" onClick={handleGetStarted}>
                Saiba Mais
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>2K+</h3>
                <p>Alunos Satisfeitos</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Anos de Experiência</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Modalidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
