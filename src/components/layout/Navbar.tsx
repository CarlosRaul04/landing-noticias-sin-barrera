import { useEffect, useState } from 'react';
import { DEMO_URL } from '../../config';
import { NAV_LINKS } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { Logo } from './Logo';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-paper/85 shadow-[0_1px_0_rgb(20_33_61/0.08)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-4 py-2 text-[15px] text-ink-soft transition hover:bg-mist hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button href={DEMO_URL} external arrow>Probar el demo</Button>
        </div>
        <button
          type="button"
          className="grid size-12 place-items-center rounded-full text-ink hover:bg-mist md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </Container>
      {open && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-mist-deep/60 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-lg hover:bg-mist">{l.label}</a>
            ))}
            <Button href={DEMO_URL} external arrow className="mt-2">Probar el demo</Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
