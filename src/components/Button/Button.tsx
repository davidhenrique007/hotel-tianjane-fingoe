import type { ReactNode, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'forest' | 'outline';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  forest: 'btn-forest',
  outline: 'btn-outline',
};

/**
 * Botão de ação principal do site (usado como link âncora ou link externo,
 * ex. WhatsApp). Mantém área de toque confortável para dispositivos móveis.
 */
export default function Button({ children, variant = 'primary', icon, className = '', ...rest }: ButtonProps) {
  return (
    <a className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
      {icon}
    </a>
  );
}
