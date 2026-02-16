import {
  Facebook,
  Instagram,
  Mail,
  Utensils,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-white text-gray-500 min-h-2/5 py-10 flex flex-col items-center justify-between px-4 sm:px-6 section-fade-up section-fade-up-delay">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8">
        <div className="flex flex-col items-start justify-between gap-2 w-full lg:w-1/4">
          <div className="flex items-center gap-2">
            <Utensils className="bg-orange-600 text-white p-1 size-8 rounded-lg" />
            <Link to="/">
              <h1 className="font-bold text-black text-2xl">THE KING SOYA CHAAP</h1>
            </Link>
          </div>
          <p>
            Serving the honest and most authentic vegetarian street food,
            experience since 2012.
          </p>
          <nav className="flex gap-2 mt-2">
            <Instagram className="size-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            <Facebook className="size-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
          </nav>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col items-start justify-between">
          <h1 className="font-bold text-black text-xl">Quick Links</h1>
          <nav>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:underline">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="hover:underline">
                  Franchise
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col items-start justify-between">
          <h1 className="font-bold text-black text-xl">Find Us</h1>
          <h4 className="mt-2">
            <MapPin className="size-5 inline-block mr-2 text-gray-600" />
            123 Street Food Plaza, Lucknow, 226021
          </h4>
          <a className="mt-2" href="tel:+918303671626">
            <Phone className="size-5 inline-block mr-2 text-gray-600" />
            +91 8303671626
          </a>
          <a className="mt-2" href="mailto:info@thekingsoyachaap.com">
            <Mail className="size-5 inline-block mr-2 text-gray-600" />
            info@thekingsoyachaap.com
          </a>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col items-start justify-between">
            <h1 className="font-bold text-black text-xl">Newsletter</h1>
            <p className="mt-2">Get updates on new menus and offers.</p>
            <div className="flex flex-col sm:flex-row mt-2 w-full max-w-sm">
                <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600 flex-1"/>
                <button className="bg-orange-600 text-white font-semibold p-2 sm:px-4 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg hover:bg-red-700 flex items-center justify-center mt-2 sm:mt-0">
                  <Send className="size-5"/>
                </button>
            </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 py-2 mt-6">
        <p className="text-center">
          © 2024 The King Soya Chaap. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
