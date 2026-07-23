interface RiverLineProps {
  className?: string;
  color?: string;
}

/**
 * ELEMENTO DE ASSINATURA VISUAL DO SITE
 * ---------------------------------------
 * Uma única linha sinuosa, inspirada no traçado do vale do Zambeze que
 * atravessa a Província de Tete — a geografia real por trás de Fingoe.
 * É usada como fio condutor discreto entre as secções (em vez de fotografias
 * de stock genéricas), no fundo do Hero e como divisor entre blocos de cor.
 * Repete-se em tamanhos e rotações diferentes, sempre numa única cor.
 */
export function RiverLineDivider({ className = '', color = '#C9A66B' }: RiverLineProps) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 40 C 180 90, 320 0, 500 45 S 820 95, 980 35 S 1280 -10, 1440 50"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RiverLineMark({ className = '', color = '#C9A66B' }: RiverLineProps) {
  return (
    <svg viewBox="0 0 200 60" className={className} aria-hidden="true">
      <path
        d="M2 30 C 40 5, 60 55, 100 30 S 160 5, 198 30"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
