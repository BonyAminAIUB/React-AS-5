import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'
import type { ITechnology } from '../types/technology'

const Technologies = () => {
    const [technologies, setTechnologies] = useState<ITechnology[]>([])
    const [selectedTechnologies, setSelectedTechnologies] = useState<
        ITechnology[]
    >([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadTechnologies = async () => {
            try {
                const response = await fetch('/data.json')

                if (!response.ok) {
                    throw new Error('Failed to load technology data')
                }

                const data: ITechnology[] = await response.json()

                setTechnologies(data)
            } catch  {
                toast.error('Failed to load technologies')
            } finally {
                setLoading(false)
            }
        }

        loadTechnologies()
    }, [])

    const handleAddToStack = (technology: ITechnology) => {
        const alreadySelected = selectedTechnologies.some(
            (item) => item.id === technology.id,
        )

        if (alreadySelected) {
            toast.warning(`${technology.name} is already in your stack`)
            return
        }

        setSelectedTechnologies((previousTechnologies) => [
            ...previousTechnologies,
            technology,
        ])

        toast.success(`${technology.name} added to your stack`)
    }

    const handleRemove = (technologyId: string) => {
        const removedTechnology = selectedTechnologies.find(
            (technology) => technology.id === technologyId,
        )

        setSelectedTechnologies((previousTechnologies) =>
            previousTechnologies.filter(
                (technology) => technology.id !== technologyId,
            ),
        )

        if (removedTechnology) {
            toast.info(`${removedTechnology.name} removed from your stack`)
        }
    }

    const handleRemoveAll = () => {
        setSelectedTechnologies([])
        toast.info('All technologies removed from your stack')
    }

    if (loading) {
        return (
            <section className="flex min-h-[300px] items-center justify-center bg-slate-50">
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg text-indigo-600"></span>

                    <p className="mt-4 text-sm font-medium text-slate-600">
                        Loading technologies...
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section
            id="technologies"
            className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
                        Explore The Ecosystem
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                        Choose Your Technologies
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                        Explore the most useful technologies and add your
                        favorite tools to build your own developer stack.
                    </p>
                </div>

                {/* Technologies and Stack */}
                <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

                    {/* Technology Cards */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                isSelected={selectedTechnologies.some(
                                    (item) => item.id === technology.id,
                                )}
                                onAddToStack={handleAddToStack}
                            />
                        ))}
                    </div>

                    {/* Your Stack Sidebar */}
                    <YourStack
                        selectedTechnologies={selectedTechnologies}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </section>
    )
}

export default Technologies