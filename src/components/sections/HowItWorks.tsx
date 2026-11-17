import { STEPS } from '../../data/content';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-t" className="py-20 md:py-28">
      <Container>
        <SectionHeading id="como-t" eyebrow="Cómo funciona" title="Listo en tres pasos" text="Sin registrarte y sin cambiar de diario." />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-mist-deep/80 bg-paper p-7">
              <span className="text-6xl font-semibold leading-none text-mist-deep" aria-hidden="true">0{i + 1}</span>
              <h3 className="mt-5 text-xl font-semibold"><span className="sr-only">Paso {i + 1}: </span>{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
