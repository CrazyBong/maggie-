import { cn } from "@/lib/utils";

export function PromptChip({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("neo-card bg-bg-white px-3 py-2 text-xs font-mono absolute z-10", className)}>
      {text}
    </div>
  );
}
