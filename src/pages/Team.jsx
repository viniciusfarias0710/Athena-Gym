import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Thomas from '/src/assets/team/Thomas.jpg'
import Evelyn from '/src/assets/team/Evelyn.jpg'
import Jonny from '/src/assets/team/Jonny.jpg'
import Diana from '/src/assets/team/Diana.jpg'
import Henrique from '/src/assets/team/Henrique.jpg'

export default function Team() {
  const team = [
    {
      name: 'Thomas Villar',
      role: 'Personal Trainer',
      specialty: 'Musculação e Hipertrofia',
      image: '/src/assets/team/Thomas.jpg',
      social: { instagram: '#', facebook: '#' }
    },
    {
      name: 'Evelyn Silva',
      role: 'Instrutora',
      specialty: 'Aulas Coletivas',
      image: '/src/assets/team/Evelyn.jpg',
      social: { instagram: '#', facebook: '#' }
    },
    {
      name: 'Jonny Alves',
      role: 'Instrutor',
      specialty: 'CrossFit e Funcional',
      image: '/src/assets/team/Jonny.jpg',
      social: { instagram: '#', facebook: '#' }
    },
    {
      name: 'Diana Costa',
      role: 'Instrutora',
      specialty: 'Yoga e Pilates',
      image: '/src/assets/team/Diana.jpg',
      social: { instagram: '#', facebook: '#' }
    },
    {
      name: 'Henrique Ramos',
      role: 'Instrutor',
      specialty: 'Boxe e Artes Marciais',
      image: '/src/assets/team/Henrique.jpg',
      social: { instagram: '#', facebook: '#' }
    }
  ]

  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="team-header">
          <h2>Conheca Nossa Equipe</h2>
          <p className="section-subtitle">Profissionais qualificados e apaixonados pelo que fazem</p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member card">
              <div className="member-avatar">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-specialty">{member.specialty}</p>
              
              <div className="member-social">
                <a href={member.social.instagram} className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={member.social.facebook} className="social-link">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
