import { useState, type FormEvent } from 'react';
import type { AppointmentFormData } from '../../types';
import { buildWhatsappLink } from '../../data/contact';
import './Booking.css';

const initialFormState: AppointmentFormData = {
  ownerName: '',
  ownerPhone: '',
  petInfo: '',
  serviceType: '',
  prefDate: '',
  prefTime: 'manana',
};

function Booking() {
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormState);
const [submitted, setSubmitted] = useState(false);
const [dateError, setDateError] = useState('');
  function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) {
  const { id, value } = e.target;

  if (id === 'prefDate' && value) {
    // getDay() devuelve 0 para domingo
    // Se agrega T00:00:00 para evitar desfases de zona horaria al parsear el string de fecha
    const selectedDay = new Date(`${value}T00:00:00`).getDay();

    if (selectedDay === 0) {
      setDateError('Las citas no estan disponibles en Domingo. Por favor elige otro día.');
      setFormData((prev) => ({ ...prev, prefDate: '' }));
      return;
    }
  }

  setDateError('');
  setFormData((prev) => ({ ...prev, [id]: value }));
}

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Aquí, en la fase de Back-End, este console.log se reemplazará
    // por una llamada real a la API: await fetch('/api/citas', { method: 'POST', body: JSON.stringify(formData) })
    console.log('Datos de la cita a enviar:', formData);

    setSubmitted(true);
    setFormData(initialFormState);
  }

  return (
    <section className="booking" id="agendar">
      <div className="container">
        <div className="booking__intro">
          <span className="booking__eyebrow">Citas &amp; Consultas</span>
          <h2 className="booking__title">Programa la visita de tu mascota</h2>
          <p className="booking__subtitle">
            Elige entre llenar nuestro formulario de registro previo o escribirnos directo vía
            WhatsApp para confirmación rápida.
          </p>
        </div>

        <div className="booking__grid">
          {/* Formulario */}
          <div className="booking-form-card">
            <div className="booking-form-card__header">
              <span className="booking-form-card__icon material-symbols-outlined">
                edit_calendar
              </span>
              <div>
                <h3 className="booking-form-card__title">Formulario de Registro</h3>
                <p className="booking-form-card__subtitle">Aparta tu turno sin costo inicial</p>
              </div>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-form__row">
                <div className="booking-form__field">
                  <label htmlFor="ownerName">Nombre del tutor / propietario *</label>
                  <input
                    id="ownerName"
                    type="text"
                    placeholder="Ej. Ana Lucía Morales"
                    required
                    value={formData.ownerName}
                    onChange={handleChange}
                  />
                </div>
                <div className="booking-form__field">
                  <label htmlFor="ownerPhone">Teléfono / WhatsApp *</label>
                  <input
                    id="ownerPhone"
                    type="tel"
                    placeholder="Ej. 33 1234 5678"
                    required
                    value={formData.ownerPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="booking-form__row">
                <div className="booking-form__field">
                  <label htmlFor="petInfo">Nombre y raza de la mascota *</label>
                  <input
                    id="petInfo"
                    type="text"
                    placeholder="Ej. Max (Golden Retriever, 3 años)"
                    required
                    value={formData.petInfo}
                    onChange={handleChange}
                  />
                </div>
                <div className="booking-form__field">
                  <label htmlFor="serviceType">Servicio requerido *</label>
                  <select
                    id="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Selecciona una opción...
                    </option>
                    <option value="consulta">Esterilización y Cirugía</option>
                    <option value="vacunacion">Hotel y Guardería Veterinaria</option>
                    <option value="cirugia">Interconsultas Especializadas</option>
                    <option value="estetica">Estudios Radiográficos (Rayos X)</option>
                    <option value="estetica">Consulta general</option>
              
                  </select>
                </div>
              </div>

              <div className="booking-form__row">
                <div className="booking-form__field">
  <label htmlFor="prefDate">Fecha preferida</label>
  <input
    id="prefDate"
    type="date"
    value={formData.prefDate}
    onChange={handleChange}
    className={dateError ? 'booking-form__field--error' : ''}
  />
  {dateError && <span className="booking-form__field-error">{dateError}</span>}
</div>
                <div className="booking-form__field">
                  <label htmlFor="prefTime">Horario preferido</label>
                  <select id="prefTime" value={formData.prefTime} onChange={handleChange}>
                    <option value="noche">11:00 am</option>
                    <option value="noche">12:00 pm</option>
                    <option value="noche">1:00 pm</option>
                    <option value="noche">2:00 pm</option>
                    <option value="noche">3:00 pm</option>
                    <option value="noche">4:00 pm</option>
                    <option value="noche">5:00 pm</option>
                    <option value="noche">6:00 pm</option>
                    <option value="noche">7:00 pm</option>
                    
                  </select>
                </div>
              </div>

              <button type="submit" className="booking-form__submit">
                <span className="material-symbols-outlined">check_circle</span>
                <span>Confirmar solicitud de cita</span>
              </button>

              {submitted && (
                <div className="booking-form__success">
                  <span className="material-symbols-outlined">task_alt</span>
                  <div>
                    <span className="booking-form__success-title">
                      ¡Solicitud recibida con éxito!
                    </span>
                    <span className="booking-form__success-text">
                      Un asistente de Veterinaria Jardines te contactará vía WhatsApp para afinar
                      los detalles de tu cita.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* WhatsApp rápido */}
          <div className="booking__side">
            <div className="whatsapp-card">
              <div className="whatsapp-card__content">
                <span className="whatsapp-card__icon material-symbols-outlined">
                  support_agent
                </span>
                <span className="whatsapp-card__eyebrow">Vía Rápida Digital</span>
                <h3 className="whatsapp-card__title">¿Prefieres atención inmediata?</h3>
                <p className="whatsapp-card__text">
                  Escríbenos directamente a nuestro WhatsApp oficial de la clínica. Te respondemos
                  con turnos disponibles al momento.
                </p>
                <div className="whatsapp-card__response-time">
                  <span className="material-symbols-outlined">alarm_on</span>
                  <span>
                    Tiempo promedio de respuesta: <strong>&lt; 1 - 2 horas</strong>
                  </span>
                </div>
              </div>
              <a
                href={buildWhatsappLink(
                  'Hola Veterinaria Jardines, quiero agendar una cita inmediata'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-card__cta"
              >
                <span className="material-symbols-outlined">chat</span>
                <span>Agendar directo por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
