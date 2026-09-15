import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack.`);
    return;
  }

  setStack([...stack, technology]);
  toast.success(`${technology.name} added to your stack.`);
};

  const removeFromStack = (id: number) => {
    const technology = stack.find((item) => item.id === id);

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <Hero />
      <ToastContainer />

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