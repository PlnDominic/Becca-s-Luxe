import { StarIcon } from "./icons";

export default function Rating({ score, reviews }: { score: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-sm text-luxe-ink/70">
      <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-luxe-rose shrink-0" />
      <span className="font-semibold text-luxe-ink">{score.toFixed(1)}</span>
      <span className="truncate">({reviews.toLocaleString()} Reviews)</span>
    </div>
  );
}
