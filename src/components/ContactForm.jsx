import { useState } from 'react'
import Button from './Button'
import { ACADEMY_DATA } from '../utils/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    // Mensagem para WhatsApp
    const whatsappMessage = `
Olá! Meu nome é ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}
    `.trim()

    // Enviar para WhatsApp
    const whatsappUrl = `https://wa.me/${ACADEMY_DATA.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')

    // Limpar formulário
    setFormData({ name: '', email: '', phone: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Nome *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Telefone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(11) 99999-9999"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Mensagem *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Como podemos ajudar?"
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
          required
        ></textarea>
      </div>

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          Obrigado! Vamos entrar em contato em breve.
        </div>
      )}

      <Button type="submit" variant="primary" size="md" className="w-full">
        Enviar Mensagem
      </Button>
    </form>
  )
}
