// src/sections/Hero/Hero.tsx (versão com responsividade mais forte)
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig, whatsappLink } from '../../data/site';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import { RiverLineDivider } from '../../components/Motif/RiverLine';
import Button from '../../components/Button/Button';
import fachadaPrincipal from '../../assets/images/hero/fachada-principal.jpeg';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-forest-dark pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />
      <div className="pointer-events-none absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-forest-light/30 blur-3xl" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-7 z-10 order-1"
          >
            <span className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-light">
              <MapPin size={14} />
              Fingoe · Marávia · Tete
            </span>

            <h1 className="text-4xl leading-[1.08] text-cream sm:text-5xl md:text-[3.4rem]">
              Uma estadia confortável
              <br className="hidden sm:block" /> no coração de <span className="text-gold italic">Fingoe</span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
              Quartos cuidados, atendimento próximo e um ambiente tranquilo para descansar, trabalhar
              ou receber a sua família — no ponto certo de Marávia, Tete.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={whatsappLink('Olá! Gostaria de reservar um quarto no Hotel Tianjane Fingoe.')}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ArrowRight size={17} />}
              >
                Reserve o seu quarto
              </Button>
              <Button href="#quartos" variant="outline">
                Ver quartos e tarifas
              </Button>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-cream/10 pt-7 sm:grid-cols-4">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="font-display text-2xl text-gold">{stat.value}</dt>
                  <dd className="text-xs leading-snug text-cream/60">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="relative flex items-center justify-center order-2"
          >
            <div className="w-full max-w-[500px] lg:max-w-full mx-auto">
              <ImagePlaceholder 
                src={fachadaPrincipal}
                alt="Fachada do Hotel Tianjane Fingoe ao entardecer"
                aspect="portrait"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-52 rounded-xl border border-gold/30 bg-forest-dark/90 p-4 shadow-soft backdrop-blur sm:block">
              <p className="font-display text-sm italic text-gold-light">"Hospitalidade moçambicana, do check-in ao check-out."</p>
            </div>
          </motion.div>
        </div>
      </div>

      <RiverLineDivider className="absolute bottom-0 left-0 w-full h-16 opacity-40" color="#C9A66B" />
    </section>
  );
}