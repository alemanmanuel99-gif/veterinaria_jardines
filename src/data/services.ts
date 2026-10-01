import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'consulta',
    icon: 'stethoscope',
    badge: 'Preventiva',
    title: 'Consulta General',
    description:
      'Revisiones preventivas, diagnóstico clínico integral, pesaje, auscultación cardiopulmonar y chequeos de rutina para perros y gatos de todas las edades.',
    ctaLabel: 'Solicitar consulta',
    ctaHref: '#agendar',
  },
  {
    id: 'vacunacion',
    icon: 'vaccines',
    badge: 'Inmunización',
    title: 'Vacunación y Desparasitación',
    description:
      'Esquemas completos para cachorros y adultos (Múltiple, Rabia, Distemper canino, Parvovirus, Leucemia felina), control de parásitos internos y externos.',
    ctaLabel: 'Revisar esquema',
    ctaHref: '#agendar',
  },
  {
    id: 'cirugia',
    icon: 'surgical',
    badge: 'Quirófano',
    title: 'Cirugía Quirúrgica',
    description:
      'Quirófano esterilizado con anestesia inhalatoria con monitoreo. Esterilizaciones seguras, cirugías de tejidos blandos y suturas.',
    ctaLabel: 'Información prequirúrgica',
    ctaHref: '#agendar',
  },
  {
    id: 'estetica',
    icon: 'content_cut',
    badge: 'Bienestar',
    title: 'Estética Canina y Felina',
    description:
      'Baño medicado o relajante con dermocosméticos de calidad, corte higiénico o de raza, limpieza de glándulas y oídos, y corte de uñas.',
    ctaLabel: 'Reservar spa',
    ctaHref: '#agendar',
  },
  {
    id: 'hospitalizacion',
    icon: 'local_hospital',
    badge: 'Monitoreo',
    title: 'Hospitalización',
    description:
      'Monitoreo continuo 24 horas, fluidoterapia computarizada, espacios confortables, administración estricta de medicamentos y cuidados continuos.',
    ctaLabel: 'Protocolos de estancia',
    ctaHref: '#contacto',
  },
  {
    id: 'urgencias',
    icon: 'e911_emergency',
    badge: 'Atención Prioritaria',
    title: 'Urgencias Médicas',
    description:
      'Estabilización expedita por atropellamiento, envenenamientos o intoxicaciones, torsión gástrica, cuadros convulsivos o dificultad respiratoria aguda.',
    ctaLabel: 'Llamar ahora por Urgencia',
    ctaHref: 'tel:+523345317482',
    highlight: 'urgente',
  },
  {
    id: 'hotel',
    icon: 'cabin',
    badge: 'Tranquilidad',
    title: 'Hotel & Guardería para Mascotas',
    description:
      '¿Sales de viaje? Hospeda a tu mascota, con paseos recreativos, alimentación personalizada y supervisión veterinaria.',
    ctaLabel: 'Cotizar Hosp,edaje',
    ctaHref: 'https://wa.me/523311710632?text=Hola,%20me%20gustaria%20cotizar%20hospedaje%20en%20el%20Hotel%20Veterinaria%20Jardines',
    highlight: 'destacado',
  },
];

export interface AdditionalService {
  id: string;
  icon: string;
  label: string;
}

export const additionalServices: AdditionalService[] = [
  { id: 'laboratorio', icon: 'biotech', label: 'Estudios de laboratorio' },
  { id: 'ultrasonido', icon: 'monitor_heart', label: 'Ultrasonido' },
  { id: 'radiografias', icon: 'document_scanner', label: 'Placas radiográficas' },
  { id: 'profilaxis', icon: 'dentistry', label: 'Profilaxis (limpieza dental)' },
  { id: 'heridas', icon: 'healing', label: 'Manejo de heridas' },
  { id: 'interconsultas', icon: 'groups', label: 'Interconsultas con especialistas' },
  { id: 'exoticos', icon: 'cruelty_free', label: 'Interconsulta de animales exóticos' },
  { id: 'ventas', icon: 'storefront', label: 'Alimentos, accesorios y medicamento' },
  { id: 'cremacion', icon: 'local_florist', label: 'Cremación individual y colectiva' },
  { id: 'eutanasia', icon: 'favorite_border', label: 'Eutanasia humanitaria' },
];