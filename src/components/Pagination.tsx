export default function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-14">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-4 py-2 text-xs uppercase tracking-widest font-semibold border border-luxe-ink/20 text-luxe-ink hover:border-luxe-ink disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-10 h-10 text-sm font-semibold border ${
            p === page
              ? "bg-luxe-ink text-white border-luxe-ink"
              : "border-luxe-ink/20 text-luxe-ink hover:border-luxe-ink"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-4 py-2 text-xs uppercase tracking-widest font-semibold border border-luxe-ink/20 text-luxe-ink hover:border-luxe-ink disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
