import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export function Privacy() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 1, 2024",
      sections: [
        {
          title: "1. Information We Collect",
          content: `We collect information you provide directly to us, such as when you create an account, request our services, or contact us. This may include your name, email address, phone number, and other contact information.`,
        },
        {
          title: "2. How We Use Your Information",
          content: `We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about our services.`,
        },
        {
          title: "3. Information Sharing",
          content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.`,
        },
        {
          title: "4. Data Security",
          content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
        },
        {
          title: "5. Your Rights",
          content: `You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.`,
        },
        {
          title: "6. Contact Us",
          content: `If you have any questions about this Privacy Policy, please contact us at info@xpatberlin.com or +49 (30) 123 456 789.`,
        },
      ],
    },
    de: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: 1. Januar 2024",
      sections: [
        {
          title: "1. Informationen, die wir sammeln",
          content: `Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie ein Konto erstellen, unsere Dienstleistungen anfordern oder uns kontaktieren. Dies kann Ihren Namen, E-Mail-Adresse, Telefonnummer und andere Kontaktinformationen umfassen.`,
        },
        {
          title: "2. Wie wir Ihre Informationen verwenden",
          content: `Wir verwenden die gesammelten Informationen, um unsere Dienstleistungen bereitzustellen, zu pflegen und zu verbessern, Transaktionen zu verarbeiten, Ihnen technische Mitteilungen und Support-Nachrichten zu senden und mit Ihnen über unsere Dienstleistungen zu kommunizieren.`,
        },
        {
          title: "3. Informationsaustausch",
          content: `Wir verkaufen, handeln oder übertragen Ihre persönlichen Informationen nicht an Dritte ohne Ihre Zustimmung, außer wie in dieser Richtlinie beschrieben oder gesetzlich vorgeschrieben.`,
        },
        {
          title: "4. Datensicherheit",
          content: `Wir implementieren angemessene Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Informationen vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung.`,
        },
        {
          title: "5. Ihre Rechte",
          content: `Sie haben das Recht, auf Ihre persönlichen Informationen zuzugreifen, sie zu aktualisieren oder zu löschen. Sie können auch bestimmte Kommunikationen von uns abbestellen.`,
        },
        {
          title: "6. Kontakt",
          content: `Falls Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter info@xpatberlin.com oder +49 (30) 123 456 789.`,
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            {currentContent.lastUpdated}
          </p>

          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
