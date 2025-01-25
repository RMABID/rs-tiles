import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/rs_logo-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className=" fixed w-full z-40  py-4 Raleway bg-[#B8BACD]">
      <div className="container mx-auto px-4 md:px-0 flex items-center justify-between">
        <div>
          <Link to={"/"} className="items-center hidden lg:flex cursor-pointer">
            <img className=" w-16 " src={logo} />
            <h1 className="text-xl -ml-4 italic font-medium">RS Tiles</h1>
          </Link>
          <h1 className="text-xl lg:hidden font-medium">
            <IoMenu />
          </h1>
        </div>
        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
        </ul>
        <Link to={"/"} className="flex items-center lg:hidden cursor-pointer">
          <h1 className="text-xl -mr-4 italic font-medium">RS Tiles</h1>
          <img className=" w-16 " src={logo} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
