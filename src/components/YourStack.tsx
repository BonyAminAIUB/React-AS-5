import type { ITechnology } from '../types/technology'
import emptyStackImage from '../assets/YourStack-without.png'

interface YourStackProps {
    selectedTechnologies: ITechnology[]
    onRemove: (technologyId: string) => void
    onRemoveAll: () => void
}

const YourStack = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: YourStackProps) => {
    return (
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:h-fit">

            {/* Panel Header */}
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        Your Stack
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        {selectedTechnologies.length}{' '}
{selectedTechnologies.length === 1
    ? 'Technology'
    : 'Technologies'}{' '}
Selected
                    </p>
                </div>

                {selectedTechnologies.length > 0 && (
                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="text-xs font-semibold text-red-500 transition hover:text-red-700"
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

                    <p className="mt-4 text-sm text-slate-500">
                        No technologies added yet.
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        Start building your stack by adding technologies.
                    </p>
                </div>
            ) : (
                <div className="mt-6 space-y-3">
                    {selectedTechnologies.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 p-2">
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-sm font-semibold text-slate-900">
                                    {technology.name}
                                </h3>

                                <p className="text-xs text-slate-500">
                                    {technology.category}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => onRemove(technology.id)}
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-500 transition hover:bg-red-100"
                                aria-label={`Remove ${technology.name}`}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </aside>
    )
}

export default YourStack