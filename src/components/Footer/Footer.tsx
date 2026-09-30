import { contactInfo } from '../../data/contact';
import './Footer.css';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Servicios Médicos', href: '#servicios' },
  { label: 'Horarios y Turnos', href: '#horarios' },
  { label: 'Ubicación y Contacto', href: '#contacto' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__brand">
              <img src="/assets/logo.png" alt="Logotipo Veterinaria Jardines" className="footer__logo" />
              <span className="footer__brand-name">Veterinaria Jardines</span>
            </div>
            <p className="footer__description">
              Atención médica veterinaria con calidez, vocación y precisión técnica en
              Guadalajara. Cuidamos a tu mascota con el amor que merece.
            </p>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
            >
              <span className="material-symbols-outlined">photo_camera</span>
              <span>@jardinesvet</span>
            </a>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Navegación</h4>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#agendar" className="footer__list-highlight">
                  Agendar Cita en Línea
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Horario de Atención</h4>
            <div className="footer__hours-card">
              <div className="footer__hours-badge">
                <span className="material-symbols-outlined">event_available</span>
                <span>Abierto los 7 días</span>
              </div>
              <p>Lunes a Viernes: 09:00 - 20:00</p>
              <p>Sábados y Domingos: 10:00 - 17:00</p>
              <p className="footer__hours-emergency">
                <span className="material-symbols-outlined">emergency</span>
                Guardia de emergencias 24/7
              </p>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contacto y Sede</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <span className="material-symbols-outlined">location_on</span>
                <span>{contactInfo.address}</span>
              </div>
              <div className="footer__contact-item">
                <span className="material-symbols-outlined">call</span>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
              </div>
              <div className="footer__contact-item">
                <span className="material-symbols-outlined">near_me</span>
                <span>Guadalajara, Jalisco, México</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Veterinaria Jardines. Todos los derechos reservados.</p>
          <div className="footer__legal-links">
            <a href="#">Aviso de Privacidad</a>
            <a href="#">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
