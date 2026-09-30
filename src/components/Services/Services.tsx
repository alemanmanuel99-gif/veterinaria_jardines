import { services } from '../../data/services';
import { buildWhatsappLink } from '../../data/contact';
import ServiceCard from './ServiceCard';
import './Services.css';

function Services() {
  const regularServices = services.filter((s) => s.highlight !== 'destacado');
  const hotelService = services.find((s) => s.highlight === 'destacado');

  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services__header">
          <div className="services__intro">
            <div className="services__eyebrow">
              <span className="services__eyebrow-bar" />
              <span className="services__eyebrow-label">Nuestros Servicios</span>
            </div>
            <h2 className="services__title">
              Atención integral para cada etapa de su vida.
            </h2>
            <p className="services__subtitle">
              Desde la medicina preventiva básica hasta cuidados quirúrgicos y de urgencia
              hospitalaria, con atención directa en nuestra clínica en Jardines de Los
              Historiadores.
            </p>
          </div>
          <a href="#agendar" className="services__cta">
            <span>Ver disponibilidad de citas</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="services__grid">
          {regularServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {hotelService && (
            <div className="hotel-card">
              <div className="hotel-card__content">
                <div className="hotel-card__header">
                  <span className="hotel-card__icon">
                    <span className="material-symbols-outlined">{hotelService.icon}</span>
                  </span>
                  <span className="hotel-card__badge">{hotelService.badge}</span>
                </div>
                <h3 className="hotel-card__title">{hotelService.title}</h3>
                <p className="hotel-card__description">{hotelService.description}</p>
              </div>

              <a 
                href={buildWhatsappLink(
                  'Hola, me gustaria cotizar hospedaje en el Hotel Veterinaria Jardines'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-card__cta"
              >
                <span className="material-symbols-outlined">chat</span>
                <span>Cotizar Hospedaje</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
