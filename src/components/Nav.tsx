import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Brand */}
        <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-10 w-auto"
            />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-gray-900">
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            Contact
          </a>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-5"
            style={{ background: "var(--brand-gradient)" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;