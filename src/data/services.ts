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
      'Esquemas completos para cachorros y adultos (Múltiple, Rabia, Giardia, Leucemia felina), carnet oficial certificado y control de parásitos internos y externos.',
    ctaLabel: 'Revisar esquema',
    ctaHref: '#agendar',
  },
  {
    id: 'cirugia',
    icon: 'surgical',
    badge: 'Quirófano',
    title: 'Cirugía Quirúrgica',
    description:
      'Quirófano esterilizado con monitoreo anestésico multiparamétrico. Esterilizaciones seguras, cirugías de tejidos blandos, suturas y extirpación de nódulos.',
    ctaLabel: 'Información prequirúrgica',
    ctaHref: '#agendar',
  },
  {
    id: 'estetica',
    icon: 'content_cut',
    badge: 'Bienestar',
    title: 'Estética Canina y Felina',
    description:
      'Baño medicado o relajante con dermocosméticos de calidad, corte higiénico o de raza, limpieza de glándulas y oídos, y corte de uñas sin dolor ni tirones.',
    ctaLabel: 'Reservar spa',
    ctaHref: '#agendar',
  },
  {
    id: 'hospitalizacion',
    icon: 'local_hospital',
    badge: 'Monitoreo',
    title: 'Hospitalización',
    description:
      'Monitoreo continuo 24 horas, fluidoterapia computarizada, jaulas confortables y termorreguladas, administración estricta de medicamentos y cuidados compasivos.',
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
    ctaHref: 'tel:+523311710632',
    highlight: 'urgente',
  },
  {
    id: 'hotel',
    icon: 'cabin',
    badge: 'Espacios Climatizados',
    title: 'Hotel & Guardería para Mascotas',
    description:
      '¿Sales de viaje? Hospeda a tu perro o gato en un entorno seguro, con paseos recreativos diarios, alimentación personalizada, supervisión veterinaria in situ y reportes continuos con fotos y videos por WhatsApp.',
    ctaLabel: 'Cotizar Hospedaje',
    ctaHref: 'https://wa.me/523311710632?text=Hola,%20me%20gustaria%20cotizar%20hospedaje%20en%20el%20Hotel%20Veterinaria%20Jardines',
    highlight: 'destacado',
  },
];