import Card from "./Card";
import { Link } from "react-router-dom";

const menuItems = [
  {
    image: "/afghani-malai-chaap.jpg",
    name: "Malai Chaap",
    price: 220,
    description: "Velvety smooth, mild, and melt-in-the-mouth. Marinated in cream, yogurt, and...",
    rating: "4.9",
    reviews: "1.2k",
    badge: null,
  },
  {
    image: "/tandoori-chaap.jpg",
    name: "Afgani Chaap",
    price: 240,
    description: "Our signature recipe. Marinated in secret Afghani spices and grilled to perfection in a...",
    rating: "5.0",
    reviews: "2k+",
    badge: "BEST SELLER",
  },
  {
    image: "/masala-gravy-chaap.jpg",
    name: "Masala Chaap",
    price: 200,
    description: "For those who love a spicy, robust kick. Tossed in a fiery blend of onion, tomato, an...",
    rating: "4.7",
    reviews: "890",
    badge: null,
  },
];

const Featured = () => {
  return (
    <section className="px-12 py-12">
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
