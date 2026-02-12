import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <section className="h-auto px-4 sm:px-6 lg:px-12 py-4 mb-8 hover:brightness-110 transition ease-in-out duration-300 hover:scale-102 section-fade-up">
        <div
          className="bg-black bg-opacity-50 px-6 sm:px-10 md:px-14 pt-32 sm:pt-40 md:pt-56 pb-10 sm:pb-14 md:pb-20 rounded-lg text-white"
          style={{
            backgroundImage: "url('/hero-chaap.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="backdrop-blur-xl bg-linear-to-r from-orange-400 via-red-400 to-orange-500 text-white px-5 py-1 rounded-full font-semibold text-xs sm:text-sm shadow-md animate-pulse inline-block">
            Authentic North Indian
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">The King of Chaap</h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-orange-600 font-bold mb-4">is Here</h2>
          <p className="text-base sm:text-lg max-w-2xl mb-6">
            Experience the authentic, smoky flavors of North India's favorite
            street food. Marinated in tradition, grilled to perfection.
          </p>
          <nav className="flex flex-wrap gap-3 sm:gap-4">
            <button
              className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 hover:scale-105 transition ease-in-out duration-300"
              onClick={() => navigate("/franchise")}
            >
              Book Franchise
            </button>
            <button
              className="backdrop-blur-xl text-white font-semibold px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-orange-600 hover:scale-105 transition ease-in-out duration-300"
              onClick={() => navigate("/menu")}
            >
              View Full Menu
            </button>
          </nav>
        </div>
      </section>

      <section className="h-auto px-4 sm:px-6 lg:px-14 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 section-fade-up section-fade-up-delay">
        <div className="relative w-full lg:w-1/2 max-w-xl">
          <img src="/food-cart.jpeg" alt="About Us" className="w-full h-full object-cover rounded-lg" />
          <div className="bg-orange-600 text-white flex justify-center items-center rounded-[50%] absolute -bottom-4 -right-4 text-sm p-8 h-24 w-24 font-bold">
            ESTD 2012
          </div>
        </div>

        <div className="mt-8 lg:mt-0 flex flex-col items-start justify-center w-full lg:w-1/2 max-w-xl">
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-orange-600 mb-3 sm:mb-4">DISCOVER OUR ROOTS</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-4 leading-tight">Our Story: From Cart to Crown</h1>
          <p className="mb-4 font-extralight text-sm sm:text-base">
            From a humble cart to the city's favorite Chaap destination, we bring you the most authentic flavors. Our journey started with a simple cart and a passion for spices that hit the spot every single time.
          </p>
          <p className="mb-4 font-extralight text-sm sm:text-base">
            We use non-GMO soy protein and a blend of hand-pounded spices, marinated overnight to ensure every bite is a burst of flavor. It's not just food; it's a legacy of taste.
          </p>
          <span className="font-semibold text-base sm:text-lg flex gap-2 items-center">
            <BadgeCheck className="bg-red-400 text-white rounded-[50%] p-0.5 font-semibold text-3xl h-7 w-7" />
            100% Vegetarian & High Protein
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
