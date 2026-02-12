import Card from "./Card";
import { Link } from "react-router-dom";

const menuItems = [
  {
    image: "/malai-gravy-chaap.jpg",
    name: "Malai Chaap",
    halfPrice: 110,
    fullPrice: 210,
    description: "Signature creamy chaap that melts in your mouth.",
    rating: "4.9",
    reviews: "1.2k",
    badge: "BEST SELLER",
  },
  {
    image: "/afghani-malai-chaap.jpg",
    name: "Afghani Chaap",
    halfPrice: 110,
    fullPrice: 210,
    description: "Mild, buttery Afghani-style chaap with a smoky tandoor finish.",
    rating: "5.0",
    reviews: "2k+",
    badge: "CHEF FAVOURITE",
  },
  {
    image: "/tandoori-momo.webp",
    name: "Tandoori Momos",
    price: 60,
    description: "Crispy, smoky momos tossed in tandoori masala.",
    rating: "4.8",
    reviews: "980",
    badge: "HOT PICK",
  },
];

const Featured = () => {
  return (
    <section className="px-12 py-12 section-fade-up section-fade-up-delay">
      <div className="flex items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-black">The Royal Menu</h1>
          <h4 className="text-lg text-gray-700">
            Our most ordered and loved delicacies from the heart of Delhi.
          </h4>
        </div>
        <Link
          to="/menu"
          className="text-orange-600 font-semibold hover:underline whitespace-nowrap"
        >
          View All Items →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
