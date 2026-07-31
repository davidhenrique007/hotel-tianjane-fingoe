// src/sections/Hero/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig, whatsappLink } from '../../data/site';
import { RiverLineDivider } from '../../components/Motif/RiverLine';
import Button from '../../components/Button/Button';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center">
      
      {/* VÍDEO DE FUNDO */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/hotel-hero-poster.jpg" // Opcional: imagem de fallback
        >
          <source src="/videos/hotel-hero.mp4" type="video/mp4" />
          {/* Fallback para navegadores que não suportam vídeo */}
          <div className="absolute inset-0 bg-forest-dark" />
        </video>
        
        {/* OVERLAY ESCURO PARA LEGIBILIDADE DO TEXTO */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/15 to-charcoal/45 lg:bg-gradient-to-r lg:from-charcoal/75 lg:via-charcoal/25 lg:to-transparent z-10" />
        
        {/* TEXTURA DE GRÃO SUTIL */}
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40 z-10" />
      </div>

      {/* CONTEÚDO SOBREPOSTO */}
      <div className="container-page relative z-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-7"
          >
            <span className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-light">
              <MapPin size={14} />
              Fingoe · Marávia · Tete
            </span>

            <h1 className="text-4xl leading-[1.08] text-cream sm:text-5xl md:text-[3.4rem]">
              Uma estadia confortável
              <br className="hidden sm:block" /> no coração de <span className="text-gold italic">Fingoe</span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-cream/80 md:text-lg">
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

          {/* LADO DIREITO VAZIO — O VÍDEO OCUPA TODO O FUNDO */}
          <div className="hidden lg:block" />
          
        </div>
      </div>

      <RiverLineDivider className="absolute bottom-0 left-0 w-full h-16 opacity-40 z-20" color="#C9A66B" />
    </section>
  );
}