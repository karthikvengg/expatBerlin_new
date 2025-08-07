import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t("contactTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Phone Button */}
            <a
              href="tel:+4930123456789"
              className="bg-expatberlin-secondary hover:bg-expatberlin-secondary-dark text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +49 (30) 123 456 789
            </a>

            {/* Email Button */}
            <a
              href="mailto:info@xpatberlin.com"
              className="bg-expatberlin-secondary hover:bg-expatberlin-secondary-dark text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@xpatberlin.com
            </a>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t("advantagesTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* No Cost */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <div className="w-12 h-12 mx-auto mb-4 text-expatberlin-secondary">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("noCost")}
                </h3>
                <p className="text-gray-600 text-sm">{t("noCostDesc")}</p>
                <p className="text-gray-500 text-xs mt-2">
                  {t("noCostSubtext")}
                </p>
              </div>
            </div>

            {/* Full Support */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <div className="w-12 h-12 mx-auto mb-4 text-expatberlin-secondary">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("fullSupport")}
                </h3>
                <p className="text-gray-600 text-sm">{t("fullSupportDesc")}</p>
                <p className="text-gray-500 text-xs mt-2">
                  {t("fullSupportSubtext")}
                </p>
              </div>
            </div>

            {/* Expert Guidance */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <div className="w-12 h-12 mx-auto mb-4 text-expatberlin-secondary">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("expertGuidance")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("expertGuidanceDesc")}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {t("expertGuidanceSubtext")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">{t("copyright")}</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-600 hover:text-expatberlin-primary text-sm transition-colors"
              >
                {t("privacyPolicy")}
              </a>
              <a
                href="/terms"
                className="text-gray-600 hover:text-expatberlin-primary text-sm transition-colors"
              >
                {t("termsOfService")}
              </a>
              <a
                href="/imprint"
                className="text-gray-600 hover:text-expatberlin-primary text-sm transition-colors"
              >
                {t("imprint")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
