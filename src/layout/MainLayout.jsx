import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;
