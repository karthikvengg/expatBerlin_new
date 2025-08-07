import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function CookieConsent() {
  const { language, t } = useLanguage();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Only show for German users and if consent hasn't been given yet
    if (language === 'de') {
      const consentGiven = localStorage.getItem('cookieConsent');
      if (!consentGiven) {
        setShowConsent(true);
      }
    }
  }, [language]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  const content = {
    de: {
      title: 'Cookie-Einstellungen',
      message: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Diese helfen uns, die Website-Leistung zu verstehen und zu verbessern. Sie können Ihre Einstellungen jederzeit ändern.',
      acceptButton: 'Alle akzeptieren',
      declineButton: 'Ablehnen',
      learnMore: 'Mehr erfahren'
    }
  };

  const text = content.de;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 mb-4 animate-in slide-in-from-bottom-4">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 mr-3">
            <svg className="w-6 h-6 text-expatberlin-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {text.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {text.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-expatberlin-primary hover:bg-expatberlin-primary-dark text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                {text.acceptButton}
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                {text.declineButton}
              </button>
            </div>
            <div className="mt-3 text-center">
              <a 
                href="/privacy" 
                className="text-sm text-expatberlin-primary hover:text-expatberlin-primary-dark underline"
              >
                {text.learnMore}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
