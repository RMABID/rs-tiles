import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <section className="md:flex min-h-screen bg-white/20 relative">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
