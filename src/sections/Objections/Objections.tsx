"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const objections = [
  {
    question: 'Como faÃ§o uma reserva?',
    answer: 'Pelo botÃ£o de WhatsApp em qualquer parte do site. Indique as datas e o quarto pretendido â€” respondemos com a confirmaÃ§Ã£o e todos os detalhes.',
  },
  {
    question: 'O hotel Ã© seguro?',
    answer: 'Sim. Mantemos vigilÃ¢ncia permanente nas instalaÃ§Ãµes e um ambiente cuidado para que a sua estadia seja tranquila do inÃ­cio ao fim.',
  },
  {
    question: 'Posso reservar por telefone ou WhatsApp?',
    answer: 'Sim, Ã© a forma mais rÃ¡pida. A nossa equipa confirma disponibilidade diretamente consigo, sem burocracia.',
  },
  {
    question: 'O hotel atende empresas?',
    answer: 'Sim, mediante disponibilidade â€” recebemos regularmente equipas e funcionÃ¡rios em viagem de trabalho pela regiÃ£o.',
  },
];

export default function Objections() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Ainda com dÃºvidas?"
          title="Dúvidas frequentes"
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {objections.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-2xl border border-forest/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-elevated"
            >
              <h3 className="mb-2 text-base font-medium text-forest">{item.question}</h3>
              <p className="text-sm leading-relaxed text-charcoal/70">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

