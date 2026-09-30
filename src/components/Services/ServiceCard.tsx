import type { Service } from '../../types';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  const isUrgent = service.highlight === 'urgente';

  return (
    <div className={`service-card ${isUrgent ? 'service-card--urgent' : ''}`}>
      <div className="service-card__body">
        <div className="service-card__header">
          <div className={`service-card__icon ${isUrgent ? 'service-card__icon--urgent' : ''}`}>
            <span className="material-symbols-outlined">{service.icon}</span>
          </div>
          <span className={`service-card__badge ${isUrgent ? 'service-card__badge--urgent' : ''}`}>
            {isUrgent && <span className="service-card__badge-dot" />}
            {service.badge}
          </span>
        </div>

        <h3 className={`service-card__title ${isUrgent ? 'service-card__title--urgent' : ''}`}>
          {service.title}
        </h3>
        <p className="service-card__description">{service.description}</p>
      </div>

      <a 
        href={service.ctaHref}
        className={isUrgent ? 'service-card__cta-button' : 'service-card__cta-link'}
      >
        {isUrgent && <span className="material-symbols-outlined">call</span>}
        <span>{service.ctaLabel}</span>
        {!isUrgent && <span className="material-symbols-outlined">chevron_right</span>}
      </a>
    </div>
  );
}

export default ServiceCard;
