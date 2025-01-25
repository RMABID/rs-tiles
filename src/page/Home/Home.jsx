import About from "../../components/Home/About";
import Banner from "../../components/Home/Banner";
import Product from "../../components/Home/Product";
import Footer from "../../components/share/Footer";
import Navbar from "../../components/share/Navbar";
import Testimonial from "../../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Banner />
        <About />
        <Product />
        <Testimonial />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
