import Header from "../components/Header";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Royalty from "../components/Royalty";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen page">
      <Header />
      <Hero />
      <Featured />
      <Royalty />
      <Footer />
    </div>
  );
};

export default Home;

