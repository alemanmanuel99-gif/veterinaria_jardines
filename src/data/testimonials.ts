import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    initials: 'SM',
    authorName: 'Sofía M.',
    petInfo: "Dueña de 'Bruno' (Golden Retriever)",
    quote:
      'La mejor veterinaria de la zona. Se nota el amor genuino que le tienen a los animales. Bruno entra feliz y sin miedo, los doctores tienen una paciencia infinita.',
    rating: 5,
  },
  {
    id: 't2',
    initials: 'CR',
    authorName: 'Carlos R.',
    petInfo: "Dueño de 'Mimi' (Gata Persa)",
    quote:
      'Excelente atención en urgencias cuando Mimi se enfermó. Muy atentos, instalaciones impecables y nos mantuvieron informados a cada hora por WhatsApp. Salvavidas totales.',
    rating: 5,
  },
  {
    id: 't3',
    initials: 'VG',
    authorName: 'Dra. Valeria G.',
    petInfo: "Dueña de 'Rocky y Coco'",
    quote:
      'Llevo a mis dos perritos a estética y vacunas. El trato es sumamente humano y los precios son muy justos y claros. No intentan venderte cosas innecesarias.',
    rating: 5,
  },
];