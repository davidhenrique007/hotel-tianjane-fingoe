"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const objections = [
  {
    question: 'Como faço uma reserva?',
    answer: 'Pelo botão de WhatsApp em qualquer parte do site. Indique as datas e o quarto pretendido — respondemos com a confirmação e todos os detalhes.',
  },
  {
    question: 'O hotel é seguro?',
    answer: 'Sim. Mantemos vigilância permanente nas instalações e um ambiente cuidado para que a sua estadia seja tranquila do início ao fim.',
  },
  {
    question: 'Posso reservar por telefone ou WhatsApp?',
    answer: 'Sim, é a forma mais rápida. A nossa equipa confirma disponibilidade diretamente consigo, sem burocracia.',
  },
  {
    question: 'O hotel atende empresas?',
    answer: 'Sim, mediante disponibilidade — recebemos regularmente equipas e funcionários em viagem de trabalho pela região.',
  },
];

export default function Objections() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Ainda com dúvidas?"
          title="Respostas diretas antes de reservar"
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
              className="rounded-2xl border border-forest/10 p-6"
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
