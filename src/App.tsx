import { useEffect, useState } from "react";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("/technology.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Error loading technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <div>
        {loading ? (
          <p>Loading technologies...</p>
        ) : (
          <p>{technologies.length} technologies loaded.</p>
        )}
      </div>
    </div>
  );
}

export default App;