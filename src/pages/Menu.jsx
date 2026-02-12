import { useState } from "react";
import { Search } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const categories = [
  "All Items",
  "Chaap",
  "Paneer Tikka",
  "Paneer Tikka Roll",
  "Chaap Roll",
  "Momos",
];

const allMenuItems = {
  chaap: [
    {
      image: "/malai-gravy-chaap.jpg",
      name: "Malai Chaap",
      halfPrice: 110,
      fullPrice: 210,
      description: "Rich, creamy classic chaap with a velvety malai marinade.",
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
      rating: "4.8",
      reviews: "980",
      badge: "MUST TRY",
    },
    {
      image: "/tandoori-chaap.jpg",
      name: "Tandoori Soya Chaap",
      halfPrice: 100,
      fullPrice: 200,
      description: "Classic tandoori chaap marinated in robust North Indian spices.",
      rating: "4.7",
      reviews: "1.1k",
      badge: null,
    },
    {
      image: "/Soya-Chaap-Masala.jpg",
      name: "Masala Chaap",
      halfPrice: 100,
      fullPrice: 200,
      description: "Spicy, masaledar chaap for those who love a bold kick.",
      rating: "4.6",
      reviews: "870",
      badge: null,
    },
    {
      image: "/chaap.jpeg",
      name: "Pudina Hariyali Chaap",
      halfPrice: 100,
      fullPrice: 200,
      description: "Fresh mint and coriander marinade with a vibrant green hue.",
      rating: "4.7",
      reviews: "760",
      badge: null,
    },
    {
      image: "/achari-chaap.jpg",
      name: "Achari Chaap",
      halfPrice: 100,
      fullPrice: 200,
      description: "Tangy pickle-spiced chaap with a chatpata flavour profile.",
      rating: "4.6",
      reviews: "690",
      badge: null,
    },
    {
      image: "/tandoori-chaap.jpg",
      name: "Chatpati Chaap",
      halfPrice: 100,
      fullPrice: 200,
      description: "Street-style spicy chaap with chatpata masala.",
      rating: "4.5",
      reviews: "640",
      badge: null,
    },
    {
      image: "/LEMON-SOYA-CHAAP-img.jpg",
      name: "Lemon Chaap",
      halfPrice: 100,
      fullPrice: 200,
      description: "Zesty lemon-and-herb marinated chaap, light and refreshing.",
      rating: "4.5",
      reviews: "610",
      badge: null,
    },
    {
      image: "/crispy.webp",
      name: "Crispy Chaap",
      halfPrice: 110,
      fullPrice: 210,
      description: "Crisp outside, juicy inside – perfect for texture lovers.",
      rating: "4.8",
      reviews: "1.0k",
      badge: null,
    },
    {
      image: "/stuffed-paneer-chaap.jpg",
      name: "Afghani Stuff Chaap",
      halfPrice: 140,
      fullPrice: 270,
      description: "Stuffed Afghani-style chaap loaded with rich creamy filling.",
      rating: "4.9",
      reviews: "740",
      badge: "PREMIUM",
    },
    {
      image: "/stuffed.webp",
      name: "Masala Stuff Chaap",
      halfPrice: 130,
      fullPrice: 250,
      description: "Spicy stuffed chaap for serious masala cravings.",
      rating: "4.7",
      reviews: "680",
      badge: null,
    },
    {
      image: "/malai-filled.webp",
      name: "Malai Stuff Chaap",
      halfPrice: 150,
      fullPrice: 280,
      description: "Indulgent stuffed chaap in a rich, creamy malai base.",
      rating: "5.0",
      reviews: "820",
      badge: "CHEF SPECIAL",
    },
  ],
  paneerTikka: [
    {
      image: "/paneer-tikka.webp",
      name: "Tandoori Paneer Tikka",
      price: 120,
      description: "Charred paneer cubes in classic tandoori masala.",
      rating: "4.8",
      reviews: "1.3k",
      badge: "BEST SELLER",
    },
    {
      image: "/afghani-malai-chaap.jpg",
      name: "Afghani Paneer Tikka",
      price: 130,
      description: "Creamy and mild Afghani-style paneer tikka.",
      rating: "4.9",
      reviews: "980",
      badge: "MUST TRY",
    },
    {
      image: "/achari-tikka.webp",
      name: "Achari Paneer Tikka",
      price: 120,
      description: "Tangy achari spices with smoky tandoor-paneer.",
      rating: "4.7",
      reviews: "720",
      badge: null,
    },
    {
      image: "/hariyali-tikka.webp",
      name: "Hariyali Paneer Tikka",
      price: 120,
      description: "Green herb marinade with pudina and dhania.",
      rating: "4.6",
      reviews: "650",
      badge: null,
    },
    {
      image: "/malai-paneer.webp",
      name: "Malai Paneer Tikka",
      price: 130,
      description: "Silky, rich malai marinade on soft paneer cubes.",
      rating: "4.9",
      reviews: "1.0k",
      badge: null,
    },
    {
      image: "/rumali-roti.webp",
      name: "Rumali Roti",
      price: 10,
      description: "Light and fluffy, ideal with paneer tikkas.",
      rating: "4.6",
      reviews: "900",
      badge: null,
    },
  ],
  paneerRoll: [
    {
      image: "/signature-roll.jpg",
      name: "Tandoori Paneer Tikka Roll",
      price: 90,
      description: "Tandoori paneer tikka wrapped in soft rumali roti.",
      rating: "4.8",
      reviews: "1.1k",
      badge: "BEST SELLER",
    },
    {
      image: "/signature-roll.jpg",
      name: "Achari Paneer Tikka Roll",
      price: 90,
      description: "Zesty achari paneer tikka rolled with onions and chutney.",
      rating: "4.7",
      reviews: "760",
      badge: null,
    },
    {
      image: "/signature-roll.jpg",
      name: "Hariyali Paneer Tikka Roll",
      price: 90,
      description: "Fresh green herb paneer tikka roll.",
      rating: "4.6",
      reviews: "640",
      badge: null,
    },
    {
      image: "/signature-roll.jpg",
      name: "Malai Paneer Tikka Roll",
      price: 100,
      description: "Creamy malai paneer tikka wrapped for on-the-go indulgence.",
      rating: "4.9",
      reviews: "830",
      badge: "PREMIUM",
    },
  ],
  chaapRoll: [
    {
      image: "/malai-roll.webp",
      name: "Malai Chaap Roll",
      price: 90,
      description: "Signature malai chaap rolled with salad and chutney.",
      rating: "4.8",
      reviews: "900",
      badge: null,
    },
    {
      image: "/achari-roll.webp",
      name: "Chatpati Chaap Roll",
      price: 90,
      description: "Chatpata, spicy chaap roll packed with flavour.",
      rating: "4.7",
      reviews: "780",
      badge: null,
    },
    {
      image: "/signature-roll.jpg",
      name: "Pudina Hariyali Roll",
      price: 80,
      description: "Refreshing pudina-hariyali chaap in a soft roll.",
      rating: "4.6",
      reviews: "640",
      badge: null,
    },
    {
      image: "/afghani-roll.webp",
      name: "Afghani Chaap Roll",
      price: 90,
      description: "Creamy Afghani chaap with onions and mint chutney.",
      rating: "4.8",
      reviews: "720",
      badge: null,
    },
    {
      image: "/signature-roll.jpg",
      name: "Masala Chaap Roll",
      price: 80,
      description: "Spicy masala chaap wrapped in a soft roll.",
      rating: "4.5",
      reviews: "610",
      badge: null,
    },
    {
      image: "/signature-roll.jpg",
      name: "Lemon Chaap Roll",
      price: 90,
      description: "Zesty lemon chaap roll with fresh salad.",
      rating: "4.5",
      reviews: "580",
      badge: null,
    },
    {
      image: "/signature-roll.jpg",
      name: "Crispy Chaap Roll",
      price: 80,
      description: "Crunchy chaap roll for texture and flavour.",
      rating: "4.6",
      reviews: "650",
      badge: null,
    },
  ],
  momos: [
    {
      image: "/tandoori-momo.webp",
      name: "Tandoori Momos",
      price: 60,
      description: "Smoky tandoori momos with spicy chutney.",
      rating: "4.7",
      reviews: "830",
      badge: "HOT",
    },
    {
      image: "/afghani-momo.webp",
      name: "Veg Afghani Momos",
      price: 70,
      description: "Creamy Afghani-style veg momos.",
      rating: "4.8",
      reviews: "910",
      badge: null,
    },
    {
      image: "/achari-momo.webp",
      name: "Veg Achari Momos",
      price: 60,
      description: "Tangy achari-flavoured veg momos.",
      rating: "4.6",
      reviews: "720",
      badge: null,
    },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredItems = () => {
    let items = [];
    
    if (selectedCategory === "All Items") {
      items = [
        ...allMenuItems.chaap,
        ...allMenuItems.paneerTikka,
        ...allMenuItems.paneerRoll,
        ...allMenuItems.chaapRoll,
        ...allMenuItems.momos,
      ];
    } else if (selectedCategory === "Chaap") {
      items = allMenuItems.chaap;
    } else if (selectedCategory === "Paneer Tikka") {
      items = allMenuItems.paneerTikka;
    } else if (selectedCategory === "Paneer Tikka Roll") {
      items = allMenuItems.paneerRoll;
    } else if (selectedCategory === "Chaap Roll") {
      items = allMenuItems.chaapRoll;
    } else if (selectedCategory === "Momos") {
      items = allMenuItems.momos;
    }

    if (searchQuery) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  };

  const chaapItems = getFilteredItems().filter((item) =>
    allMenuItems.chaap.some((chaap) => chaap.name === item.name)
  );
  const paneerTikkaItems = getFilteredItems().filter((item) =>
    allMenuItems.paneerTikka.some((paneer) => paneer.name === item.name)
  );
  const paneerRollItems = getFilteredItems().filter((item) =>
    allMenuItems.paneerRoll.some((roll) => roll.name === item.name)
  );
  const chaapRollItems = getFilteredItems().filter((item) =>
    allMenuItems.chaapRoll.some((roll) => roll.name === item.name)
  );
  const momoItems = getFilteredItems().filter((item) =>
    allMenuItems.momos.some((momo) => momo.name === item.name)
  );

  return (
    <div className="min-h-screen bg-gray-50 page">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 py-8 section-fade-up">
        {/* Search Bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
            <input
              type="text"
              placeholder="Search for your favorite chaap..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Chaap Section */}
        {chaapItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Chaap
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {chaapItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chaapItems.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* Paneer Tikka Section */}
        {paneerTikkaItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Paneer Tikka
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {paneerTikkaItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paneerTikkaItems.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* Paneer Tikka Roll Section */}
        {paneerRollItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Paneer Tikka Roll
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {paneerRollItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paneerRollItems.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* Chaap Roll Section */}
        {chaapRollItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Chaap Roll
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {chaapRollItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chaapRollItems.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* Momos Section */}
        {momoItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Momos
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {momoItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {momoItems.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;

