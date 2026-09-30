import './About.css';

const values = [
  {
    icon: 'badge',
    title: 'Médicos Titulados',
    description: 'Profesionales con cédula y actualización médica continua.',
    variant: 'primary',
  },
  {
    icon: 'sanitizer',
    title: 'Higiene Clínica',
    description: 'Áreas esterilizadas bajo estrictos protocolos sanitarios.',
    variant: 'secondary',
  },
  {
    icon: 'volunteer_activism',
    title: 'Trato Sin Estrés',
    description: 'Manejo tranquilo para reducir ansiedad en perros y gatos.',
    variant: 'tertiary',
  },
] as const;

function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about__grid">
        <div className="about__media">
          <div className="about__image-wrapper">
            <img
              src="../../public/assets/equipo-medico.jpg"
              alt="Equipo médico de Veterinaria Jardines Guadalajara"
              className="about__image"
            />
            <div className="about__image-overlay" />
            <div className="about__image-caption">
              <span className="about__image-tag">Equipo Médico GDL</span>
              <p className="about__image-title">Dres. Especialistas y Asistentes</p>
              <p className="about__image-subtitle">
                Compromiso ético con la salud integral de cada paciente.
              </p>
            </div>
          </div>

          <div className="about__badge">
            <span className="material-symbols-outlined">verified_user</span>
            <div className="about__badge-text">
              <span className="about__badge-title">Cédula Profesional</span>
              <span className="about__badge-subtitle">Certificados Oficiales</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__eyebrow">
            <span className="about__eyebrow-bar" />
            <span className="about__eyebrow-label">Sobre Nosotros</span>
          </div>

          <h2 className="about__title">
            Pasión y vocación por la salud animal en Guadalajara.
          </h2>

          <p className="about__text">
            En <strong>Veterinaria Jardines</strong> entendemos que tu mascota no es solo un
            animal de compañía, sino un miembro vital de tu hogar. Fundada en Guadalajara con el
            propósito de ofrecer una medicina veterinaria con rostro humano, combinamos
            tecnología médica moderna con una política de{' '}
            <span className="about__text-highlight">manejo gentil y bajo estrés</span>.
          </p>

          <p className="about__text">
            Nuestro equipo médico se capacita continuamente para proveer diagnósticos certeros,
            planes terapéuticos honestos y acompañamiento empático tanto en chequeos preventivos
            como en momentos de emergencia crítica.
          </p>

          <div className="about__values">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className={`value-card__icon value-card__icon--${value.variant}`}>
                  <span className="material-symbols-outlined">{value.icon}</span>
                </div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;