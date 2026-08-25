import { content } from "@/lib/content";

export function WhatsAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-lubnan md:hidden">
      <a
        href={content.whatsappHref}
        className="block px-4 py-3 text-center text-sm font-medium text-paper"
      >
        Reservar por WhatsApp
      </a>
    </div>
  );
}
