import { motion } from 'framer-motion';
import { HeartHandshake, MapPinned, ShieldCheck, Users } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Atendimento próximo',
    text: 'Uma equipa que trata cada hóspede pelo nome, não por número de quarto.',
  },
  {
    icon: ShieldCheck,
    title: 'Ambiente seguro',
    text: 'Vigilância permanente para que descanse sem preocupações, a qualquer hora.',
  },
  {
    icon: MapPinned,
    title: 'Localização estratégica',
    text: 'No ponto certo de Fingoe, com fácil acesso para quem viaja pela região de Marávia.',
  },
  {
    icon: Users,
    title: 'Para todo tipo de viagem',
    text: 'Preparados para turistas, famílias, profissionais e equipas de trabalho.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-cream py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <ImagePlaceholder label="Receção do Hotel Tianjane Fingoe" aspect="landscape" />
        </motion.div>

        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Sobre o hotel"
            title="Hospitalidade moçambicana, em cada detalhe da sua estadia"
            description="O Hotel Tianjane Fingoe nasceu para resolver um problema simples: em Fingoe, encontrar hospedagem confortável, limpa e segura não devia ser complicado. Construímos um espaço onde turistas, profissionais em viagem e famílias encontram tudo o que precisam para uma estadia tranquila, com um atendimento que faz questão de conhecer cada hóspede."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2.5"
              >
                <pillar.icon size={22} className="text-clay" strokeWidth={1.75} />
                <h3 className="text-base font-medium text-forest">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/65">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
