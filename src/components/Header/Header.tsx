import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#hero" className="header__brand" onClick={closeMenu}>
          <img
            src="/assets/logo.png"
            alt="Logotipo Veterinaria Jardines"
            className="header__logo"
          />
          <span className="header__brand-tag">Atención Integral • GDL</span>
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

          <button
            type="button"
            className="header__menu-toggle"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="header__mobile-menu">
          <nav className="header__mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.href}
                className="header__mobile-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__mobile-divider" />

          <a
            href={`tel:${contactInfo.landlinePhone}`}
            className="header__mobile-call"
            onClick={closeMenu}
          >
            <span className="material-symbols-outlined">call</span>
            <span>Llamar: {contactInfo.landlinePhoneDisplay}</span>
          </a>

          <a href="#agendar" className="header__mobile-cta" onClick={closeMenu}>
            Agendar cita
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;