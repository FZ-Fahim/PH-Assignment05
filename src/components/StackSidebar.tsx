import type { Technology } from "../types/technology";
import StackItem from "./StackItems";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length} {stack.length === 1 ? "technology" : "technologies"} selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 transition hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Stack Items */}
      <div className="mt-6 space-y-3">
        {stack.length === 0 ? (
          <div className="rounded-xl bg-gray-50 px-4 py-10 text-center">
            <p className="text-sm font-medium text-gray-600">
              Your stack is empty
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Add technologies to build your stack.
            </p>
          </div>
        ) : (
          stack.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))
        )}
      </div>
    </aside>
  );
};

export default StackSidebar;