import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact-form";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const locations = [
  {
    name: "Bhawani Bazar, Jankipuram Extension",
    address: "Bhawani Bazar, Jankipuram Extension, Lucknow, Uttar Pradesh",
    phone: "+91 98765 43210",
    hours: "11:00 AM - 11:00 PM",
    image: "/Cart_Front.jpeg",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d80.94!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAwLjAiTiA4MMKwNTYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000",
    mapLink:
      "https://www.google.com/maps/search/Bhawani+Bazar+Jankipuram+Extension+Lucknow",
  },
  {
    name: "IIM Road",
    address: "IIM Road, Lucknow, Uttar Pradesh",
    phone: "+91 98765 43211",
    hours: "11:00 AM - 11:00 PM",
    image: "/Cart_new.jpeg",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d80.95!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000001",
    mapLink: "https://www.google.com/maps/search/IIM+Road+Lucknow",
  },
];

const Franchise = () => {
  return (
    <div className="min-h-screen bg-gray-50 page">
      <Header />

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 py-12 section-fade-up">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join the Royalty - Franchise Opportunity
          </h1>
          <p className="text-lg text-gray-600">
            Love our food? Bring "The King Soya Chaap" to your city. We're looking
            for passionate partners to expand our street food empire.
          </p>
        </div>
      </div>

      {/* ── Our Locations (moved UP) ── */}
      <section className="bg-white py-16 section-fade-up">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">
              Visit Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Our Franchise Locations
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              Drop by either of our outlets for an authentic chaap experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              >
                {/* Location image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Outlet {idx + 1}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {loc.name}
                  </h3>

                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <span className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      {loc.address}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                      {loc.hours}
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                      {loc.phone}
                    </span>
                  </div>

                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>

                {/* Embedded Google Map */}
                <div className="w-full h-56 sm:h-64">
                  <iframe
                    title={`Map - ${loc.name}`}
                    src={loc.mapSrc}
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <div className="container mx-auto px-4 sm:px-6 py-12 section-fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                We provide complete training, marketing support, and ongoing
                assistance.
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

          {/* Apply form (moved DOWN) */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Apply for Franchise
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within
              24-48 hours to discuss franchise opportunities.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Franchise;
