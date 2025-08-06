import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F439caad0b8bf4cb493673255e1deb89a%2F155109982c6d422aba193d15b5481e2d?format=webp&width=800"
              alt="expatBerlin Logo"
              className="h-10 w-auto"
            />
            <span className="ml-1 text-white font-bold text-xl">patBerlin</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-expatberlin-primary border-b-2 border-expatberlin-primary px-1 py-4 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/housing"
              className="text-white hover:text-expatberlin-primary px-1 py-4 text-sm font-medium transition-colors"
            >
              Housing
            </Link>
            <Link
              to="/work-permits"
              className="text-white hover:text-expatberlin-primary px-1 py-4 text-sm font-medium transition-colors"
            >
              Work Permits
            </Link>
            <Link
              to="/language-courses"
              className="text-white hover:text-expatberlin-primary px-1 py-4 text-sm font-medium transition-colors"
            >
              Language Courses
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-expatberlin-primary px-1 py-4 text-sm font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/success"
              className="text-white hover:text-expatberlin-primary px-1 py-4 text-sm font-medium transition-colors"
            >
              Success
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-expatberlin-primary p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
