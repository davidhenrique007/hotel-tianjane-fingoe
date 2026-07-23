interface IconProps {
  size?: number;
  className?: string;
}

export function FacebookIcon({ size = 17, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 8.5h2V5.6c-.35-.05-1.54-.15-2.94-.15-2.9 0-4.89 1.77-4.89 5.02V13H6.5v3.25h3.67V23h3.38v-6.75h3.15L17.19 13h-3.64v-2.2c0-.94.26-1.58 1.61-1.58Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 17, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}
