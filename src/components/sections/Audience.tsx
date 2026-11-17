import { AUDIENCES } from '../../data/content';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

export function Audience() {
  return (
    <section id="para-quien" aria-labelledby="audiencia-t" className="py-20 md:py-28">
      <Container>
        <SectionHeading id="audiencia-t" eyebrow="Para quién" title="Cada mente lee distinto" text="Los diarios digitales están llenos de ruido. Escuchamos a lectores neurodivergentes y diseñamos una respuesta para cada barrera." />
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <li key={a.title} className="group rounded-3xl bg-white p-7 shadow-card ring-1 ring-mist-deep/60 transition hover:-translate-y-1">
              <span className="grid size-12 place-items-center rounded-2xl bg-mist text-cobalt transition group-hover:bg-cobalt group-hover:text-white">
                <Icon name={a.icon} />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{a.need}</p>
              <p className="mt-5 flex gap-2 border-t border-mist pt-5 font-medium leading-relaxed">
                <Icon name="check" className="mt-0.5 size-5 flex-none text-cobalt" />
                {a.answer}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
