export interface Service {
  id: string;
  icon: string;           // nombre del ícono de Material Symbols
  badge: string;          // etiqueta pequeña, ej. "Preventiva"
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlight?: 'urgente' | 'destacado'; // variante visual opcional
}

export interface Testimonial {
  id: string;
  initials: string;
  authorName: string;
  petInfo: string;      // ej. "Dueña de 'Bruno' (Golden Retriever)"
  quote: string;
  rating: number;        // 1 a 5
}

export interface ScheduleDay {
  label: string;
  hours: string;
}

export interface AppointmentFormData {
  ownerName: string;
  ownerPhone: string;
  petInfo: string;
  serviceType: string;
  prefDate: string;
  prefTime: 'manana' | 'tarde' | 'noche';
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  landlinePhone: string;
  landlinePhoneDisplay: string;
  whatsappBase: string;
  address: string;
  addressShort: string;
  instagram: string;
  facebook: string;
}