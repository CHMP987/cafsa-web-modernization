import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";

function DishCard({ name, image }: { name: string; image: string }) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
        <Image
          src={image}
          alt={name}
          fill
          quality={90}
          className="dish-zoom object-cover transition-transform duration-200 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, 50vw"
        />
      </div>
      <figcaption className="mt-2 text-sm font-medium">{name}</figcaption>
    </figure>
  );
}

export function MenuTeaser() {
  return (
    <section id="carta" className="mx-auto max-w-5xl px-4 py-20">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight">Carta</h2>
        <p className="mt-3 max-w-xl text-ink/70">
          La carta vive en su menú digital. Precios y platos se actualizan ahí.
        </p>
      </Reveal>
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
        {content.dishes.map((dish) => (
          <li key={dish.name}>
            <DishCard name={dish.name} image={dish.image} />
          </li>
        ))}
      </ul>
      <a href={content.oddmenuUrl} className="btn-primary mt-10">
        Ver la carta completa
      </a>
    </section>
  );
}
