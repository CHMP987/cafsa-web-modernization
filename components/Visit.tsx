import { content } from "@/lib/content";

export function Visit() {
  return (
    <section id="visitanos" className="border-t border-ink/10 bg-white/40">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Visítanos</h2>
          <p className="mt-4 max-w-sm leading-relaxed">{content.address}</p>
          <p className="mt-4">
            <a href={content.mapsUrl} className="text-lubnan underline-offset-2 hover:underline">
              Abrir en Google Maps
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={content.phoneHref} className="border border-ink px-4 py-2 text-sm">
              Llamar {content.phoneDisplay}
            </a>
            <a href={content.whatsappHref} className="bg-lubnan px-4 py-2 text-sm text-paper">
              WhatsApp {content.whatsappDisplay}
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/60">
            Horario
          </h3>
          <dl className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {content.hours.map((row) => (
              <div key={row.day} className="flex justify-between gap-4 py-2 text-sm">
                <dt className="font-medium">{row.day}</dt>
                <dd className={row.time === "Cerrado" ? "text-lubnan" : "text-ink/80"}>
                  {row.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
