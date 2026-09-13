import type { ITechnology } from "../types/technology";

interface TechnologyCardProps {
  technology: ITechnology;
  isSelected: boolean;
  onAddToStack: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onAddToStack,
}: TechnologyCardProps) => {
  return (
    <div className="group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Icon and Badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="badge badge-secondary shrink-0 whitespace-nowrap font-semibold">
          {technology.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">
        <h2 className="text-xl font-bold text-slate-900">
          {technology.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {technology.description}
        </p>
      </div>

      {/* Category, Difficulty and Rating */}
      <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 text-xs sm:text-sm">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="shrink-0 whitespace-nowrap rounded-md border border-slate-200 bg-slate-50 px-2 py-2 font-medium text-slate-500">
            {technology.category}
          </span>

          <span className="min-w-0 rounded-md bg-slate-50 px-2 py-2 font-medium text-slate-500">
            <span className="block truncate">
              {technology.difficulty}
            </span>
          </span>
        </div>

        <p className="flex shrink-0 items-center whitespace-nowrap font-semibold text-slate-700">
          <span className="mr-1 text-yellow-500">★</span>
          {technology.rating}
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-slate-100" />

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={() => onAddToStack(technology)}
        disabled={isSelected}
        className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${isSelected
            ? "cursor-not-allowed bg-slate-300 text-slate-600"
            : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;