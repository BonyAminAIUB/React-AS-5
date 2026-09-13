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
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Icon and Badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-base-200 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="badge badge-secondary font-semibold">
          {technology.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">
        <h2 className="text-xl font-bold">
          {technology.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-base-content/60">
          {technology.description}
        </p>
      </div>

      {/* Category and Difficulty */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="badge badge-primary badge-outline">
          {technology.category}
        </span>

        <span className="badge badge-ghost">
          {technology.difficulty}
        </span>
      </div>

      <div className="my-5 border-t border-base-300" />

      {/* Rating and Button */}
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold">
          <span className="mr-1 text-yellow-500">★</span>
          {technology.rating}
        </p>

        <button
          type="button"
          onClick={() => onAddToStack(technology)}
          disabled={isSelected}
          className={`btn rounded-xl ${
            isSelected ? "btn-success" : "btn-primary"
          }`}
        >
          {isSelected
            ? "✓ Added to Stack"
            : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;