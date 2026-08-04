"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import { galleryImages } from '../../data/gallery';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { cn } from '../../utils/cn';
// IMPORTAR AS IMAGENS
import fachadaPrincipal from '../../assets/images/hero/fachada-principal.jpeg';
import rececao from '../../assets/images/gallery/rececao.jpg'; // â† .jpg (nÃ£o .jpeg)

export default function Gallery() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [showAll, setShowAll] = useState(false);

  const visibleImages = isDesktop || showAll ? galleryImages : galleryImages.slice(0, 4);

  // MAPEAMENTO DAS IMAGENS REAIS
  const imageMap: Record<string, string> = {
    'g1': fachadaPrincipal.src,  // Fachada
    'g5': rececao.src,           // ReceÃ§Ã£o
  };

  return (
    <section id="galeria" className="bg-white py-24 md:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Galeria"
          title="Um vislumbre da sua estadia"
          description="Quartos, áreas comuns e a paisagem à volta de Fingoe"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {visibleImages.map((image, index) => {
            const imageSrc = imageMap[image.id];
            
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
                className={cn(index === 0 && 'col-span-2 row-span-2')}
              >
                <ImagePlaceholder
                  label={image.label}
                  aspect={index === 0 ? 'square' : 'portrait'}
                  className="h-full"
                  src={imageSrc}
                  alt={image.label}
                />
              </motion.div>
            );
          })}
        </div>

        {!isDesktop && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mx-auto flex items-center gap-2 text-sm font-semibold text-forest hover:text-clay transition-colors"
          >
            <Plus size={16} />
            Ver mais fotografias
          </button>
        )}
      </div>
    </section>
  );
}

