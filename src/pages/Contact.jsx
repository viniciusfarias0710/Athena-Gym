import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você integraria com um backend ou serviço de email
    console.log('Formulário enviado:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Obrigado! Em breve entraremos em contato.')
  }



  return (
    <section id="contact" className="contact section section-alt">
      <div className="container">
        <div className="contact-header">
          <h2>Entre em Contato</h2>
          <p className="section-subtitle">Estamos aqui para ajudar você a começar sua transformação</p>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Digite sua mensagem"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary full-width">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
