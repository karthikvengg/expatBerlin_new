import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    housing: 'Housing',
    workPermits: 'Work Permits',
    languageCourses: 'Language Courses',
    aboutUs: 'About Us',
    success: 'Success',
    
    // Hero Section
    heroTitle: 'Your Trusted Partner for Expat Life in',
    heroLocation: 'Berlin',
    heroDescription: 'At expatBerlin, we help international professionals and families navigate their relocation to Berlin. Our comprehensive services ensure a smooth transition, from housing and visa support to language courses and local integration assistance.',
    getStarted: 'Get Started',
    
    // Footer
    contactTitle: 'Call us or send us an email!',
    advantagesTitle: 'Your advantages when working with xpatBerlin',
    noCost: 'No cost',
    noCostDesc: 'No placement fee, no payroll deduction, and no show money for the professional!',
    noCostSubtext: 'All program services are paid for or sponsored by xpatBerlin.',
    fullSupport: 'Full support',
    fullSupportDesc: 'Comprehensive relocation assistance from visa applications to finding housing.',
    fullSupportSubtext: 'We guide you through every step of your Berlin journey.',
    expertGuidance: 'Expert guidance',
    expertGuidanceDesc: 'Local expertise and personalized advice for a successful integration.',
    expertGuidanceSubtext: 'Our team knows Berlin inside and out.',
    copyright: '© 2024 xpatBerlin Private Limited. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    imprint: 'Imprint',
    
    // Placeholder Pages
    housingTitle: 'Housing Solutions in Berlin',
    housingDesc: 'Find your perfect home in Berlin with our comprehensive housing search and rental assistance services.',
    workPermitsTitle: 'Work Permits & Visa Support',
    workPermitsDesc: 'Navigate German bureaucracy with confidence. Get expert help with work permits, visa applications, and legal documentation.',
    languageCoursesTitle: 'German Language Courses',
    languageCoursesDesc: 'Master German with our tailored language programs designed specifically for expats living and working in Berlin.',
    aboutTitle: 'About expatBerlin',
    aboutDesc: 'Learn about our mission to help international professionals and families thrive in Berlin through comprehensive relocation support.',
    successTitle: 'Success Stories',
    successDesc: 'Read inspiring stories from expats who successfully relocated to Berlin and built new lives with expatBerlin\'s support.',
    contentComingSoon: 'Content Coming Soon',
    pageUnderDevelopment: 'This page is under development. Please continue prompting to help us build out the content for this section.',
    readyForDevelopment: 'Ready for Development',
    
    // Ratings
    ratings: 'Ratings',
    fromOurStudents: 'From our students',
  },
  de: {
    // Navigation
    home: 'Startseite',
    housing: 'Wohnen',
    workPermits: 'Arbeitsgenehmigungen',
    languageCourses: 'Sprachkurse',
    aboutUs: 'Über uns',
    success: 'Erfolgsgeschichten',
    
    // Hero Section
    heroTitle: 'Ihr vertrauensvoller Partner für das Expat-Leben in',
    heroLocation: 'Berlin',
    heroDescription: 'Bei expatBerlin helfen wir internationalen Fachkräften und Familien bei ihrer Übersiedlung nach Berlin. Unsere umfassenden Dienstleistungen gewährleisten einen reibungslosen Übergang, von der Wohnungssuche und Visa-Unterstützung bis hin zu Sprachkursen und lokaler Integrationshilfe.',
    getStarted: 'Loslegen',
    
    // Footer
    contactTitle: 'Rufen Sie uns an oder senden Sie uns eine E-Mail!',
    advantagesTitle: 'Ihre Vorteile bei der Zusammenarbeit mit xpatBerlin',
    noCost: 'Keine Kosten',
    noCostDesc: 'Keine Vermittlungsgebühr, keine Lohnabzüge und kein Geld für den Profi!',
    noCostSubtext: 'Alle Programmleistungen werden von xpatBerlin bezahlt oder gesponsert.',
    fullSupport: 'Vollständige Unterstützung',
    fullSupportDesc: 'Umfassende Umzugshilfe von Visa-Anträgen bis zur Wohnungssuche.',
    fullSupportSubtext: 'Wir begleiten Sie bei jedem Schritt Ihrer Berlin-Reise.',
    expertGuidance: 'Fachkundige Beratung',
    expertGuidanceDesc: 'Lokale Expertise und persönliche Beratung für eine erfolgreiche Integration.',
    expertGuidanceSubtext: 'Unser Team kennt Berlin in- und auswendig.',
    copyright: '© 2024 xpatBerlin Private Limited. Alle Rechte vorbehalten.',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfService: 'Nutzungsbedingungen',
    imprint: 'Impressum',
    
    // Placeholder Pages
    housingTitle: 'Wohnlösungen in Berlin',
    housingDesc: 'Finden Sie Ihr perfektes Zuhause in Berlin mit unseren umfassenden Wohnungssuche- und Mietunterstützungsdiensten.',
    workPermitsTitle: 'Arbeitsgenehmigungen & Visa-Unterstützung',
    workPermitsDesc: 'Navigieren Sie selbstbewusst durch die deutsche Bürokratie. Erhalten Sie fachkundige Hilfe bei Arbeitsgenehmigungen, Visa-Anträgen und rechtlichen Dokumenten.',
    languageCoursesTitle: 'Deutsche Sprachkurse',
    languageCoursesDesc: 'Meistern Sie Deutsch mit unseren maßgeschneiderten Sprachprogrammen, die speziell für Expats entwickelt wurden, die in Berlin leben und arbeiten.',
    aboutTitle: 'Über expatBerlin',
    aboutDesc: 'Erfahren Sie mehr über unsere Mission, internationalen Fachkräften und Familien zu helfen, in Berlin durch umfassende Umzugsunterstützung erfolgreich zu sein.',
    successTitle: 'Erfolgsgeschichten',
    successDesc: 'Lesen Sie inspirierende Geschichten von Expats, die erfolgreich nach Berlin umgezogen sind und mit der Unterstützung von expatBerlin ein neues Leben aufgebaut haben.',
    contentComingSoon: 'Inhalte kommen bald',
    pageUnderDevelopment: 'Diese Seite befindet sich in der Entwicklung. Bitte helfen Sie uns weiter, den Inhalt für diesen Bereich aufzubauen.',
    readyForDevelopment: 'Bereit für die Entwicklung',
    
    // Ratings
    ratings: 'Bewertungen',
    fromOurStudents: 'Von unseren Kunden',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
