// src/components/Header/Header.tsx
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig, whatsappLink } from '../../data/site';
import { RiverLineMark } from '../Motif/RiverLine';
import Button from '../Button/Button';

/**
 * Cabeçalho fixo. Fica transparente sobre o Hero e ganha fundo sólido
 * ao rolar a página, para manter o texto sempre legível.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled || menuOpen 
          ? 'bg-[#2A4A5A]/95 backdrop-blur-sm shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-2.5 text-cream">
          <RiverLineMark className="w-9 h-6" color="#D4B896" />
          <span className="font-display text-lg leading-none tracking-wide text-cream">
            {siteConfig.shortName}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/85 hover:text-[#D4B896] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={whatsappLink('Olá! Gostaria de consultar disponibilidade no Hotel Tianjane Fingoe.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar agora
          </Button>
        </div>

        <button
          className="lg:hidden text-cream p-2 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-[#1A3440]/98 backdrop-blur-sm"
          >
            <div className="container-page flex flex-col gap-1 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base text-cream/90 border-b border-cream/10 active:text-[#D4B896]"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={whatsappLink('Olá! Gostaria de consultar disponibilidade no Hotel Tianjane Fingoe.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full"
              >
                Reservar agora
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}