import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact-form";

const Franchise = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join the Royalty - Franchise Opportunity
            </h1>
            <p className="text-lg text-gray-600">
              Love our food? Bring "The King Chaap" to your city. We're looking for passionate partners to expand our street food empire.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Apply for Franchise
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24-48 hours to discuss franchise opportunities.
            </p>
            <ContactForm />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Low Investment
              </h3>
              <p className="text-gray-600">
                Start your franchise with minimal investment and high returns.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Full Support
              </h3>
              <p className="text-gray-600">
                We provide complete training, marketing support, and ongoing assistance.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Proven Model
              </h3>
              <p className="text-gray-600">
                Join a successful brand with a proven business model since 2012.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Franchise;

