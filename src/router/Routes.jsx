import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import AllProducts from "../page/Products/AllProducts";
import AboutUs from "../page/AboutUs/OurTeam";
import OurTeam from "../page/AboutUs/OurTeam";
import Dashboard from "../layout/Dashboard";
import AddProduct from "../page/Dashboard/Admin/AddProduct";

const Routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "our-team",
        element: <OurTeam />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default Routes;
