import { DEMO_URL } from '../../config';
import { HERO } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { PhoneFrame } from '../ui/PhoneFrame';

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* fondo suave: un halo azul y una trama de líneas muy tenue */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-mist blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(20_33_61/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(20_33_61/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      <Container className="relative grid items-center gap-14 pb-20 pt-10 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-16">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-cobalt-ink ring-1 ring-mist-deep">
            <span className="size-2 rounded-full bg-sun" aria-hidden="true" /> {HERO.eyebrow}
          </p>
          <h1 id="hero-title" className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {HERO.title[0]}{' '}
            <span className="relative whitespace-nowrap text-cobalt">
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-0 h-[0.32em] rounded-full bg-highlight/80" />
              <span className="relative">{HERO.title[1]}</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">{HERO.lead}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={DEMO_URL} external arrow>{HERO.primary}</Button>
            <Button href="#herramientas" variant="ghost">{HERO.secondary}</Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-mist-deep/70 pt-6">
            {HERO.facts.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight">{f.value}</dd>
                <dd className="mt-1 text-sm leading-snug text-ink-soft">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem] animate-rise [animation-delay:150ms]">
          <PhoneFrame src="/img/pantalla-resumen.webp" alt="El plugin en un celular: el resumen de una noticia en cuatro ideas" eager />
          <img src="/img/notin.webp" alt="" width={140} height={140} className="absolute -left-8 bottom-10 w-24 animate-float drop-shadow-xl sm:-left-24 sm:bottom-16 sm:w-36" />
          <div className="absolute -right-6 top-14 hidden rounded-2xl bg-white px-4 py-3 text-sm shadow-card ring-1 ring-mist-deep sm:block">
            <p className="font-semibold">4 ideas clave</p>
            <p className="text-ink-soft">con su fuente</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
