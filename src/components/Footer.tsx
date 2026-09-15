import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-10 w-auto"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Socials */}
            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="font-bold text-sm  text-gray-500 hover:text-gray-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="font-bold text-sm text-gray-500 hover:text-gray-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="font-bold text-sm text-gray-500 hover:text-gray-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#technologies" className="block text-sm text-gray-500 hover:text-gray-900">
                Technologies
              </a>
              <a href="#projects" className="block text-sm text-gray-500 hover:text-gray-900">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#about" className="block text-sm text-gray-500 hover:text-gray-900">
                About
              </a>
              <a href="#contact" className="block text-sm text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-900">
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;