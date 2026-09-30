import { buildWhatsappLink, contactInfo } from '../../data/contact';
import './CTABanner.css';

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <span className="cta-banner__icon">
          <span className="material-symbols-outlined">pets</span>
        </span>

        <h2 className="cta-banner__title">
          ¿Tienes dudas sobre la salud o vacunas de tu mascota?
        </h2>
        <p className="cta-banner__text">
          Estamos listos para orientarte con honestidad y cariño. Escríbenos y con gusto
          resolveremos tus preguntas.
        </p>

        <div className="cta-banner__actions">
          <a
            href={buildWhatsappLink('Hola Veterinaria Jardines, tengo una duda sobre mi mascota')}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-banner__btn cta-banner__btn--whatsapp"
          >
            <span className="material-symbols-outlined">chat</span>
            <span>Escribir por WhatsApp</span>
          </a>
          <a href={`tel:${contactInfo.phone}`} className="cta-banner__btn cta-banner__btn--call">
            <span className="material-symbols-outlined">call</span>
            <span>Llamar al {contactInfo.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
