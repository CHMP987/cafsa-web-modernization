import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";

export function Visit() {
  return (
    <section id="visitanos" className="bg-stone text-paper">
      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-20 sm:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight">Visítanos</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-paper/90">{content.address}</p>
          <p className="mt-4 flex flex-col gap-2">
            <a href={content.mapsUrl} className="text-paper underline-offset-4 hover:underline">
              Abrir en Google Maps
            </a>
            <a
              href={content.tripadvisorUrl}
              className="text-paper/80 underline-offset-4 hover:underline"
            >
              Opiniones en TripAdvisor
            </a>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={content.phoneHref} className="btn-outline border-paper text-paper">
              Llamar {content.phoneDisplay}
            </a>
            <a href={content.whatsappHref} className="btn-outline border-paper text-paper">
              WhatsApp {content.whatsappDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal>
          <h3 className="text-sm font-semibold tracking-widest text-paper/60 uppercase">
            Horario
          </h3>
          <dl className="mt-4 divide-y divide-paper/15 border-y border-paper/15">
            {content.hours.map((row) => (
              <div key={row.day} className="flex justify-between gap-4 py-2.5 text-sm">
                <dt className="font-medium">{row.day}</dt>
                <dd className={row.time === "Cerrado" ? "text-red-400" : "text-paper/80"}>
                  {row.time}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
      <div className="mx-auto max-w-5xl px-4 pb-20">
        <a href={content.whatsappHref} className="btn-primary w-full sm:w-auto">
          Reservar mesa
        </a>
      </div>
    </section>
  );
}
