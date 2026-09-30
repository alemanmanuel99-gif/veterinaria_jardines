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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { id, value } = e.target;
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
          <h2 className="booking__title">Programa la visita de tu compañero</h2>
          <p className="booking__subtitle">
            Elige entre llenar nuestro formulario de registro previo o escribirnos directo vía
            WhatsApp para confirmación rápida en menos de 15 minutos.
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
                    <option value="consulta">Consulta General y Diagnóstico</option>
                    <option value="vacunacion">Vacunación y Desparasitación</option>
                    <option value="cirugia">Valoración Quirúrgica / Esterilización</option>
                    <option value="estetica">Estética y Spa Canino / Felino</option>
                    <option value="hospitalizacion">Hospitalización y Cuidados</option>
                    <option value="urgencias">Urgencia Médica (Inmediata)</option>
                    <option value="hotel">Hospedaje en Hotel para Mascotas</option>
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
                  />
                </div>
                <div className="booking-form__field">
                  <label htmlFor="prefTime">Horario preferido</label>
                  <select id="prefTime" value={formData.prefTime} onChange={handleChange}>
                    <option value="manana">Mañana (10:00 AM - 1:00 PM)</option>
                    <option value="tarde">Mediodía / Tarde (1:00 PM - 5:00 PM)</option>
                    <option value="noche">Vespertino (5:00 PM - 8:00 PM)</option>
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
                    Tiempo promedio de respuesta: <strong>&lt; 15 min</strong>
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
