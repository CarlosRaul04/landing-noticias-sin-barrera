import { DEMO_URL, REPO_URL } from '../../config';
import { FOOTER, NAV_LINKS } from '../../data/content';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm leading-relaxed text-white/65">{FOOTER.note}</p>
        </div>
        <nav aria-label="Pie de página">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Explora</h2>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => <li key={l.href}><a className="hover:text-white" href={l.href}>{l.label}</a></li>)}
            <li><a className="hover:text-white" href={DEMO_URL} target="_blank" rel="noopener">Demo del plugin</a></li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-white" href={REPO_URL} target="_blank" rel="noopener">
                <Icon name="github" className="size-4" /> Código en GitHub
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Equipo</h2>
          <ul className="mt-4 space-y-2">{FOOTER.team.map((n) => <li key={n}>{n}</li>)}</ul>
          <p className="mt-4 text-sm text-white/55">{FOOTER.course}</p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-sm text-white/50">© {new Date().getFullYear()} Noticias sin barreras · Proyecto académico</Container>
      </div>
    </footer>
  );
}
