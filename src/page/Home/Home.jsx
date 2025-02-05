import About from "../../components/Home/About";
import Banner from "../../components/Home/Banner";
import Product from "../../components/Home/Product";
import Footer from "../../components/share/Footer";
import Navbar from "../../components/share/Navbar";
import Testimonial from "../../components/Home/Testimonial";
import SideNavbar from "../../components/Home/SideNavbar";
import { useState } from "react";
import SmallNavbar from "../../components/share/SmallNavbar";
import AiAnswer from "../../components/Home/AiAnswer";
import LatestProducts from "../../components/Home/LatestProducts";

const Home = () => {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="">
      <nav>
        <Navbar handleToggle={handleToggle} isActive={isActive} />
        <SideNavbar></SideNavbar>
        <SmallNavbar isActive={isActive} />
      </nav>
      <section>
        <Banner />
        <About />
        <Product />
        <LatestProducts />
        <Testimonial />
        {/* <AiAnswer /> */}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
