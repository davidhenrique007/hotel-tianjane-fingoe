import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { services } from '../../data/services';

export default function Services() {
  return (
    <section id="servicos" className="bg-cream-soft py-24 md:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Serviços do hotel"
          title="Tudo pensado para uma estadia sem sobressaltos"
          description="Da chegada à partida, cuidamos dos detalhes para que a sua atenção fique livre para o que realmente importa."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
