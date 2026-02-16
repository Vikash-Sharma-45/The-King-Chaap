import { useNavigate } from "react-router-dom";

const Royalty = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-gray-100 py-12 sm:py-14 flex items-center justify-center section-fade-up section-fade-up-delay-2">
      <div className="bg-orange-600 text-white rounded-2xl w-full max-w-4xl flex flex-col items-center justify-center px-6 sm:px-10 py-10 sm:py-12 mx-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Join the Royalty</h1>
        <p className="text-center mt-4 text-base sm:text-lg">
          Love our food? Bring "The King Soya Chaap" to your city. <br />
          We're looking for passionate partners to expand our street food
          empire.
        </p>
        <div className="flex justify-center mt-6 w-full">
          <button
            className="bg-white text-orange-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-104 transition ease-in-out duration-300 w-full sm:w-auto text-center"
            onClick={() => navigate("/franchise")}
          >
            Apply for Franchise
          </button>
        </div>
      </div>
    </section>
  );
};

export default Royalty;
