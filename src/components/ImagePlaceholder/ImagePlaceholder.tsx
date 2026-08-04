import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { cn } from '../../utils/cn';

interface ImagePlaceholderProps {
  label?: string;
  aspect?: 'square' | 'portrait' | 'landscape' | 'wide';
  className?: string;
  src?: string;        // Imagem real
  alt?: string;        // Texto alternativo
  children?: React.ReactNode; // Overlay como no Hero
}

const aspectClass: Record<NonNullable<ImagePlaceholderProps['aspect']>, string> = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
};

/**
 * Componente que exibe uma imagem real (se src for fornecida) ou um placeholder
 * elegante (se não houver imagem). Utiliza next/image para otimização automática.
 */
export default function ImagePlaceholder({
  label,
  aspect = 'landscape',
  className = '',
  src,
  alt = 'Hotel Tianjane Fingoe',
  children,
}: ImagePlaceholderProps) {
  // Se tiver src, mostra imagem real com next/image
  if (src) {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          aspectClass[aspect],
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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