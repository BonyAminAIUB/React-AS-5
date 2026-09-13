import type { ITechnology } from "../types/technology";
import emptyStackImage from "../assets/YourStack-without.png";

interface YourStackProps {
  selectedTechnologies: ITechnology[];
  onRemove: (technologyId: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-md lg:sticky lg:top-24">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-base-content/60">
            {selectedTechnologies.length}{" "}
            {selectedTechnologies.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="btn btn-error btn-sm btn-outline"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-6 text-center">
          <img
            src={emptyStackImage}
            alt="Your stack is empty"
            className="mx-auto w-full max-w-[180px]"
          />

          <p className="mt-4 text-sm text-base-content/60">
            No technologies added yet.
          </p>

          <p className="mt-1 text-xs text-base-content/40">
            Start building your stack by adding technologies.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-3">
          {selectedTechnologies.map((technology: ITechnology) => {
            return (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-base-300 p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-base-200 p-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-base-content/60">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="btn btn-error btn-xs"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default YourStack;