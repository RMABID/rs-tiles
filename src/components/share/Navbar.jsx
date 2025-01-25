import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/rs_logo-removebg-preview.png";
import { IoIosArrowDown } from "react-icons/io";

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
          <li className="dropdown dropdown-bottom dropdown-center cursor-pointer">
            <div
              tabIndex={0}
              role="button"
              className={"flex items-center gap-x-2 "}
            >
              About Us{" "}
              <span>
                <IoIosArrowDown />
              </span>{" "}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content cursor-pointer -ml-16 mt-6 menu bg-black text-white rounded-box z-1 w-52 mx-auto p-2 shadow-sm"
            >
              <li>
                <Link>Company overview</Link>
              </li>
              <li>
                <Link>Mission, Vision & Values</Link>
              </li>
              <li>
                <Link to={"/our-team"}>Our Team</Link>
              </li>
            </ul>
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
