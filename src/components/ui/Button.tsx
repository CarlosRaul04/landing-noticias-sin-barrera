import type { ReactNode } from 'react';
import { Icon } from './Icon';

type Variant = 'primary' | 'ghost' | 'light';

const STYLES: Record<Variant, string> = {
  primary: 'bg-cobalt text-white shadow-[0_10px_24px_-10px_rgb(31_91_216/0.8)] hover:bg-cobalt-ink',
  ghost: 'bg-white text-ink ring-1 ring-mist-deep hover:ring-cobalt hover:text-cobalt-ink',
  light: 'bg-white text-ink hover:bg-mist',
};

interface Props { href: string; children: ReactNode; variant?: Variant; external?: boolean; arrow?: boolean; className?: string; }

/** Enlace con forma de botón (todas las acciones de la landing llevan a otra página o sección). */
export function Button({ href, children, variant = 'primary', external, arrow, className = '' }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition duration-200 ${STYLES[variant]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5" />}
      {external && <span className="sr-only"> (se abre en otra pestaña)</span>}
    </a>
  );
}
