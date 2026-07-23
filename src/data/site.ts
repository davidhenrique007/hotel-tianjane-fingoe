import type { NavLink } from '../types';

/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * Edite este ficheiro para atualizar contactos, número de WhatsApp e estatísticas
 * em todo o site de uma só vez.
 */
export const siteConfig = {
  hotelName: 'Hotel Tianjane Fingoe',
  shortName: 'Tianjane Fingoe',
  tagline: 'Uma estadia confortável no coração de Fingoe',
  location: 'Fingoe, Distrito de Marávia, Província de Tete, Moçambique',
  addressLine: 'Fingoe, Marávia — Tete, Moçambique',

  // TODO: substituir pelos contactos reais do hotel
  whatsappNumber: '258840000000', // formato internacional, sem "+" nem espaços
  phoneDisplay: '+258 84 000 0000',
  email: 'reservas@tianjanefingoe.co.mz',

  socials: {
    facebook: 'https://facebook.com/hoteltianjanefingoe',
    instagram: 'https://instagram.com/hoteltianjanefingoe',
  },

  stats: [
    { value: '+500', label: 'hóspedes acolhidos' },
    { value: '18', label: 'quartos disponíveis' },
    { value: '7/7', label: 'atendimento todos os dias' },
    { value: '100%', label: 'compromisso com a sua segurança' },
  ],
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Quartos', href: '#quartos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contactos', href: '#contactos' },
];
