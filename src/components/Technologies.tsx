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
      className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore the
            <span className="brand-gradient-text"> Technologies</span>
          </h2>

          <p className="mt-3 text-base text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technologies and Your Stack */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
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