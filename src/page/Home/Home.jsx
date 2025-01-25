import About from "../../components/Home/About";
import Banner from "../../components/Home/Banner";
import Product from "../../components/Home/Product";
import Footer from "../../components/share/Footer";
import Navbar from "../../components/share/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Banner />
        <About />
        <Product />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
