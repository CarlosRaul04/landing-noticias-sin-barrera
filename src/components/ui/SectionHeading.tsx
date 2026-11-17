interface Props { id: string; eyebrow: string; title: string; text?: string; center?: boolean; }

export function SectionHeading({ id, eyebrow, title, text, center }: Props) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cobalt">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-ink-soft text-pretty">{text}</p>}
    </div>
  );
}
