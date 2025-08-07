import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t("heroTitle")}{" "}
              <span className="text-expatberlin-primary">
                {t("heroLocation")}
              </span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t("heroDescription")}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-expatberlin-primary hover:bg-expatberlin-primary-dark text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                {t("getStarted")}
              </button>

              {/* Airplane Icon */}
              <div className="text-expatberlin-secondary">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="rotate-45"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Content - Video Thumbnail */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&h=400&fit=crop"
                alt="Berlin cityscape and expat life"
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-lg transition-all">
                  <svg
                    className="w-8 h-8 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* "Watch on Youtube" Label */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 rounded-full px-4 py-2 flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-sm font-medium">Watch on Youtube</span>
                </div>
              </div>

              {/* Logo Overlay */}
              <div className="absolute top-4 right-4">
                <div className="bg-expatberlin-primary px-2 py-1 rounded text-white text-xs font-bold">
                  expatBerlin
                </div>
                <div className="text-xs text-white bg-black/50 px-1 rounded-b">
                  RELOCATION & SERVICES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
