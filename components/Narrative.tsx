import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";

export function Narrative() {
  const { image, imageAlt, phrases } = content.narrative;

  return (
    <section id="experiencia" className="bg-paper">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 sm:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 sm:aspect-[4/3]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <Reveal>
          <ul className="space-y-4">
            {phrases.map((phrase) => (
              <li
                key={phrase}
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {phrase}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
