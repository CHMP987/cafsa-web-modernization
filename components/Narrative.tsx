import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";

export function Narrative() {
  const { image, imageAlt, phrases } = content.narrative;

  return (
    <section id="experiencia" className="bg-paper">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 sm:grid-cols-2">
        <div className="order-2 sm:order-1 relative aspect-[3/2] overflow-hidden rounded bg-ink/5 sm:aspect-[4/3]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <Reveal className="order-1 sm:order-2">
          <ul className="space-y-4">
            {phrases.map((phrase) => (
              <li
                key={phrase}
                className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {phrase}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <div className="section-divider mx-auto max-w-md" />
    </section>
  );
}
