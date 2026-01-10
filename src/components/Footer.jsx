import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube, } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Sobre */}
          <div className="footer-section">
            <h3>Athena Gym</h3>
            <p>
              Transformando vidas através de fitness, saúde e bem-estar há mais de 15 anos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#plans">Planos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          {/* Horários */}
          <div className="footer-section">
            <h4>Horários</h4>
            <p>Seg-Sex: 6h - 22h</p>
            <p>Sábado: 8h - 18h</p>
            <p>Domingo: Fechado</p>
          </div>

          {/* Contato */}
          <div className="footer-section">
            <h4>Contato</h4>
            <p>📍 Rua da Academia, 123</p>
            <p>📱 (11) 9999-9999</p>
            <p>✉️ contato@athenagym.com.br</p>
          </div>

          {/* Redes Sociais */}
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="https://instagram.com/athenagym" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Athena Gym. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
