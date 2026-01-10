import './Services.css'
import musculacaoImg from '../assets/gymservice/musculação.jpg'
import treinamentoFuncionalImg from '../assets/gymservice/treinamento-funcional.jpg'
import aulasColetivasImg from '../assets/gymservice/aulas-coletivas.jpg'
import yogaImg from '../assets/gymservice/yoga.jpg'
import crossfitImg from '../assets/gymservice/crossfit.jpg'
import boxeImg from '../assets/gymservice/boxe.jpg'

export default function Services() {
  const services = [
    {
      image: musculacaoImg,
      title: 'Musculação',
      description: 'Treinos personalizados com equipamentos de última geração para ganho de força e hipertrofia.'
    },
    {
      image: treinamentoFuncionalImg,
      title: 'Treinamento Funcional',
      description: 'Exercícios que melhoram força, resistência e flexibilidade para o dia a dia.'
    },
    {
      image: aulasColetivasImg,
      title: 'Aulas Coletivas',
      description: 'Dança, zumba, aeróbica e mais. Divirta-se enquanto se exercita em grupo.'
    },
    {
      image: yogaImg,
      title: 'Yoga e Pilates',
      description: 'Aulas focadas em flexibilidade, equilíbrio e bem-estar mental e corporal.'
    },
    {
      image: crossfitImg,
      title: 'CrossFit',
      description: 'Treinamento intenso que combina força, velocidade e resistência cardiovascular.'
    },
    {
      image: boxeImg,
      title: 'Boxe e MMA',
      description: 'Técnicas de combate em um ambiente seguro e profissional com instrutores certificados.'
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2>Nossos Serviços</h2>
          <p className="section-subtitle">Oferecemos várias modalidades para todos os objetivos</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
