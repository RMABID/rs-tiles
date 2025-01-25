import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar";
import Footer from "../components/share/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
