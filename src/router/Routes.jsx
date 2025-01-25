import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import AllProducts from "../page/Products/AllProducts";
import AboutUs from "../page/AboutUs/OurTeam";
import OurTeam from "../page/AboutUs/OurTeam";

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
]);

export default Routes;
