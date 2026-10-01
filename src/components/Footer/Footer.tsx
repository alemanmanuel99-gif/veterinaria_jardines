import { contactInfo } from '../../data/contact';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
  <div className="footer__brand">
    <img src="/assets/logo.png" alt="Logotipo Veterinaria Jardines" className="footer__logo" />
  </div>

  <div className="footer__social-group">
    <a 
      href={contactInfo.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="footer__social"
    >
      <svg viewBox="0 0 24 24" className="footer__social-icon" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
      <span>@jardinesvet</span>
    </a>

    <a 
      href={contactInfo.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className="footer__social"
    >
      <svg viewBox="0 0 24 24" className="footer__social-icon" fill="currentColor">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
      <span>Veterinaria Jardines</span>
    </a>
  </div>
</div>


          <div className="footer__col">
            <h4 className="footer__heading">Horario de Atención</h4>
            <div className="footer__hours-card">
              <div className="footer__hours-badge">
                <span className="material-symbols-outlined">event_available</span>
                <span>Abierto los 7 días</span>
              </div>
              <p>Lunes a Viernes: 10:00 - 20:00</p>
              <p>Sábados y Domingos: 10:00 - 18:00</p>
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
  <a href={`tel:${contactInfo.landlinePhone}`}>{contactInfo.landlinePhoneDisplay}</a>
</div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
  <p>© {year} Veterinaria Jardines. Todos los derechos reservados.</p>
  <div className="footer__legal-links">
    <a href="#">Aviso de Privacidad</a>
    <a href="#">Términos de Servicio</a>
    
    
    <a 
      href="https://alemanmanuel99-gif.github.io/lightspeed-web/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer__dev-credit"
>
  <span>Desarrollado por</span>
  <span className="material-symbols-outlined footer__dev-credit-icon">bolt</span>
  <span className="footer__dev-credit-brand">Lightspeed</span>
</a>
  </div>
</div>

      </div>
    </footer>
  );
}

export default Footer;
