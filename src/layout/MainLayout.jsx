import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar";
import Footer from "../components/share/Footer";
import SmallNavbar from "../components/share/SmallNavbar";
import { useState } from "react";

const MainLayout = () => {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <Navbar handleToggle={handleToggle} isActive={isActive} />
      <SmallNavbar isActive={isActive} />
      <section className="min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
