import { use, useState } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadySelected) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack`);
  };

  const handleRemove = (technologyId: string) => {
    const removedTechnology = selectedTechnologies.find(
      (technology) => technology.id === technologyId,
    );

    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== technologyId,
    );

    setSelectedTechnologies(remainingTechnologies);

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack");
  };

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

        {/* Technologies and Your Stack */}
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology: ITechnology) => {
              const isSelected = selectedTechnologies.some(
                (item) => item.id === technology.id,
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={isSelected}
                  onAddToStack={handleAddToStack}
                />
              );
            })}
          </div>

          {/* Your Stack */}
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;