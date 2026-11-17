export function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 rounded-xl" aria-label="Noticias sin barreras, ir al inicio">
      <span className={`grid size-10 place-items-center rounded-xl ${light ? 'bg-white/10' : 'bg-mist'}`}>
        <img src="/img/notin.webp" alt="" width={32} height={32} className="size-8" />
      </span>
      <span className={`text-[17px] font-semibold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        Noticias <span className={light ? 'text-mist-deep' : 'text-cobalt'}>sin barreras</span>
      </span>
    </a>
  );
}
