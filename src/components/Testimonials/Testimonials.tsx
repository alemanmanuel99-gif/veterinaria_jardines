import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <div className="testimonials__header">
          <span className="testimonials__eyebrow">Familias Felices</span>
          <h2 className="testimonials__title">
            Lo que dicen las familias que confían en nosotros
          </h2>
          <p className="testimonials__subtitle">
            Historias reales de recuperación, bienestar y afecto sincero en Guadalajara.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="testimonial-card__stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined">
                    star
                  </span>
                ))}
              </div>

              <p className="testimonial-card__quote">"{testimonial.quote}"</p>

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{testimonial.initials}</div>
                <div className="testimonial-card__author-info">
                  <span className="testimonial-card__name">{testimonial.authorName}</span>
                  <span className="testimonial-card__pet">{testimonial.petInfo}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;