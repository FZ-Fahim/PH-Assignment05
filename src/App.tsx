import { useEffect, useState } from "react";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechGrid";
import StackSidebar from "./components/StackSidebar";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technology.json")
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (technology: Technology) => {
    setStack((currentStack) => {
      if (currentStack.some((item) => item.id === technology.id)) {
        return currentStack;
      }

      return [...currentStack, technology];
    });
  };

  const removeFromStack = (id: number) => {
    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <section id="technologies" className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Explore Technologies
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">
              Loading technologies...
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {/* Technology Cards */}
              <div className="lg:col-span-3">
                <TechnologyGrid
                  technologies={technologies}
                  stack={stack}
                  onAdd={addToStack}
                />
              </div>

              {/* Your Stack */}
              <div className="lg:col-span-1">
                <StackSidebar
                  stack={stack}
                  onRemove={removeFromStack}
                  onRemoveAll={removeAll}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;