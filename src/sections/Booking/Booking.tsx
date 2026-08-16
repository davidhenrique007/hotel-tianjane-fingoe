"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, Users, User, Phone } from "lucide-react";
import { rooms } from "../../data/rooms";
import { whatsappLink } from "../../data/site";
import { RiverLineMark, FireflyField } from "../../components/Motif/RiverLine";
import Button from "../../components/Button/Button";
import { bookingSchema, type BookingFormData } from "../../schemas/bookingSchema";

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
      name: "",
      phone: "",
      observations: "",
    },
  });

  const selectedRoomId = watch("roomId");
  const selectedRoom = rooms.find((r) => r.id === selectedRoomId);

  const onSubmit = (data: BookingFormData) => {
    const room = rooms.find((r) => r.id === data.roomId);

    const lines = [
      "Olá! Gostaria de reservar no Hotel Tianjane Fingoe.",
      room ? `Quarto: ${room.name}` : "",
      data.checkIn ? `Check-in: ${data.checkIn}` : "",
      data.checkOut ? `Check-out: ${data.checkOut}` : "",
      `Número de hóspedes: ${data.guests}`,
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      data.observations ? `Observações: ${data.observations}` : "",
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="reservar" className="relative overflow-hidden bg-gradient-to-b from-forest-dark to-forest-ink py-14 md:py-32">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-50" />
      <div className="animate-float-slow pointer-events-none absolute -top-20 right-[6%] h-80 w-80 rounded-full bg-gold/10 blur-[100px]" />
      <FireflyField className="opacity-60" />
      <RiverLineMark className="pointer-events-none absolute -top-4 right-10 h-16 w-40 opacity-20" color="#C9A66B" />

      <div className="container-page relative grid gap-8 md:gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col gap-3 overflow-hidden rounded-2xl bg-cream p-4 shadow-elevated sm:p-6 md:gap-4 md:rounded-3xl md:p-9"
        >
          <span className="gold-hairline absolute inset-x-0 top-0 h-[3px]" />

          <div className="flex flex-col gap-0.5">
            <label htmlFor="roomId" className="field-label">
              Quarto pretendido
            </label>
            <select id="roomId" {...register("roomId")} className="field-input min-h-11 py-2 text-sm md:py-3">
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} ({room.capacity})
                </option>
              ))}
            </select>
            {errors.roomId && <p className="text-xs text-red-600">{errors.roomId.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-0.5">
              <label htmlFor="checkIn" className="field-label">
                <CalendarDays size={15} /> Entrada
              </label>
              <input id="checkIn" type="date" {...register("checkIn")} className="field-input min-h-11 py-2 text-sm md:py-3" />
              {errors.checkIn && <p className="text-xs text-red-600">{errors.checkIn.message}</p>}
            </div>
            <div className="flex flex-col gap-0.5">
              <label htmlFor="checkOut" className="field-label">
                <CalendarDays size={15} /> Saída
              </label>
              <input id="checkOut" type="date" {...register("checkOut")} className="field-input min-h-11 py-2 text-sm md:py-3" />
              {errors.checkOut && <p className="text-xs text-red-600">{errors.checkOut.message}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="guests" className="field-label">
              <Users size={15} /> Número de hóspedes
            </label>
            <input
              id="guests"
              type="number"
              min={1}
              max={8}
              {...register("guests", { valueAsNumber: true })}
              className="field-input min-h-11 py-2 text-sm md:py-3"
            />
            {selectedRoom && <p className="text-xs text-forest/60">Capacidade: {selectedRoom.capacity}</p>}
            {errors.guests && <p className="text-xs text-red-600">{errors.guests.message}</p>}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="name" className="field-label">
              <User size={15} /> Nome completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ex: João Silva"
              {...register("name")}
              className="field-input min-h-11 py-2 text-sm md:py-3"
            />
            {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="phone" className="field-label">
              <Phone size={15} /> Telefone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Ex: 84 123 4567"
              {...register("phone")}
              className="field-input min-h-11 py-2 text-sm md:py-3"
            />
            {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="observations" className="text-sm font-semibold text-forest">
              Observações (opcional)
            </label>
            <textarea
              id="observations"
              rows={2}
              placeholder="Ex: Preciso de check-in tardio, alergia a travesseiros de pena..."
              {...register("observations")}
              className="field-input min-h-11 resize-none py-2 text-sm md:py-3"
            />
            {errors.observations && <p className="text-xs text-red-600">{errors.observations.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 w-full disabled:opacity-60"
            icon={<MessageCircle size={17} />}
          >
            {isSubmitting ? "A enviar..." : "Reservar agora pelo WhatsApp"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}


