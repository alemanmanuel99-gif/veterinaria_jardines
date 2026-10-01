import { buildWhatsappLink } from '../../data/contact';
import './Hero.css';

function Hero() {
  const whatsappMessage =
    'Hola Veterinaria Jardines, quisiera agendar una cita para mi mascota';

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-blob hero__bg-blob--1" />
      <div className="hero__bg-blob hero__bg-blob--2" />

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__pills">
            <span className="pill pill--rating">★ 4.7/5 en Google Reviews</span>
            <span className="pill pill--open">
              <span className="material-symbols-outlined">event_available</span>
              Abierto los 7 días
            </span>
            <span className="pill pill--location">
              <span className="material-symbols-outlined">verified</span>
              Jardines de Los Historiadores
            </span>
          </div>

          <h1 className="hero__title">Cuidamos a tu mascota como familia.</h1>
          <p className="hero__subtitle">
            Atención médica veterinaria cercana, profesional y humana en Guadalajara. Médicos
            certificados y equipo de vanguardia para la salud, calma y felicidad de tus perros y
            gatos.
          </p>

          <div className="hero__actions">
            <a 
              href={buildWhatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <span className="material-symbols-outlined">chat</span>
              Agendar cita por WhatsApp
            </a>
            <a href="#servicios" className="btn btn--secondary">
              <span className="material-symbols-outlined">stethoscope</span>
              Ver servicios médicos
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">+3</span>
              <span className="hero__stat-label">Años de experiencia</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">Vocación y amor</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number hero__stat-number--accent">Los 7 dias</span>
              <span className="hero__stat-label">Urgencias clínicas</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img
              src="../../assets/hero-consulta.png"
              alt="Consulta compasiva en Veterinaria Jardines Guadalajara"
              className="hero__image"
            />
            <div className="hero__image-tag">
              <span className="hero__image-tag-icon material-symbols-outlined">pets</span>
              <div className="hero__image-tag-text">
                <span className="hero__image-tag-title">
                  Cuidado Compasivo &amp; Equipo Experto
                </span>
                <span className="hero__image-tag-subtitle">
                  Instalaciones seguras y libres de estrés animal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
