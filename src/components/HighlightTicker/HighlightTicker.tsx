import './HighlightTicker.css';

const highlights = [
  { icon: 'favorite', label: 'Trato amoroso y sin coerción' },
  { icon: 'medical_services', label: 'Quirófano totalmente equipado' },
  { icon: 'vaccines', label: 'Vacunas certificadas' },
  { icon: 'pets', label: 'Hotel y guarderia de mascotas' },
];

function HighlightTicker() {
  return (
    <div className="ticker">
      <div className="container ticker__inner">
        {highlights.map((item) => (
          <div key={item.icon} className="ticker__item">
            <span className="material-symbols-outlined ticker__icon">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightTicker;