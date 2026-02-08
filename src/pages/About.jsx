import Header from "../components/Header";
import Footer from "../components/Footer";
import { BadgeCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="h-auto px-14 py-12 flex items-center justify-center gap-12">
        <div className="relative w-[50%]">
          <img
            src="/food-cart.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="bg-orange-600 text-white flex justify-center items-center rounded-[50%] absolute -bottom-4 -right-4 text-sm p-8 h-24 w-24 font-bold">
            ESTD 2012
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-[50%]">
          <h3 className="text-lg font-medium text-orange-600 mb-4">
            DISCOVER OUR ROOTS
          </h3>
          <h1 className="text-5xl text-black font-bold mb-4">
            Our Story: From Cart to Crown
          </h1>
          <p className="mb-4 font-extralight">
            From a humble cart to the city's favorite Chaap destination, we bring
            you the most authentic flavors. Our journey started with a simple cart
            and a passion for spices that hit the spot every single time.
          </p>
          <p className="mb-4 font-extralight">
            We use non-GMO soy protein and a blend of hand-pounded spices,
            marinated overnight to ensure every bite is a burst of flavor. It's
            not just food; it's a legacy of taste.
          </p>
          <span className="font-semibold text-lg flex gap-2">
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

