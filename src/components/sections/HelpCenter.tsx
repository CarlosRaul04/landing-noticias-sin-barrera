import { HELP } from '../../data/content';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';

export function HelpCenter() {
  return (
    <section id="ayuda" aria-labelledby="ayuda-t" className="py-6 md:py-10">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-white sm:px-12 md:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-24 size-96 rounded-full bg-cobalt/40 blur-3xl" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-4">
                <img src="/img/notin-feliz.webp" alt="Notín, la mascota del plugin" width={88} height={88} className="size-20 animate-float" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mist-deep">Centro de ayuda</p>
              </div>
              <h2 id="ayuda-t" className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">{HELP.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">{HELP.text}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {HELP.items.map((it) => (
                  <li key={it.label} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10">
                    <Icon name={it.icon} className="size-5 flex-none text-highlight" />
                    <span>{it.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="rounded-3xl bg-white/10 p-2 ring-1 ring-white/15">
              <img src="/img/centro-ayuda.webp" alt="Centro de ayuda en la computadora: menú lateral, Notín, temas frecuentes y buscador" width={1000} height={829} loading="lazy" className="block w-full rounded-[1.25rem]" />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
