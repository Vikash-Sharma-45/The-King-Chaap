import { useNavigate } from "react-router-dom";

const Royalty = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-gray-100 py-14 flex items-center justify-center h-4/7">
      <div className="bg-orange-600 h-full text-white rounded-2xl w-[80%] flex flex-col items-center justify-center px-10 py-12">
        <h1 className="text-3xl font-bold text-center">Join the Royalty</h1>
        <p className="text-center mt-4 text-lg">
          Love our food? Bring "The King Chaap" to your city. <br />
          We're looking for passionate partners to expand our street food
          empire.
        </p>
        <div className="flex justify-center mt-6">
          <button
            className="bg-white text-orange-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-104 transition ease-in-out duration-300"
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
