import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[calc(100dvh-6.5rem)] text-paper">
      <Image
        src={content.heroImage}
        alt="Interior de Restaurante Lubnan en Paseo Colón"
        fill
        priority
        quality={90}
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-ink/50 via-ink/10 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[calc(100dvh-6.5rem)] max-w-5xl flex-col justify-end px-4 pb-16 pt-28">
        <Image
          src={content.logoImage}
          alt="Logo I love Lubnan"
          width={160}
          height={160}
          quality={90}
          className="mb-5 h-24 w-24 object-contain sm:h-28 sm:w-28"
        />
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          {content.shortName}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/95 sm:text-lg">
          {content.tagline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={content.whatsappHref} className="btn-primary w-full sm:w-auto">
            Reservar mesa
          </a>
          <a href={content.oddmenuUrl} className="btn-outline w-full border-paper text-paper sm:w-auto">
            Ver la carta
          </a>
        </div>
      </div>
    </section>
  );
}
