/** Marco de celular para mostrar capturas del plugin. */
export function PhoneFrame({ src, alt, className = '', eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`rounded-[2.6rem] bg-ink p-2.5 shadow-soft ${className}`}>
      <div className="overflow-hidden rounded-[2.1rem] bg-white">
        <img src={src} alt={alt} width={390} height={844} loading={eager ? 'eager' : 'lazy'} decoding="async" className="block h-auto w-full" />
      </div>
    </div>
  );
}
