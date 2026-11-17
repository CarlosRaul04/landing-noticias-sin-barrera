import { DEMO_URL } from '../../config';
import { CTA } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function CallToAction() {
  return (
    <section aria-labelledby="cta-t" className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-mist px-6 py-16 text-center sm:px-12">
          <div aria-hidden="true" className="absolute -bottom-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-highlight/60 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-t" className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{CTA.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{CTA.text}</p>
            <Button href={DEMO_URL} external arrow className="mt-9 px-8">{CTA.button}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
