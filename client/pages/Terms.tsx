import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export function Terms() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: January 1, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: `By accessing and using xpatBerlin's services, you accept and agree to be bound by the terms and provision of this agreement.`,
        },
        {
          title: "2. Services Description",
          content: `xpatBerlin provides relocation assistance services for international professionals and families moving to Berlin, including housing support, visa assistance, language training, and integration services.`,
        },
        {
          title: "3. User Responsibilities",
          content: `You agree to provide accurate and complete information when using our services and to comply with all applicable laws and regulations.`,
        },
        {
          title: "4. Service Availability",
          content: `We strive to provide continuous service availability, but we do not guarantee uninterrupted access to our services and may suspend or terminate services for maintenance or other reasons.`,
        },
        {
          title: "5. Limitation of Liability",
          content: `xpatBerlin shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.`,
        },
        {
          title: "6. Governing Law",
          content: `These terms shall be governed by and construed in accordance with the laws of Germany.`,
        },
        {
          title: "7. Contact Information",
          content: `For questions about these Terms of Service, please contact us at info@xpatberlin.com or +49 (30) 123 456 789.`,
        },
      ],
    },
    de: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 1. Januar 2025",
      sections: [
        {
          title: "1. Annahme der Bedingungen",
          content: `Durch den Zugriff auf und die Nutzung der Dienstleistungen von xpatBerlin akzeptieren Sie diese Vereinbarung und erklären sich damit einverstanden, an die Bedingungen und Bestimmungen gebunden zu sein.`,
        },
        {
          title: "2. Dienstleistungsbeschreibung",
          content: `xpatBerlin bietet Umzugshilfe für internationale Fachkräfte und Familien, die nach Berlin ziehen, einschließlich Wohnungsunterstützung, Visa-Hilfe, Sprachtraining und Integrationsdienste.`,
        },
        {
          title: "3. Nutzerpflichten",
          content: `Sie verpflichten sich, genaue und vollständige Informationen bei der Nutzung unserer Dienstleistungen zu liefern und alle geltenden Gesetze und Vorschriften einzuhalten.`,
        },
        {
          title: "4. Dienstverfügbarkeit",
          content: `Wir bemühen uns um kontinuierliche Dienstverfügbarkeit, garantieren jedoch keinen ununterbrochenen Zugang zu unseren Dienstleistungen und können Dienste für Wartung oder andere Gründe aussetzen oder beenden.`,
        },
        {
          title: "5. Haftungsbeschränkung",
          content: `xpatBerlin haftet nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden, die aus Ihrer Nutzung unserer Dienstleistungen resultieren.`,
        },
        {
          title: "6. Geltendes Recht",
          content: `Diese Bedingungen unterliegen den Gesetzen Deutschlands und sind in Übereinstimmung mit diesen auszulegen.`,
        },
        {
          title: "7. Kontaktinformationen",
          content: `Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter info@xpatberlin.com oder +49 (30) 123 456 789.`,
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm p-8">
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
