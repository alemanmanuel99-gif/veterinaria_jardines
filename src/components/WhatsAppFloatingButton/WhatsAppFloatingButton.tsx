import { contactInfo } from '../../data/contact';
import './WhatsAppFloatingButton.css';

function WhatsAppFloatingButton() {
  return (
    <aside className="whatsapp-float">
      <a
        href={`https://wa.me/${contactInfo.phone.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="whatsapp-float__link"
      >
        <span className="material-symbols-outlined">chat</span>
        <span className="whatsapp-float__label">Chat Urgencias</span>
      </a>
    </aside>
  );
}

export default WhatsAppFloatingButton;
