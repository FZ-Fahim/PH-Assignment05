import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: number) => void;
}

const StackItems = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3">
      <img
        src={technology.icon}
        alt={technology.name}
        className="h-9 w-9 object-contain"
      />

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-gray-900">
          {technology.name}
        </h4>

        <p className="text-xs text-gray-500">
          {technology.category}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        aria-label={`Remove ${technology.name}`}
      >
        ×
      </button>
    </div>
  );
};

export default StackItems;