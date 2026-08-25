import { content } from "@/lib/content";

export function ProposalBanner() {
  return (
    <p className="bg-ink px-4 py-2 text-center text-xs text-paper sm:text-sm">
      {content.proposalBanner}
    </p>
  );
}
