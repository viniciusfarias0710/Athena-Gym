export const ACADEMY_DATA = {
  name: 'Athena Gym',
  description: 'Academia de excelência em fitness e saúde',
  phone: '+55 (11) 9999-9999',
  whatsapp: '+5511999999999',
  email: 'contato@athenagym.com.br',
  address: 'Rua Exemplo, 123 - São Paulo, SP',
  hours: {
    weekday: '06:00 - 22:00',
    weekend: '08:00 - 18:00'
  }
}

export const PLANS = [
  {
    id: 1,
    name: 'Plano Basic',
    price: 79.90,
    features: ['Acesso à academia', 'Horário comercial', 'Sem acompanhamento']
  },
  {
    id: 2,
    name: 'Plano Plus',
    price: 129.90,
    features: ['Acesso completo', '24h', 'Avaliação física', 'Treino personalizado']
  },
  {
    id: 3,
    name: 'Plano Premium',
    price: 199.90,
    features: ['Tudo do Plus', 'Personal trainer', 'Nutricionista', 'Suplementação']
  }
]

export const SCHEDULE = [
  { day: 'Segunda a Sexta', time: '06:00 - 22:00' },
  { day: 'Sábado', time: '08:00 - 18:00' },
  { day: 'Domingo', time: 'Fechado' }
]

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Personal Trainer Master',
    specialty: 'Musculação & Hipertrofia',
    image: '💪'
  },
  {
    id: 2,
    name: 'Ana Costa',
    role: 'Personal Trainer',
    specialty: 'Funcional & HIIT',
    image: '🏃'
  },
  {
    id: 3,
    name: 'Marcela Santos',
    role: 'Instrutora de Grupo',
    specialty: 'Zumba & Aeróbica',
    image: '🎵'
  },
  {
    id: 4,
    name: 'Roberto Lima',
    role: 'Nutricionista',
    specialty: 'Avaliação & Plano Nutricional',
    image: '🥗'
  }
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'João Santos',
    feedback: 'Transformei meu corpo em 3 meses! A equipe é muito profissional e atenciosa. Recomendo!',
    rating: 5,
    image: '👨'
  },
  {
    id: 2,
    name: 'Fernanda Costa',
    feedback: 'Melhor academia que frequentei. O atendimento é excelente e os instrutores realmente se importam.',
    rating: 5,
    image: '👩'
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    feedback: 'Investimento que valeu muito a pena. Ambiente limpo, equipamentos novos e profissionais qualificados.',
    rating: 5,
    image: '👨'
  }
]

export const ABOUT_HIGHLIGHTS = [
  {
    id: 1,
    title: 'Estrutura Moderna',
    description: 'Equipamentos de última geração e ambiente aconchegante',
    icon: '🏢'
  },
  {
    id: 2,
    title: 'Profissionais Qualificados',
    description: 'Instrutores certificados com experiência comprovada',
    icon: '🏆'
  },
  {
    id: 3,
    title: 'Programas Personalizados',
    description: 'Treinos e nutrição adaptados aos seus objetivos',
    icon: '📊'
  }
]
