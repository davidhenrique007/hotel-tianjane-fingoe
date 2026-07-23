/**
 * Combina classes condicionalmente, ignorando valores falsy.
 * Ex.: cn('btn', isActive && 'btn-active', className)
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
