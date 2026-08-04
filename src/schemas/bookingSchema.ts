import { z } from 'zod';
import { rooms } from '../data/rooms';

export const bookingSchema = z
  .object({
    roomId: z.string().min(1, 'Selecione um tipo de quarto'),
    checkIn: z.string().min(1, 'Data de check-in obrigatória'),
    checkOut: z.string().min(1, 'Data de check-out obrigatória'),
    guests: z.number().min(1, 'Mínimo 1 hóspede'),
    name: z.string().min(3, 'Nome completo obrigatório').max(100),
    phone: z.string().regex(/^[0-9+\s()-]{9,15}$/, 'Telefone inválido'),
    observations: z.string().max(500).optional(),
  })
  .superRefine((data, ctx) => {
    // Validar datas: check-out deve ser após check-in
    if (new Date(data.checkOut) <= new Date(data.checkIn)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Check-out deve ser após o check-in',
        path: ['checkOut'],
      });
    }

    // Validar capacidade do quarto
    const room = rooms.find((r) => r.id === data.roomId);
    if (room) {
      if (data.guests < room.minGuests || data.guests > room.maxGuests) {
        ctx.addIssue({
          code: 'custom',
          message: `Este quarto aceita ${room.capacity}`,
          path: ['guests'],
        });
      }
    }
  });

export type BookingFormData = z.infer<typeof bookingSchema>;