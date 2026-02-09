import Header from "../components/Header";
import Footer from "../components/Footer";
import { BadgeCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="h-auto px-4 sm:px-6 lg:px-14 py-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <div className="relative w-full lg:w-1/2 max-w-xl mb-8 lg:mb-0">
          <img
            src="/food-cart.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="bg-orange-600 text-white flex justify-center items-center rounded-[50%] absolute -bottom-4 -right-4 text-sm p-8 h-24 w-24 font-bold">
            ESTD 2012
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 max-w-xl">
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-orange-600 mb-3 sm:mb-4">
            DISCOVER OUR ROOTS
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-4 leading-tight">
            Our Story: From Cart to Crown
          </h1>
          <p className="mb-4 font-extralight text-sm sm:text-base">
            From a humble cart to the city's favorite Chaap destination, we bring
            you the most authentic flavors. Our journey started with a simple cart
            and a passion for spices that hit the spot every single time.
          </p>
          <p className="mb-4 font-extralight text-sm sm:text-base">
            We use non-GMO soy protein and a blend of hand-pounded spices,
            marinated overnight to ensure every bite is a burst of flavor. It's
            not just food; it's a legacy of taste.
          </p>
          <span className="font-semibold text-base sm:text-lg flex gap-2 items-center">
            <BadgeCheck className="bg-red-400 text-white rounded-[50%] p-0.5 font-semibold text-3xl h-7 w-7" />
            100% Vegetarian & High Protein
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

