import { additionalServices } from '../../data/services';
import { buildWhatsappLink } from '../../data/contact';
import './AdditionalServices.css';

function AdditionalServices() {
  return (
    <section className="additional-services">
      <div className="container additional-services__inner">
        <span className="additional-services__icon">
          <span className="material-symbols-outlined">medical_information</span>
        </span>

        <h2 className="additional-services__title">
          Atención completa y especializada.
        </h2>
        <p className="additional-services__text">
          Complementamos la atención integral de tu mascota con estudios, procedimientos y
          productos adicionales, disponibles bajo valoración de nuestro equipo médico.
        </p>

        <ul className="additional-services__list">
          {additionalServices.map((service) => (
            <li key={service.id} className="additional-services__chip">
              <span className="material-symbols-outlined">{service.icon}</span>
              <span>{service.label}</span>
            </li>
          ))}
        </ul>
         <a href={buildWhatsappLink(
    'Hola Veterinaria Jardines, quisiera preguntar por uno de sus servicios adicionales'
  )}
  target="_blank"
  rel="noopener noreferrer"
  className="additional-services__cta"
>
  <span className="material-symbols-outlined">chat</span>
  <span>Preguntar por este servicio</span>
</a>
      </div>
    </section>
  );
}

export default AdditionalServices;