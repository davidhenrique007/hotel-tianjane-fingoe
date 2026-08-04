"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { CalendarDays, MessageCircle, Users, User, Phone } from 'lucide-react';
import { rooms } from '../../data/rooms';
import { whatsappLink } from '../../data/site';
import { RiverLineMark } from '../../components/Motif/RiverLine';
import { bookingSchema, type BookingFormData } from '../../schemas/bookingSchema';

export default function Booking() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      roomId: rooms[0].id,
      guests: 2,
      name: '',
      phone: '',
      observations: '',
    },
  });

  const selectedRoomId = watch('roomId');
  const selectedRoom = rooms.find((r) => r.id === selectedRoomId);

  const onSubmit = (data: BookingFormData) => {
    const room = rooms.find((r) => r.id === data.roomId);

    const lines = [
      'Olá! Gostaria de reservar no Hotel Tianjane Fingoe.',
      room ? `Quarto: ${room.name}` : '',
      data.checkIn ? `Check-in: ${data.checkIn}` : '',
      data.checkOut ? `Check-out: ${data.checkOut}` : '',
      `Número de hóspedes: ${data.guests}`,
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      data.observations ? `Observações: ${data.observations}` : '',
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 rounded-2xl bg-cream p-7 shadow-soft md:p-9"
        >
          {/* Quarto */}
          <div className="flex flex-col gap-1">
            <label htmlFor="roomId" className="text-sm font-semibold text-forest">
              Quarto pretendido
            </label>
            <select
              id="roomId"
              {...register('roomId')}
              className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
            >
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} ({room.capacity})
                </option>
              ))}
            </select>
            {errors.roomId && (
              <p className="text-xs text-red-600">{errors.roomId.message}</p>
            )}
          </div>

          {/* Datas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="checkIn" className="flex items-center gap-1.5 text-sm font-semibold text-forest">
                <CalendarDays size={15} /> Entrada
              </label>
              <input
                id="checkIn"
                type="date"
                {...register('checkIn')}
                className="rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
              />
              {errors.checkIn && (
                <p className="text-xs text-red-600">{errors.checkIn.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkOut" className="flex items-center gap-1.5 text-sm font-semibold text-forest">
                <CalendarDays size={15} /> Saída
              </label>
              <input
                id="checkOut"
                type="date"
                {...register('checkOut')}
                className="rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
              />
              {errors.checkOut && (
                <p className="text-xs text-red-600">{errors.checkOut.message}</p>
              )}
            </div>
          </div>

          {/* Hóspedes */}
          <div className="flex flex-col gap-1">
            <label htmlFor="guests" className="flex items-center gap-1.5 text-sm font-semibold text-forest">
              <Users size={15} /> Número de hóspedes
            </label>
            <input
              id="guests"
              type="number"
              min={1}
              max={8}
              {...register('guests', { valueAsNumber: true })}
              className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
            />
            {selectedRoom && (
              <p className="text-xs text-forest/60">
                Capacidade: {selectedRoom.capacity}
              </p>
            )}
            {errors.guests && (
              <p className="text-xs text-red-600">{errors.guests.message}</p>
            )}
          </div>

          {/* Nome */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="flex items-center gap-1.5 text-sm font-semibold text-forest">
              <User size={15} /> Nome completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ex: João Silva"
              {...register('name')}
              className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
            />
            {errors.name && (
              <p className="text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="flex items-center gap-1.5 text-sm font-semibold text-forest">
              <Phone size={15} /> Telefone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Ex: 84 123 4567"
              {...register('phone')}
              className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
            />
            {errors.phone && (
              <p className="text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Observações */}
          <div className="flex flex-col gap-1">
            <label htmlFor="observations" className="text-sm font-semibold text-forest">
              Observações (opcional)
            </label>
            <textarea
              id="observations"
              rows={2}
              placeholder="Ex: Preciso de check-in tardio, alergia a travesseiros de pena..."
              {...register('observations')}
              className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none resize-none"
            />
            {errors.observations && (
              <p className="text-xs text-red-600">{errors.observations.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary mt-2 w-full disabled:opacity-60"
          >
            <MessageCircle size={17} />
            {isSubmitting ? 'A enviar...' : 'Reservar agora pelo WhatsApp'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}