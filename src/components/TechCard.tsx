import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Details */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-base text-yellow-400">★</span>

        <span className="text-sm font-semibold text-gray-800">
          {technology.rating}
        </span>

        <span className="text-sm text-gray-400">
          / 5.0
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;