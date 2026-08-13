export const autoMessages = [
  {
    id: 'welcome',
    message: 'Bem-vindo ao Hotel Tianjane Fingoe ✨',
    delay: 3000,
    trigger: 'load',
  },
  {
    id: 'rooms',
    message: 'Conheça nossos quartos exclusivos 🏨',
    delay: 1000,
    trigger: 'section-rooms',
  },
  {
    id: 'booking',
    message: 'Posso ajudá-lo a reservar sua estadia? 📅',
    delay: 2000,
    trigger: 'section-booking',
  },
  {
    id: 'farewell',
    message: 'Volte sempre! Estamos aqui para ajudar 💛',
    delay: 5000,
    trigger: 'exit',
  },
];

export const getRandomMessage = (trigger: string): string | null => {
  const messages = autoMessages.filter((m) => m.trigger === trigger);
  if (messages.length === 0) return null;
  const random = messages[Math.floor(Math.random() * messages.length)];
  return random.message;
};
