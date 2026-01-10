import './Plans.css'

export default function Plans() {
  const plans = [
    {
      name: 'Essential',
      price: '150',
      description: 'Perfeito para quem está começando',
      features: [
        'Acesso à musculação',
        'Horário comercial (6h - 22h)',
        'Suporte básico'
      ],
      featured: false
    },
    {
      name: 'Premium',
      price: '250',
      description: 'O plano mais escolhido',
      features: [
        'Acesso a todas as modalidades',
        'Acesso 24/7',
        'Aulas coletivas incluídas',
        'Suporte prioritário',
        'Avaliação física trimestral'
      ],
      featured: true
    },
    {
      name: 'Elite',
      price: '350',
      description: 'Para quem quer o melhor',
      features: [
        'Tudo do Premium',
        'Personal trainer 1x semana',
        'Nutricionista consulta',
        'Vestiário premium',
        'Piscina aquecida'
      ],
      featured: false
    }
  ]

  return (
    <section id="plans" className="plans section section-alt">
      <div className="container">
        <div className="plans-header">
          <h2>Planos e Preços</h2>
          <p className="section-subtitle">Escolha o plano ideal para você</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card card ${plan.featured ? 'card-featured' : ''}`}>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">
                <span className="currency">R$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/mês</span>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.featured ? 'btn-secondary' : 'btn-primary'} full-width`}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
