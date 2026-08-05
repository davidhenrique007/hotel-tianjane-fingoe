// src/components/Button/Button.tsx
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'outline-light' | 'ghost';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const variantClasses = {
  primary: 'bg-gold hover:bg-gold-light text-forest-dark shadow-gold-soft hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300',
  outline: 'border-2 border-cream/50 text-cream hover:border-gold/70 hover:bg-cream/10 hover:-translate-y-0.5 transition-all duration-300',
  'outline-light': 'border-2 border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/40 hover:-translate-y-0.5 transition-all duration-300',
  ghost: 'text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 transition-all duration-300',
};

export default function Button({
  variant = 'primary',
  href,
  target,
  rel,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out',
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {children}
        {icon && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}