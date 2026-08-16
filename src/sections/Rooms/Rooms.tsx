"use client";

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import RoomCard from '../../components/RoomCard/RoomCard';
import { useRooms } from '../../hooks/useRooms';

export default function Rooms() {
  const { data: rooms, isLoading, error } = useRooms();

  if (isLoading) {
    return (
      <section id="quartos" className="bg-white pt-12 pb-12 md:pt-12 md:pb-12">
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
      <section id="quartos" className="bg-white pt-12 pb-12 md:pt-12 md:pb-12">
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
    <section id="quartos" className="bg-white pt-12 pb-12 md:pt-12 md:pb-12">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Quartos e acomodações"
          title="Um espaço para cada tipo de viagem"
          description="Três categorias pensadas para necessidades diferentes — da estadia rápida de uma noite à experiência mais exclusiva da casa."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {rooms?.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}