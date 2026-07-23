import type { Testimonial } from '../types';

/**
 * TODO: substituir por depoimentos reais de hóspedes assim que estiverem disponíveis.
 * Estes textos são placeholders estratégicos para lançamento do site.
 */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Cheguei tarde depois de uma viagem longa e fui muito bem recebido. Quarto limpo, cama confortável e a equipa sempre disponível.',
    author: 'Hóspede',
    context: 'Viagem de trabalho',
  },
  {
    id: 't2',
    quote:
      'Um dos poucos lugares em Fingoe onde me senti realmente em segurança com a minha família. Vamos voltar na próxima visita à região.',
    author: 'Hóspede',
    context: 'Viagem em família',
  },
  {
    id: 't3',
    quote:
      'Atendimento próximo, sem complicação nenhuma na reserva. Trataram tudo pelo WhatsApp antes de eu chegar.',
    author: 'Hóspede',
    context: 'Estadia de negócios',
  },
];
