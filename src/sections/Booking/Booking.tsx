"use client";

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MessageCircle, Users } from 'lucide-react';
import { rooms } from '../../data/rooms';
import { whatsappLink } from '../../data/site';
import { RiverLineMark } from '../../components/Motif/RiverLine';

/**
 * Interface inicial de reserva. Não processa pagamentos nem verifica
 * disponibilidade em tempo real — reúne a intenção de reserva do hóspede
 * num formato claro e envia-a diretamente para o WhatsApp do hotel, para
 * confirmação humana. Uma base pronta para evoluir para um sistema de
 * reservas completo (ver README).
 */
export default function Booking() {
  const [roomId, setRoomId] = useState(rooms[0].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const room = rooms.find((r) => r.id === roomId);

    const lines = [
      'Olá! Gostaria de reservar no Hotel Tianjane Fingoe.',
      room ? `Quarto: ${room.name}` : '',
      checkIn ? `Check-in: ${checkIn}` : '',
      checkOut ? `Check-out: ${checkOut}` : '',
      `Número de hóspedes: ${guests}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-forest-dark py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />
      <RiverLineMark className="pointer-events-none absolute -top-4 right-10 h-16 w-40 opacity-20" color="#C9A66B" />

      <div className="container-page relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="eyebrow text-gold-light">Reserve em poucos passos</span>
          <h2 className="text-3xl md:text-[2.6rem] leading-[1.1] text-cream font-medium">
            Prepare a sua próxima estadia em Fingoe com conforto e tranquilidade
          </h2>
          <p className="max-w-md text-cream/75 leading-relaxed">
            Preencha os dados ao lado e envie-nos diretamente pelo WhatsApp. A nossa equipa confirma
            a disponibilidade e trata do resto consigo, sem complicações.
          </p>
          <a
            href={whatsappLink('Olá! Gostaria de falar sobre uma reserva no Hotel Tianjane Fingoe.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-fit"
          >
            <MessageCircle size={17} />
            Prefiro falar diretamente pelo WhatsApp
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl bg-cream p-7 shadow-soft md:p-9"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="room" className="text-sm font-semibold text-forest">
              Quarto pretendido
            </label>
            <select
              id="room"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
            >
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="checkin" className="flex items-center gap-1.5 text-sm font-semibold text-forest">
                <CalendarDays size={15} /> Entrada
              </label>
              <input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="checkout" className="flex items-center gap-1.5 text-sm font-semibold text-forest">
                <CalendarDays size={15} /> Saída
              </label>
              <input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="guests" className="flex items-center gap-1.5 text-sm font-semibold text-forest">
              <Users size={15} /> Número de hóspedes
            </label>
            <input
              id="guests"
              type="number"
              min={1}
              max={8}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
            />
          </div>

          <button type="submit" className="btn-primary mt-2 w-full">
            <MessageCircle size={17} />
            Reservar agora pelo WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
