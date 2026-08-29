import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";

function DishCard({ name, image }: { name: string; image: string }) {
  return (
    <a href={content.oddmenuUrl} className="group block">
      <figure>
        <div className="relative aspect-[4/5] overflow-hidden rounded bg-ink/5 shadow-sm transition-[box-shadow] duration-300 group-hover:shadow-[0_22px_45px_-18px_rgba(22,22,22,0.45)]">
          <Image
            src={image}
            alt={name}
            fill
            quality={90}
            className="dish-zoom object-cover transition-transform duration-300 group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 50vw, 50vw"
          />
        </div>
        <figcaption className="mt-2 text-sm font-medium transition-colors duration-300 group-hover:text-lubnan">
          {name}
        </figcaption>
      </figure>
    </a>
  );
}

export function MenuTeaser() {
  return (
    <section id="carta" className="bg-ink/[0.02]"><div className="mx-auto max-w-5xl px-4 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight">Carta</h2>
        <p className="mt-3 max-w-xl text-ink/70">
          Hummus, kibbeh, cordero, falafel — los sabores del Mediterráneo
          preparados con recetas de herencia familiar.
        </p>
      </Reveal>
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
        {content.dishes.map((dish, i) => (
          <Reveal key={dish.name} className={`delay-${i}`}>
            <li>
              <DishCard name={dish.name} image={dish.image} />
            </li>
          </Reveal>
        ))}
      </ul>
      <a href={content.oddmenuUrl} className="btn-primary mt-10">
        Ver la carta completa
      </a>
    </div></section>
  );
}
