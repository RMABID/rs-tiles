import About from "../../components/Home/About";
import Banner from "../../components/Home/Banner";
import Footer from "../../components/share/Footer";
import Navbar from "../../components/share/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Banner />
        <About />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
