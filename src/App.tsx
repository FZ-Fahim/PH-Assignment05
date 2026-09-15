import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechGrid";
import StackSidebar from "./components/StackSidebar";
import type { Technology } from "./types/technology";
import Footer from "./components/Footer";

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
      

      <section
  id="technologies"
  className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Explore Technologies
      </h2>

      <p className="mt-3 max-w-2xl text-gray-500">
        Choose the technologies you need and build your personalized
        development stack.
      </p>
    </div>

    {loading ? (
      <p className="py-10 text-center text-gray-500">
        Loading technologies...
      </p>
    ) : (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Technology Grid */}
        <div className="lg:col-span-3">
          <TechnologyGrid
            technologies={technologies}
            stack={stack}
            onAdd={addToStack}
          />
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
          <StackSidebar
              stack={stack}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />
          </div>
        </div>
      </div>
    )}
  </div>
</section>

<Footer />
    
    </>
  );
}

export default App;