import Image from "next/image";
import { content } from "@/lib/content";

export function MenuTeaser() {
  return (
    <section id="carta" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Carta</h2>
      <p className="mt-2 max-w-xl text-ink/70">
        La carta vive en su menú digital. Precios y platos se actualizan ahí.
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {content.dishes.map((dish) => (
          <li key={dish.name}>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <figcaption className="mt-2 text-sm font-medium">{dish.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <a
        href={content.oddmenuUrl}
        className="mt-8 inline-block bg-lubnan px-5 py-3 text-sm font-medium text-paper"
      >
        Ver la carta completa
      </a>
    </section>
  );
}
