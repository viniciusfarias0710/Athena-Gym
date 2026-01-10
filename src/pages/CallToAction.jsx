import './CallToAction.css'

export default function CallToAction() {

  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <h2>Pronto para Começar sua Transformação?</h2>
          <p>Não espere mais. Junte-se a milhares de alunos que já mudaram suas vidas na Athena Gym. A melhor hora para começar é agora!</p>

          <div className="cta-actions">
            <button className="btn btn-secondary btn-large">Comece Sua Jornada</button>
            <button className="btn btn-outline btn-large">Agende uma Visita</button>
          </div>
        </div>
      </div>
    </section>
  )
}
