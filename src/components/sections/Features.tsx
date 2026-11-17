import { useRef, useState, type KeyboardEvent } from 'react';
import { FEATURES } from '../../data/content';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { PhoneFrame } from '../ui/PhoneFrame';
import { SectionHeading } from '../ui/SectionHeading';

/** Pestañas accesibles (flechas, Inicio, Fin): una herramienta a la vez, con su captura. */
export function Features() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const f = FEATURES[active];

  const onKey = (e: KeyboardEvent) => {
    const last = FEATURES.length - 1;
    const next = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const i = (next + FEATURES.length) % FEATURES.length;
    setActive(i);
    tabs.current[i]?.focus();
  };

  return (
    <section id="herramientas" aria-labelledby="herr-t" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading id="herr-t" eyebrow="Herramientas" title="Cuatro herramientas, un solo botón" text="Aparecen en una barra discreta sobre la noticia. Usa una, varias o ninguna." center />

        <div role="tablist" aria-label="Herramientas del plugin" onKeyDown={onKey} className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-2 rounded-3xl bg-mist p-2 sm:grid-cols-4">
          {FEATURES.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => { tabs.current[i] = el; }}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${t.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex min-h-14 items-center justify-center gap-2 rounded-2xl px-3 text-[15px] font-medium transition ${i === active ? 'bg-white text-ink shadow-card' : 'text-ink-soft hover:text-ink'}`}
            >
              <Icon name={t.icon} className={`size-5 ${i === active ? 'text-cobalt' : ''}`} />
              {t.name}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`panel-${f.id}`} aria-labelledby={`tab-${f.id}`} className="mt-14 grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div key={f.id} className="order-2 animate-rise md:order-1">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{f.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{f.text}</p>
            <ul className="mt-8 space-y-4">
              {f.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-lg">
                  <span className="grid size-8 flex-none place-items-center rounded-full bg-highlight/70 text-ink"><Icon name="check" className="size-4" /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 mx-auto w-full max-w-[17rem] md:order-2">
            <div aria-hidden="true" className="absolute inset-[-12%] rounded-full bg-mist" />
            <PhoneFrame key={f.image} src={f.image} alt={f.alt} className="relative animate-rise" />
          </div>
        </div>
      </Container>
    </section>
  );
}
