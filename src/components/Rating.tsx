import { StarIcon } from "./icons";

export default function Rating({ score, reviews }: { score: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5 text-sm text-luxe-ink/70">
      <StarIcon className="w-4 h-4 text-luxe-rose" />
      <span className="font-semibold text-luxe-ink">{score.toFixed(1)}</span>
      <span>({reviews.toLocaleString()} Reviews)</span>
    </div>
  );
}
