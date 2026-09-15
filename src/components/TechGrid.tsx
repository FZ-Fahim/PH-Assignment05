import type { Technology } from "../types/technology";
import TechnologyCard from "./TechCard";

interface TechnologyGridProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

const TechGrid = ({
  technologies,
  stack,
  onAdd,
}: TechnologyGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => {
        const isAdded = stack.some((item) => item.id === technology.id);

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={isAdded}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
};

export default TechGrid;