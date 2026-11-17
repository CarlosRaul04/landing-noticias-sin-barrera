import { PRINCIPLES } from '../../data/content';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

export function Principles() {
  return (
    <section aria-labelledby="principios-t" className="py-20 md:py-28">
      <Container>
        <SectionHeading id="principios-t" eyebrow="Nuestros principios" title="Ayuda que respeta a quien lee" />
        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="flex gap-5">
              <span className="grid size-12 flex-none place-items-center rounded-2xl bg-white text-cobalt shadow-card ring-1 ring-mist-deep/60"><Icon name={p.icon} /></span>
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
