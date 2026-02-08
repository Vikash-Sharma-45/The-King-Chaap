import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const categories = ["All Items", "Tandoori", "Gravy", "Signature Rolls", "Sides", "Beverages"];

const allMenuItems = {
  tandoori: [
    {
      image: "/afghani-malai-chaap.jpg",
      name: "Afghani Malai Chaap",
      price: 240,
      description: "Soy chunks marinated in cashew paste and cream, grilled in a...",
      rating: "4.9",
      reviews: "1.2k",
      badge: "MUST TRY",
    },
    {
      image: "/achari-chaap.jpg",
      name: "Achari Chaap",
      price: 220,
      description: "Tangy pickling spices marinated soy protein with a fiery punch of...",
      rating: "4.7",
      reviews: "890",
      badge: null,
    },
    {
      image: "/stuffed-paneer-chaap.jpg",
      name: "Stuffed Paneer Chaap",
      price: 260,
      description: "Grilled soy chunks with a rich paneer and spice filling, served...",
      rating: "4.8",
      reviews: "1.5k",
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
  ],
  gravy: [
    {
      image: "/masala-gravy-chaap.jpg",
      name: "Masala Gravy Chaap",
      price: 280,
      description: "Soft chaap cooked in a thick, semi-dry tomato and onion grav...",
      rating: "4.6",
      reviews: "950",
      badge: null,
    },
    {
      image: "/malai-gravy-chaap.jpg",
      name: "Malai Gravy Chaap",
      price: 310,
      description: "Rich and velvety white gravy made with cream, butter, and mil...",
      rating: "4.9",
      reviews: "1.3k",
      badge: null,
    },
    {
      image: "/kings-signature-curry.jpg",
      name: "King's Signature Curry",
      price: 340,
      description: "Our chef's special robust gravy with double-marinated chaap...",
      rating: "5.0",
      reviews: "1.8k",
      badge: "MUST TRY",
    },
  ],
  rolls: [
    {
      image: "/signature-roll.jpg",
      name: "Signature Chaap Roll",
      price: 180,
      description: "Crispy chaap wrapped in soft roti with fresh veggies and chutney...",
      rating: "4.8",
      reviews: "2.1k",
      badge: "BEST SELLER",
    },
  ],
  sides: [
    {
      image: "/tandoori-chaap.jpg",
      name: "Garlic Naan",
      price: 60,
      description: "Freshly baked naan with garlic and butter...",
      rating: "4.7",
      reviews: "1.1k",
      badge: null,
    },
  ],
  beverages: [
    {
      image: "/lassi.jpg",
      name: "Sweet Lassi",
      price: 80,
      description: "Creamy yogurt drink, sweet and refreshing...",
      rating: "4.6",
      reviews: "890",
      badge: null,
    },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const getFilteredItems = () => {
    let items = [];
    
    if (selectedCategory === "All Items") {
      items = [
        ...allMenuItems.tandoori,
        ...allMenuItems.gravy,
        ...allMenuItems.rolls,
        ...allMenuItems.sides,
        ...allMenuItems.beverages,
      ];
    } else if (selectedCategory === "Tandoori") {
      items = allMenuItems.tandoori;
    } else if (selectedCategory === "Gravy") {
      items = allMenuItems.gravy;
    } else if (selectedCategory === "Signature Rolls") {
      items = allMenuItems.rolls;
    } else if (selectedCategory === "Sides") {
      items = allMenuItems.sides;
    } else if (selectedCategory === "Beverages") {
      items = allMenuItems.beverages;
    }

    if (searchQuery) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const tandooriItems = getFilteredItems().filter((item) =>
    allMenuItems.tandoori.some((tandoori) => tandoori.name === item.name)
  );
  const gravyItems = getFilteredItems().filter((item) =>
    allMenuItems.gravy.some((gravy) => gravy.name === item.name)
  );
  const rollItems = getFilteredItems().filter((item) =>
    allMenuItems.rolls.some((roll) => roll.name === item.name)
  );
  const sideItems = getFilteredItems().filter((item) =>
    allMenuItems.sides.some((side) => side.name === item.name)
  );
  const beverageItems = getFilteredItems().filter((item) =>
    allMenuItems.beverages.some((beverage) => beverage.name === item.name)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
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

        {/* Tandoori Specialities Section */}
        {tandooriItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  The Tandoori Specialities
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {tandooriItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tandooriItems.map((item, index) => (
                <Card key={index} {...item} onAdd={() => addToCart(item)} />
              ))}
            </div>
          </section>
        )}

        {/* Gravy Delights Section */}
        {gravyItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Gravy Delights
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {gravyItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gravyItems.map((item, index) => (
                <Card key={index} {...item} onAdd={() => addToCart(item)} />
              ))}
            </div>
          </section>
        )}

        {/* Signature Rolls Section */}
        {rollItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Signature Rolls
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {rollItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rollItems.map((item, index) => (
                <Card key={index} {...item} onAdd={() => addToCart(item)} />
              ))}
            </div>
          </section>
        )}

        {/* Sides Section */}
        {sideItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Sides
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {sideItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sideItems.map((item, index) => (
                <Card key={index} {...item} onAdd={() => addToCart(item)} />
              ))}
            </div>
          </section>
        )}

        {/* Beverages Section */}
        {beverageItems.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-orange-600"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Beverages
                </h2>
              </div>
              <span className="text-gray-600 font-medium">
                {beverageItems.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beverageItems.map((item, index) => (
                <Card key={index} {...item} onAdd={() => addToCart(item)} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Floating Cart Button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-orange-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 hover:bg-orange-700 transition">
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium">{cartItems.length} ITEMS</span>
              <span className="text-lg font-bold">View Tray</span>
            </div>
            <div className="text-xl font-bold">₹{getTotalPrice()}</div>
            <ArrowRight className="size-5" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Menu;

