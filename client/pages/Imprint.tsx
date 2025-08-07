import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export function Imprint() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "Imprint",
      sections: [
        {
          title: "Company Information",
          content: [
            "xpatBerlin Private Limited",
            "Unter den Linden 1",
            "10117 Berlin, Germany",
          ],
        },
        {
          title: "Contact",
          content: [
            "Phone: +49 (30) 123 456 789",
            "Email: info@xpatberlin.com",
            "Website: www.xpatberlin.com",
          ],
        },
        {
          title: "Legal Representatives",
          content: [
            "Managing Director: [Name]",
            "Commercial Register: Berlin HRB [Number]",
            "VAT ID: DE[Number]",
          ],
        },
        {
          title: "Responsible for Content",
          content: [
            "According to § 55 Abs. 2 RStV:",
            "[Name]",
            "Unter den Linden 1",
            "10117 Berlin, Germany",
          ],
        },
        {
          title: "Disclaimer",
          content: [
            "Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
          ],
        },
      ],
    },
    de: {
      title: "Impressum",
      sections: [
        {
          title: "Firmeninformationen",
          content: [
            "xpatBerlin Private Limited",
            "Unter den Linden 1",
            "10117 Berlin, Deutschland",
          ],
        },
        {
          title: "Kontakt",
          content: [
            "Telefon: +49 (30) 123 456 789",
            "E-Mail: info@xpatberlin.com",
            "Website: www.xpatberlin.com",
          ],
        },
        {
          title: "Gesetzliche Vertreter",
          content: [
            "Geschäftsführer: [Name]",
            "Handelsregister: Berlin HRB [Nummer]",
            "Umsatzsteuer-ID: DE[Nummer]",
          ],
        },
        {
          title: "Verantwortlich für den Inhalt",
          content: [
            "Nach § 55 Abs. 2 RStV:",
            "[Name]",
            "Unter den Linden 1",
            "10117 Berlin, Deutschland",
          ],
        },
        {
          title: "Haftungsausschluss",
          content: [
            "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
          ],
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {currentContent.title}
          </h1>

          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  {section.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
