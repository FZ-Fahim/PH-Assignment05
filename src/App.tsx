import { useEffect, useState } from "react";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
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

  return (
    <>
      <Navbar />
      <Hero />

      <section id="technologies" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Explore Technologies
          </h2>

          {loading ? (
            <p className="text-center">Loading technologies...</p>
          ) : (
            <TechGrid
              technologies={technologies}
              stack={stack}
              onAdd={addToStack}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default App;