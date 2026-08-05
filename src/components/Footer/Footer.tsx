import { Mail, MapPin, Phone } from 'lucide-react';
import { navLinks, siteConfig } from '../../data/site';
import { RiverLineMark } from '../Motif/RiverLine';
import { FacebookIcon, InstagramIcon } from '../Motif/SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contactos" className="relative overflow-hidden bg-forest-ink text-cream">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="gold-hairline absolute inset-x-0 top-0 h-px" />
      <div className="container-page relative py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <RiverLineMark className="w-9 h-6" color="#C9A66B" />
            <span className="font-display text-xl">{siteConfig.hotelName}</span>
          </div>
          <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
            Hospedagem confortável e segura no coração de Fingoe, com hospitalidade moçambicana em
            cada detalhe da sua estadia.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Hotel Tianjane Fingoe"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
            >
              <FacebookIcon size={17} />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Hotel Tianjane Fingoe"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
            >
              <InstagramIcon size={17} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="eyebrow text-gold-light">Links rápidos</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-cream/75 hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="eyebrow text-gold-light">Contactos</h3>
          <a href={`tel:+${siteConfig.whatsappNumber}`} className="flex items-start gap-2.5 text-sm text-cream/75 hover:text-gold transition-colors">
            <Phone size={16} className="mt-0.5 shrink-0" />
            {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-2.5 text-sm text-cream/75 hover:text-gold transition-colors">
            <Mail size={16} className="mt-0.5 shrink-0" />
            {siteConfig.email}
          </a>
          <span className="flex items-start gap-2.5 text-sm text-cream/75">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            {siteConfig.addressLine}
          </span>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <span>© {year} {siteConfig.hotelName}. Todos os direitos reservados.</span>
          <span>Fingoe · Marávia · Tete · Moçambique</span>
        </div>
      </div>
    </footer>
  );
}
