import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-eurocas-orange px-3 py-1 rounded">
              <span className="text-white font-bold text-lg">EUROCAS</span>
            </div>
            <span className="ml-2 text-sm text-gray-600 font-medium">
              CAREER & SCHOOLING
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-eurocas-orange border-b-2 border-eurocas-orange px-1 py-4 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/nursing"
              className="text-gray-700 hover:text-eurocas-orange px-1 py-4 text-sm font-medium transition-colors"
            >
              Nursing
            </Link>
            <Link
              to="/physiotherapist"
              className="text-gray-700 hover:text-eurocas-orange px-1 py-4 text-sm font-medium transition-colors"
            >
              Physiotherapist
            </Link>
            <Link
              to="/language-training"
              className="text-gray-700 hover:text-eurocas-orange px-1 py-4 text-sm font-medium transition-colors"
            >
              Language Training
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-eurocas-orange px-1 py-4 text-sm font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/success"
              className="text-gray-700 hover:text-eurocas-orange px-1 py-4 text-sm font-medium transition-colors"
            >
              Success
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-eurocas-orange">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
