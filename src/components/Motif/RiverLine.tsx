import { cn } from "../../utils/cn";

interface RiverLineProps {
  className?: string;
  color?: string;
}

export function RiverLine({ className = '', color = '#C9A66B' }: RiverLineProps) {
  return (
    <svg
      className={cn('w-full h-auto', className)}
      viewBox="0 0 1200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 60 C 200 20, 300 100, 500 60 S 700 100, 900 60 S 1100 20, 1200 60"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M0 80 C 200 40, 300 120, 500 80 S 700 120, 900 80 S 1100 40, 1200 80"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

export function RiverLineMark({ className = '', color = '#C9A66B' }: RiverLineProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 12 C 12 4, 18 20, 28 12 S 38 4, 38 12"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 16 C 12 8, 18 24, 28 16 S 38 8, 38 16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

/**
 * PONTOS DE LUZ — extensão do motivo do rio.
 */
const FIREFLY_POINTS = [
  { x: 8, y: 22, size: 3, delay: 0 },
  { x: 21, y: 68, size: 2, delay: 1.2 },
  { x: 34, y: 14, size: 2.5, delay: 2.4 },
  { x: 47, y: 80, size: 3, delay: 0.6 },
  { x: 57, y: 32, size: 2, delay: 3.1 },
  { x: 67, y: 58, size: 2.5, delay: 1.8 },
  { x: 77, y: 18, size: 3, delay: 2.9 },
  { x: 87, y: 70, size: 2, delay: 0.3 },
  { x: 92, y: 42, size: 2.5, delay: 3.6 },
  { x: 14, y: 48, size: 2, delay: 1.5 },
];

interface FireflyFieldProps {
  className?: string;
  color?: string;
}

export function FireflyField({ className = '', color = '#E4C765' }: FireflyFieldProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {FIREFLY_POINTS.map((point, index) => (
        <span
          key={index}
          className="animate-twinkle absolute rounded-full"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: point.size,
            height: point.size,
            backgroundColor: color,
            boxShadow: `0 0 6px 1px ${color}`,
            animationDelay: `${point.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
