import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TryIt from "../components/TryIt";
import WhyChooseUs from "../components/WhyChooseUs";

const Index = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#BB33C2] to-blue-500">
        {/* <Navbar /> */}
        <Hero />
      </section>
      <WhyChooseUs />
      <TryIt />
      <Footer />
    </div>
  );
};

export default Index;
