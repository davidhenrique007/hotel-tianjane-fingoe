"use client";

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import RoomCard from '../../components/RoomCard/RoomCard';
import { useRooms } from '../../hooks/useRooms';

export default function Rooms() {
  const { data: rooms, isLoading, error } = useRooms();

  if (isLoading) {
    return (
      <section id="quartos" className="bg-white py-24 md:py-32">
        <div className="container-page flex flex-col gap-14">
          <SectionHeading
            eyebrow="Quartos e acomodações"
            title="Um espaço para cada tipo de viagem"
            description="Carregando quartos..."
          />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="quartos" className="bg-white py-24 md:py-32">
        <div className="container-page flex flex-col gap-14">
          <SectionHeading
            eyebrow="Quartos e acomodações"
            title="Um espaço para cada tipo de viagem"
            description="Erro ao carregar quartos. Por favor, recarregue a página."
          />
        </div>
      </section>
    );
  }

  return (
    <section id="quartos" className="bg-white py-24 md:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Quartos e acomodações"
          title="Um espaço para cada tipo de viagem"
          description="Três categorias pensadas para necessidades diferentes — da estadia rápida de uma noite à experiência mais exclusiva da casa."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms?.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}