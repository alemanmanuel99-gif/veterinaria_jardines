import { schedule, contactInfo } from '../../data/contact';
import './ScheduleLocation.css';

function ScheduleLocation() {
 const mapsQuery = encodeURIComponent(`Veterinaria Jardines, ${contactInfo.address}`);
const mapsUrl = `https://maps.google.com/?q=${mapsQuery}`;

  return (
    <section className="schedule" id="horarios">
      <div className="container">
        <div className="schedule__header">
          <div className="schedule__eyebrow">
            <span className="schedule__eyebrow-bar" />
            <span className="schedule__eyebrow-label">Horarios &amp; Ubicación</span>
          </div>
          <h2 className="schedule__title">Visita nuestro consultorio</h2>
          <p className="schedule__subtitle">
            Estamos ubicados de manera céntrica en Jardines de Los Historiadores, con fácil
            acceso desde avenidas principales.
          </p>
        </div>

        <div className="schedule__grid">
          {/* Card de horarios */}
          <div className="schedule-card">
            <div className="schedule-card__top">
              <div className="schedule-card__icon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <span className="schedule-card__pill">¡Abierto los 7 días de la semana!</span>
            </div>

            <h3 className="schedule-card__heading">Horario de Consulta Regular</h3>

            <ul className="schedule-list">
              {schedule.map((day) => (
                <li key={day.label} className="schedule-list__item">
                  <span className="schedule-list__label">
                    <span className="schedule-list__dot" />
                    {day.label}
                  </span>
                  <span className="schedule-list__hours">{day.hours}</span>
                </li>
              ))}
            </ul>

            <div className="schedule-card__note">
              <span className="schedule-card__note-title">
                <span className="material-symbols-outlined">emergency</span>
                Guardias y Hospitalización
              </span>
              <p>
                Atención continua de emergencia para pacientes hospitalizados y cuadros críticos
                mediante aviso previo telefónico.
              </p>
            </div>

            <div className="schedule-card__phone">
  <span>Línea telefónica directa clínica:</span>
  <a href={`tel:${contactInfo.landlinePhone}`}>
    <span className="material-symbols-outlined">call</span>
    {contactInfo.landlinePhoneDisplay}
  </a>
</div>
          </div>

          {/* Card de ubicación */}
          <div className="location-card">
            <div className="location-card__info">
              <span className="location-card__eyebrow">
                <span className="material-symbols-outlined">pin_drop</span>
                Sede Guadalajara
              </span>
              <h3 className="location-card__address">{contactInfo.addressShort}</h3>
              <p className="location-card__address-detail">
                Colonia Jardines de Los Historiadores, C.P. 44860 Guadalajara, Jalisco, México.
              </p>
            </div>

            <div className="location-map">
  <iframe
    src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
    title="Ubicación de Veterinaria Jardines en Google Maps"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="location-map__iframe"
  />
</div>

            <div className="location-card__bottom">
             {/*} <span className="location-card__parking">
                <span className="material-symbols-outlined">local_parking</span>
                Lugar disponible para tu automóvil al frente.
              </span> */}
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="location-card__maps-btn">
                <span className="material-symbols-outlined">map</span>
                <span>Abrir en Google Maps / Cómo llegar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleLocation;