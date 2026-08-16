"use client";

import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'outline-light' | 'ghost';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-gold hover:bg-gold-light text-forest-dark shadow-gold-soft hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300',
  outline: 'border-2 border-cream/50 text-cream hover:border-gold/70 hover:bg-cream/10 hover:-translate-y-0.5 transition-all duration-300',
  'outline-light': 'border-2 border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/40 hover:-translate-y-0.5 transition-all duration-300',
  ghost: 'text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 transition-all duration-300',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  target,
  rel,
  icon,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out',
    variantClasses[variant],
    className
  );

  const shine =
    variant === 'primary' ? (
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shimmer" />
      </span>
    ) : null;

  const content = (
    <>
      {shine}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
