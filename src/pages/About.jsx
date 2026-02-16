import Header from "../components/Header";
import Footer from "../components/Footer";
import { BadgeCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 page">
      <Header />
      
      <section className="h-auto px-4 sm:px-6 lg:px-14 py-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 section-fade-up">
        <div className="relative w-full lg:w-1/2 max-w-xl mb-8 lg:mb-0">
          <img
            src="/food-cart.jpeg"
            alt="About Us"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="bg-orange-600 text-white flex justify-center items-center rounded-[50%] absolute -bottom-4 -right-4 text-sm p-8 h-24 w-24 font-bold">
            ESTD 2012
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 max-w-xl">
          <div className="w-full bg-white rounded-2xl shadow-lg border border-orange-50 px-5 py-6 sm:px-7 sm:py-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.15em] text-orange-600 uppercase">
                DISCOVER OUR ROOTS
              </h3>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] sm:text-xs font-semibold text-orange-700">
                ESTD 2012 • LUCKNOW
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mb-3 leading-snug">
              From Street Cart Hero to Chaap Royalty
            </h1>

            <p className="mb-3 font-light text-sm sm:text-base text-gray-700">
              In 2012, we opened a tiny street cart with one bold promise:{" "}
              <span className="font-semibold">
                make chaap so good that people would cross the city for it.
              </span>{" "}
              No fancy décor, no marketing team—just a smokey tandoor,
              hand-ground masalas, and queues that kept getting longer every week.
            </p>
            <p className="mb-3 font-light text-sm sm:text-base text-gray-700">
              Today, <span className="font-semibold">The King Soya Chaap</span> is where Lucknow comes when it wants
              food that feels nostalgic and exciting at the same time. Every stick
              of chaap still goes through the same ritual: slow marination,
              charcoal-fired grills, and a final toss in our closely guarded
              spice blends.
            </p>
            <p className="mb-4 font-light text-sm sm:text-base text-gray-700">
              We keep our kitchen obsessively clean, our recipes brutally honest,
              and our portions generous—because you don't become a{" "}
              <span className="font-semibold">"regular spot"</span> in the neighborhood by cutting corners.
            </p>

            <div className="mt-1 mb-4 w-full rounded-xl bg-orange-50 px-4 py-3">
              <h2 className="text-sm sm:text-base font-semibold text-black mb-1.5 flex items-center gap-2">
                Why people call us <span className="text-orange-600">The King</span>
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm font-light text-gray-800">
                <li>Marinades made in small batches with hand-pounded spices.</li>
                <li>No frozen shortcuts, reheated gravies, or artificial flavour boosters.</li>
                <li>Portions designed for sharing, prices designed for everyday cravings.</li>
                <li>A menu built around 100% vegetarian, high-protein comfort food.</li>
              </ul>
            </div>

            <p className="mb-4 font-light text-sm sm:text-base text-gray-700">
              Whether you're trying chaap for the first time or you already have a
              "usual order", we want every visit to feel like that perfect winter
              evening by the food cart—only now, you get a throne to sit on.
            </p>

            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs sm:text-sm font-semibold text-green-800">
              <BadgeCheck className="bg-red-400 text-white rounded-[50%] p-0.5 text-2xl h-6 w-6" />
              100% Vegetarian • High Protein • Made Fresh Daily
            </span>
          </div>
        </div>
      </section>

    {/* ── Owner's Insights ── */}
      <section className="px-4 sm:px-6 lg:px-14 py-14 section-fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-orange-50 overflow-hidden flex flex-col md:flex-row">
            {/* Photo side */}
            <div className="relative md:w-2/5 min-h-[320px]">
              <img
                src="/Ashish.jpeg"
                alt="Ashish - Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5 md:p-6">
                <h3 className="text-white text-lg font-bold leading-tight">
                  Ashish
                </h3>
                <p className="text-orange-300 text-xs font-semibold tracking-wider uppercase">
                  Founder & Head Chef
                </p>
              </div>
            </div>

            {/* Content side */}
            <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-center gap-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">
                From the Owner's Kitchen
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                "Every stick of chaap carries a piece of my story."
              </h2>
              <p className="text-sm sm:text-base text-gray-700 font-light">
                When I started The King Soya Chaap in 2012, it wasn't just about
                business — it was about proving that street food can be
                world-class without losing its soul. I still taste every new
                batch of masala myself, still stand by the tandoor on weekends,
                and still get a rush when a first-timer says{" "}
                <span className="font-semibold">"this is the best chaap I've ever had."</span>
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-light">
                My promise is simple: we'll never cut corners, never swap fresh
                for frozen, and never stop experimenting. The day we stop
                getting better is the day we don't deserve the crown.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-px flex-1 bg-orange-200" />
                <span className="text-xs text-orange-600 font-semibold tracking-wider whitespace-nowrap">
                  ESTD 2012 • LUCKNOW
                </span>
                <div className="h-px flex-1 bg-orange-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-14 pb-12 section-fade-up section-fade-up-delay">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-orange-600 uppercase tracking-[0.18em]">
              THE CRAFT
            </h3>
            <p className="text-sm text-gray-700">
              Every chaap stick is marinated for hours, not minutes. Our team
              still tastes and adjusts each batch of masala by hand.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-orange-600 uppercase tracking-[0.18em]">
              THE EXPERIENCE
            </h3>
            <p className="text-sm text-gray-700">
              We bring the chaos of Lucknow&apos;s best food lanes into a space that&apos;s
              clean, cozy, and family-friendly—no compromise on vibe.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-orange-600 uppercase tracking-[0.18em]">
              THE PROMISE
            </h3>
            <p className="text-sm text-gray-700">
              Same honest flavour every time you visit. If it&apos;s not hot, fresh,
              and satisfying, it simply doesn&apos;t leave our counter.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

