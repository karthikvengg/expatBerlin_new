import { Header } from "./Header";
import { Footer } from "./Footer";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-gray-500 mb-4">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 7h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2zM3 7h6v6H3V7zm2 2v2h2V9H5zm-2 6h6v6H3v-6zm2 2v2h2v-2H5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Content Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              This page is under development. Please continue prompting to help
              us build out the content for this section.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-expatberlin-primary text-white rounded-lg">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Ready for Development
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
