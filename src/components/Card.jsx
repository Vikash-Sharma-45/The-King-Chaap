import { Star } from "lucide-react";

const Card = ({ image, name, price, description, rating, reviews, badge }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 ease-in-out flex flex-col menu-card">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover"
        />
        <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
          ₹{price}
        </span>
        {badge && (
          <span className="absolute top-3 left-3 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-1">{description}</p>
        <div className="flex items-center justify-start mt-4">
          <div className="flex items-center gap-1">
            <Star className="size-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-800">{rating}</span>
            <span className="text-sm text-gray-400">({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
