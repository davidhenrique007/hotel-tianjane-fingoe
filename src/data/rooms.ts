import type { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'standard',
    name: 'Quarto Standard',
    tagline: 'O essencial, bem-feito',
    description:
      'Um espaço bem cuidado para descansar depois de um dia de viagem ou trabalho. Tudo o que você precisa está no lugar certo, sem excessos e sem descuido.',
    benefits: [
      'Cama confortável com roupa de cama fresca',
      'Ambiente silencioso e bem organizado',
      'Casa de banho privativa',
      'Ideal para viagens individuais e estadias curtas',
    ],
    capacity: '1–2 hóspedes',
    priceHint: 'Sob consulta',
    imageLabel: 'Quarto Standard — cama de casal junto à janela',
    minGuests: 1,  // ✅ NOVO
    maxGuests: 2,  // ✅ NOVO
  },
  {
    id: 'deluxe',
    name: 'Quarto Deluxe',
    tagline: 'Mais espaço para respirar',
    description:
      'Pensado para quem passa vários dias em Fingoe a trabalho ou em família. Mais amplo, mais silencioso e com pequenos detalhes que fazem diferença ao fim do dia.',
    benefits: [
      'Área ampliada com zona de estar',
      'Secretária para trabalho',
      'Roupeiro completo para estadias longas',
      'Ideal para profissionais e famílias pequenas',
    ],
    capacity: '2–3 hóspedes',
    priceHint: 'Sob consulta',
    imageLabel: 'Quarto Deluxe — zona de estar com luz natural',
    minGuests: 2,  // ✅ NOVO
    maxGuests: 3,  // ✅ NOVO
  },
  {
    id: 'suite-premium',
    name: 'Suíte Premium',
    tagline: 'A experiência Tianjane',
    description:
      'A nossa acomodação mais exclusiva. Um espaço amplo e privado para hóspedes que procuram tranquilidade absoluta e um padrão superior de conforto durante a estadia em Fingoe.',
    benefits: [
      'Sala e quarto em ambientes separados',
      'Maior privacidade e isolamento acústico',
      'Amenidades premium',
      'Atendimento prioritário durante a estadia',
    ],
    capacity: '2–4 hóspedes',
    priceHint: 'Sob consulta',
    imageLabel: 'Suíte Premium — sala privativa e quarto amplo',
    minGuests: 2,  // ✅ NOVO
    maxGuests: 4,  // ✅ NOVO
  },
];