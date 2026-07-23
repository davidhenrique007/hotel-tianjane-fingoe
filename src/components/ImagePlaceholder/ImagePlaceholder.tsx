import { ImageIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ImagePlaceholderProps {
  label?: string;
  aspect?: 'square' | 'portrait' | 'landscape' | 'wide';
  className?: string;
  src?: string;        // NOVO: imagem real
  alt?: string;        // NOVO: texto alternativo
  children?: React.ReactNode; // NOVO: para overlay como no Hero
}

const aspectClass: Record<NonNullable<ImagePlaceholderProps['aspect']>, string> = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
};

/**
 * Substitua este componente por um <img> real assim que houver fotografia
 * profissional disponível — ver README, secção "Como adicionar fotografias".
 * Mantém a proporção correta para não quebrar o layout quando as fotos
 * reais forem inseridas.
 */
export default function ImagePlaceholder({ 
  label, 
  aspect = 'landscape', 
  className = '',
  src,
  alt = 'Hotel Tianjane Fingoe',
  children,
}: ImagePlaceholderProps) {
  // Se tiver src, mostra imagem real
  if (src) {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          aspectClass[aspect],
          className
        )}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {/* Overlay para manter o estilo do placeholder quando necessário */}
        {children}
        <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl pointer-events-none" />
      </div>
    );
  }

  // Fallback para placeholder (sem imagem)
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest via-forest-dark to-clay-dark/80',
        aspectClass[aspect],
        className
      )}
    >
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-cream/70">
        <ImageIcon size={28} strokeWidth={1.25} />
        {label && <p className="text-xs tracking-widest2 uppercase leading-relaxed">{label}</p>}
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl pointer-events-none" />
    </div>
  );
}