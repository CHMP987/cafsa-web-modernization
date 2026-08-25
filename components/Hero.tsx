import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[72vh] text-paper">
      <Image
        src={content.heroImage}
        alt="Interior de Restaurante Lubnan en Paseo Colón"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/30" />
      <div className="relative mx-auto flex min-h-[72vh] max-w-5xl flex-col justify-end px-4 py-12">
        <Image
          src={content.logoImage}
          alt="Logo I love Lubnan"
          width={96}
          height={96}
          className="mb-4 h-20 w-20 object-cover"
        />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {content.name}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-paper/95 sm:text-lg">
          {content.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={content.whatsappHref} className="bg-lubnan px-5 py-3 text-sm font-medium text-paper">
            Reservar por WhatsApp
          </a>
          <a
            href={content.oddmenuUrl}
            className="border border-paper px-5 py-3 text-sm font-medium text-paper"
          >
            Ver la carta
          </a>
        </div>
      </div>
    </section>
  );
}
