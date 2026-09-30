import { contactInfo } from '../../data/contact';
import './AnnouncementBar.css';

function AnnouncementBar() {
  return (
    <div className="announcement">
      <div className="announcement__inner container">
        <div className="announcement__message">
          <span className="material-symbols-outlined announcement__icon">emergency</span>
          <span className="announcement__title">URGENCIAS VETERINARIAS GDL:</span>
          <span className="announcement__subtitle">
            Guardia y estabilización inmediata activa los 7 días.
          </span>
        </div>

        <div className="announcement__contact">
          <a href={`tel:${contactInfo.phone}`} className="announcement__phone">
            <span className="material-symbols-outlined">call</span>
            {contactInfo.phoneDisplay}
          </a>
          <span className="announcement__divider">|</span>
          <span className="announcement__address">{contactInfo.addressShort}</span>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;