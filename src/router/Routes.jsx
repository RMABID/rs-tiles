import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import AllProducts from "../page/Products/AllProducts";
import AboutUs from "../page/AboutUs/OurTeam";
import OurTeam from "../page/AboutUs/OurTeam";
import Dashboard from "../layout/Dashboard";
import AddProduct from "../page/Dashboard/Admin/AddProduct";
import AllProduct from "../page/Dashboard/Admin/AllProduct";
import ProductUpdated from "../components/Dashboard/Updated/ProductUpdated";
import RsLoan from "../page/Dashboard/Admin/RsLoan/RsLoan";
import Login from "../page/Auth/Login";
import Register from "../page/Auth/Register";

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
      {
        path: "all-product",
        element: <AllProduct />,
      },
      {
        path: "all-product/:id",
        element: <ProductUpdated />,
      },
      {
        path: "rs-loan",
        element: <RsLoan />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Routes;
