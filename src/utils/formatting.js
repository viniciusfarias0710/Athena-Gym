export function formatPhone(phone) {
  return phone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3')
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export function getWhatsAppLink(phone, message = '') {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return url
}
