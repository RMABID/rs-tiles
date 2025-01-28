import { GrLogout } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/rs_logo-removebg-preview.png";
import { IoIosArrowDown } from "react-icons/io";

const SmallNavbar = ({ isActive }) => {
  return (
    <div>
      <div
        className={`z-50 lg:hidden fixed flex flex-col justify-between overflow-hidden bg-[#222b81b9]  w-72 shadow space-y-6 px-2 py-4  inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } lg:translate-x-0 transition duration-500 ease-in-out`}
      >
        <div>
          <div className="w-full  z-50 md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
            <Link to="/">
              <img src={logo} alt="logo" width="100" height="100" />
            </Link>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <ul className="flex flex-col text-white items-start px-6  text-lg   gap-4">
                <li className="hover:bg-lime-200   hover:text-gray-700 w-full p-2 pl-5">
                  <NavLink
                    className={
                      "hover:px-18 hover:py-2  transition-all duration-700 ease-in-out"
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:bg-lime-200   hover:text-gray-700 w-full p-2 pl-5">
                  <NavLink
                    className={
                      "hover:px-18 hover:py-2  transition-all duration-700 ease-in-out"
                    }
                    to={"/products"}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="dropdown dropdown-bottom dropdown-center cursor-pointer hover:bg-lime-200   hover:text-gray-700 w-full p-2 pl-5">
                  <div
                    tabIndex={0}
                    role="button"
                    className={
                      "flex items-center gap-x-2 hover:px-10  transition-all duration-700 ease-in-out "
                    }
                  >
                    About Us{" "}
                    <span>
                      <IoIosArrowDown />
                    </span>{" "}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content cursor-pointer -mr-20  menu bg-black text-white rounded-box z-1 w-52 mx-auto p-2 shadow-sm"
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
                <li className="hover:bg-lime-200  cursor-pointer hover:text-gray-700 p-2">
                  <NavLink
                    className={
                      "hover:px-18 hover:py-2  transition-all duration-700 ease-in-out"
                    }
                    to={"/dashboard"}
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <hr />

          <button className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-lime-300  bg-blue-500 rounded-full hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallNavbar;
