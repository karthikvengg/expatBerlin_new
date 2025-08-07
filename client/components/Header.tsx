import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F439caad0b8bf4cb493673255e1deb89a%2F155109982c6d422aba193d15b5481e2d?format=webp&width=800"
              alt="expatBerlin Logo"
              className="h-16 w-auto"
            />
            <span className="ml-1 text-white font-bold text-xl pb-1">
              patBerlin
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-1 py-4 text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-expatberlin-primary border-b-2 border-expatberlin-primary"
                  : "text-white hover:text-expatberlin-primary"
              }`}
            >
              {t("home")}
            </Link>
            <Link
              to="/housing"
              className={`px-1 py-4 text-sm font-medium transition-colors ${
                isActive("/housing")
                  ? "text-expatberlin-primary border-b-2 border-expatberlin-primary"
                  : "text-white hover:text-expatberlin-primary"
              }`}
            >
              {t("housing")}
            </Link>
            <Link
              to="/work-permits"
              className={`px-1 py-4 text-sm font-medium transition-colors ${
                isActive("/work-permits")
                  ? "text-expatberlin-primary border-b-2 border-expatberlin-primary"
                  : "text-white hover:text-expatberlin-primary"
              }`}
            >
              {t("workPermits")}
            </Link>
            <Link
              to="/language-courses"
              className={`px-1 py-4 text-sm font-medium transition-colors ${
                isActive("/language-courses")
                  ? "text-expatberlin-primary border-b-2 border-expatberlin-primary"
                  : "text-white hover:text-expatberlin-primary"
              }`}
            >
              {t("languageCourses")}
            </Link>
            <Link
              to="/about"
              className={`px-1 py-4 text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-expatberlin-primary border-b-2 border-expatberlin-primary"
                  : "text-white hover:text-expatberlin-primary"
              }`}
            >
              {t("aboutUs")}
            </Link>
            <Link
              to="/success"
              className={`px-1 py-4 text-sm font-medium transition-colors ${
                isActive("/success")
                  ? "text-expatberlin-primary border-b-2 border-expatberlin-primary"
                  : "text-white hover:text-expatberlin-primary"
              }`}
            >
              {t("success")}
            </Link>
          </nav>

          {/* Language Switcher and Mobile menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

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
      </div>
    </header>
  );
}
