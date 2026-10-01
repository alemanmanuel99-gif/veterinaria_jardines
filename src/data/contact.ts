import type { ContactInfo, ScheduleDay } from '../types';

export const contactInfo: ContactInfo = {
  phone: '+523311710632',
  phoneDisplay: '+52 33 1171 0632',
  landlinePhone: '+523345317482',
  landlinePhoneDisplay: '+52 33 4531 7482',
  whatsappBase: 'https://wa.me/523311710632',
  address: 'C. Cipriano Campos Alatorre 1208, Jardines de Los Historiadores, 44860 Guadalajara, Jal.',
  addressShort: 'C. Cipriano Campos Alatorre 1208',
  instagram: 'https://instagram.com/jardinesvet',
  facebook: 'https://www.facebook.com/p/Veterinaria-Jardines-100095201800928/',
};

export function buildWhatsappLink(message: string): string {
  return `${contactInfo.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const schedule: ScheduleDay[] = [
  { label: 'Lunes a Viernes', hours: '10:00 AM – 8:00 PM' },
  { label: 'Sábados', hours: '10:00 AM – 6:00 PM' },
  { label: 'Domingos', hours: '10:00 AM – 6:00 PM' },
];