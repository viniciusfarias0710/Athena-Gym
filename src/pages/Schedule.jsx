import './Schedule.css'

export default function Schedule() {
  const schedule = [
    { time: '06:00', monday: 'Musculação', tuesday: 'Yoga', wednesday: 'Musculação', thursday: 'Pilates', friday: 'Musculação', saturday: 'CrossFit' },
    { time: '07:00', monday: 'CrossFit', tuesday: 'Aeróbica', wednesday: 'CrossFit', thursday: 'Zumba', friday: 'CrossFit', saturday: 'Boxe' },
    { time: '18:00', monday: 'Aulas Coletivas', tuesday: 'Funcional', wednesday: 'Aulas Coletivas', thursday: 'Funcional', friday: 'Aulas Coletivas', saturday: 'Yoga' },
    { time: '19:00', monday: 'Boxe', tuesday: 'MMA', wednesday: 'Boxe', thursday: 'MMA', friday: 'Boxe', saturday: 'Pilates' },
    { time: '20:00', monday: 'Musculação', tuesday: 'Yoga', wednesday: 'Musculação', thursday: 'Pilates', friday: 'Musculação', saturday: 'Musculação' }
  ]

  return (
    <section id="schedule" className="schedule section">
      <div className="container">
        <div className="schedule-header">
          <h2>Horários de Aulas</h2>
          <p className="section-subtitle">Escolha o horário que melhor se encaixa em sua rotina</p>
        </div>

        <div className="schedule-wrapper">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Horário</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
                <th>Sábado</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index}>
                  <td className="time-cell">{row.time}</td>
                  <td>{row.monday}</td>
                  <td>{row.tuesday}</td>
                  <td>{row.wednesday}</td>
                  <td>{row.thursday}</td>
                  <td>{row.friday}</td>
                  <td>{row.saturday}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="schedule-note">
          <p>💡 Domingos: Período de descanso. Apenas acesso à musculação e área de saunas.</p>
        </div>
      </div>
    </section>
  )
}
