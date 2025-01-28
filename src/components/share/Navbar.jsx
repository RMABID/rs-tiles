import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/rs_logo-removebg-preview.png";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";


const Navbar = ({ handleToggle, isActive }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollState = window.scrollY;

      if (currentScrollState > scrollPosition && currentScrollState > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrollPosition(currentScrollState);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollPosition]);

  return (
    <nav
      className={`${isVisible ? "translate-y-0" : "-translate-y-full"} ${
        scrollPosition > 100 ? "bg-red-300" : "bg-[#B8BACD]/50"
      } fixed w-full z-40 backdrop-blur-lg transition-transform duration-300   py-4 Raleway `}
    >
      <div className="relative container mx-auto px-4 md:px-0 flex items-center justify-between">
        <div>
          <Link to={"/"} className="items-center  flex cursor-pointer">
            <img className=" w-16 " src={logo} />
            <h1 className="text-xl -ml-4 italic font-medium">RS Tiles</h1>
          </Link>
        </div>

        {/* navbar */}
        <ul className="lg:flex items-start flex-wrap text-lg  hidden gap-4">
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
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </ul>

        <div className="flex items-center lg:hidden cursor-pointer">
          <button
            onClick={handleToggle}
            className="p-4 focus:outline-none lg:hidden focus:bg-gray-200"
          >
            {isActive ? <AiOutlineBars className="h-5 w-5" /> : <RxCross1 />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
