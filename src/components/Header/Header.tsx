import { contactInfo } from '../../data/contact';
import './Header.css';

const navLinks = [
  { path: 'inicio', label: 'Inicio', href: '#hero' },
  { path: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { path: 'servicios', label: 'Servicios', href: '#servicios' },
  { path: 'horarios', label: 'Horarios', href: '#horarios' },
  { path: 'testimonios', label: 'Testimonios', href: '#testimonios' },
];

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#hero" className="header__brand">
          <img
            src="../../assets/logo.png"
            alt="Logotipo Veterinaria Jardines"
            className="header__logo"
          />
          <div className="header__brand-text">
            <span className="header__brand-tag">Atención Integral • GDL</span>
          </div>
        </a>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.path} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={`tel:${contactInfo.landlinePhone}`} className="header__call">
  <span className="material-symbols-outlined">call</span>
  <span>
    Llamar: <strong>{contactInfo.landlinePhoneDisplay}</strong>
  </span>
</a>
          <a href="#agendar" className="header__cta">
            Agendar cita
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;