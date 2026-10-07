import { useEffect } from 'react';
import type { LegalSection } from '../../data/legal';
import './LegalModal.css';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  updatedDate: string;
  sections: LegalSection[];
}

function LegalModal({ isOpen, onClose, title, updatedDate, sections }: LegalModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="legal-modal__overlay" onClick={onClose}>
      <div
        className="legal-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="legal-modal__header">
          <div>
            <h2 id="legal-modal-title" className="legal-modal__title">
              {title}
            </h2>
            <span className="legal-modal__updated">Última actualización: {updatedDate}</span>
          </div>
          <button
            type="button"
            className="legal-modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="legal-modal__body">
          {sections.map((section) => (
            <div key={section.heading} className="legal-modal__section">
              <h3 className="legal-modal__section-heading">{section.heading}</h3>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="legal-modal__paragraph">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LegalModal;