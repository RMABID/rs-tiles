import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import AllProducts from "../page/Products/AllProducts";

const Routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "products",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default Routes;
