import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'wifi',
    name: 'Wi-Fi em todo o hotel',
    description: 'Ligação disponível nos quartos e nas áreas comuns, para se manter em contacto ou resolver trabalho pendente.',
    icon: 'wifi',
  },
  {
    id: 'recepcao',
    name: 'Receção 24 horas',
    description: 'A nossa equipa está disponível a qualquer hora para o check-in, pedidos ou qualquer imprevisto da sua viagem.',
    icon: 'concierge-bell',
  },
  {
    id: 'estacionamento',
    name: 'Estacionamento privativo',
    description: 'Espaço seguro para o seu veículo dentro do hotel, sem preocupações durante a sua estadia.',
    icon: 'car',
  },
  {
    id: 'restaurante',
    name: 'Restaurante',
    description: 'Refeições preparadas com ingredientes locais, do pequeno-almoço ao jantar, num ambiente tranquilo.',
    icon: 'utensils',
  },
  {
    id: 'servico-quarto',
    name: 'Serviço de quarto',
    description: 'Peça o que precisar sem sair do conforto do seu quarto, em qualquer altura da sua estadia.',
    icon: 'bell',
  },
  {
    id: 'seguranca',
    name: 'Segurança permanente',
    description: 'Vigilância contínua nas instalações para que possa descansar com total tranquilidade.',
    icon: 'shield-check',
  },
  {
    id: 'eventos',
    name: 'Organização de eventos',
    description: 'Espaço e apoio para pequenas reuniões, encontros de empresa ou celebrações em família.',
    icon: 'calendar-heart',
  },
  {
    id: 'transporte',
    name: 'Apoio com transporte',
    description: 'Orientação e apoio na organização de deslocações dentro de Fingoe e arredores, mediante disponibilidade.',
    icon: 'car-front',
  },
];
