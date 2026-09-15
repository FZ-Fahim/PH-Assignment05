import bannerImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Hero Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal{" "}
            <span
              style={{
                background: "var(--brand-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
            Explore frontend,backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          {/* Hero Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:opacity-90"
              style={{ background: "var(--brand-gradient)" }}
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImage}
            alt="Development technologies"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;