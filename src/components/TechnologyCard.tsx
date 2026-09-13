import type { ITechnology } from '../types/technology'

interface TechnologyCardProps {
    technology: ITechnology
    isSelected: boolean
    onAddToStack: (technology: ITechnology) => void
}

const TechnologyCard = ({
    technology,
    isSelected,
    onAddToStack,
}: TechnologyCardProps) => {
    return (
        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            {/* Card Top */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 p-3">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-full w-full object-contain"
                    />
                </div>

                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                    {technology.badge}
                </span>
            </div>

            {/* Card Content */}
            <div className="mt-5 flex-1">
                <h3 className="text-xl font-bold text-slate-900">
                    {technology.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                    {technology.description}
                </p>
            </div>

            {/* Card Meta */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                    {technology.category}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {technology.difficulty}
                </span>
            </div>

            {/* Rating and Button */}
            <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-700">
                    <span className="mr-1 text-yellow-500">★</span>
                    {technology.rating}
                </p>

                <button
                    type="button"
                    disabled={isSelected}
                    onClick={() => onAddToStack(technology)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        isSelected
                            ? 'cursor-not-allowed bg-green-100 text-green-700'
                            : 'bg-slate-900 text-white hover:bg-indigo-600'
                    }`}
                >
                    {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
                </button>
            </div>
        </div>
    )
}

export default TechnologyCard