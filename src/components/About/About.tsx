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
              src="../../assets/equipo-medico.jpg"
              alt="Equipo médico de Veterinaria Jardines Guadalajara"
              className="about__image"
            />
            <div className="about__image-overlay" />
            <div className="about__image-caption">
              <span className="about__image-tag">Equipo Médico</span>
              <p className="about__image-title">Dres. Especialistas y Asistentes</p>
              <p className="about__image-subtitle">
                Compromiso ético con la salud integral de tus mascotas.
              </p>
            </div>
          </div>

          {/*<div className="about__badge">
            <span className="material-symbols-outlined">verified_user</span>
            <div className="about__badge-text">
              <span className="about__badge-title">Cédula Profesional</span>
              <span className="about__badge-subtitle">Certificado Oficial</span>
            </div>
          </div>*/}
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
            Veterinaria Jardines nació en el 2023 en Guadalajara como un proyecto familiar impulsado por la pasión hacia el cuidado animal. Empezamos desde cero, en un local rentado y con apenas tres personas, ofreciendo consultas básicas y estética. Hoy, tres años después, contamos con instalaciones propias, un equipo de 10 colaboradores, servicios de cirugía avanzada, hospitalización, hotel canino y atención a animales exóticos respaldados por una calificación de 4.7 estrellas y la confianza de cientos de familias en Guadalajara.
          </p>

          <p className="about__text">
            En <strong>Veterinaria Jardines</strong> entendemos que tu mascota no es solo un
            animal de compañía, sino un miembro vital de tu hogar. 
            Nuestro propósito es ofrecer una medicina veterinaria con calor humano, combinamos
            tecnología médica moderna con una política de{' '}
            <span className="about__text-highlight">manejo gentil y bajo estrés</span>.
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