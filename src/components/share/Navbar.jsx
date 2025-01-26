import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/rs_logo-removebg-preview.png";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setIsVisible(false);
  };

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
          <Link to={"/"} className="items-center hidden lg:flex cursor-pointer">
            <img className=" w-16 " src={logo} />
            <h1 className="text-xl -ml-4 italic font-medium">RS Tiles</h1>
          </Link>
          {/* <h1 className="text-2xl lg:hidden font-medium">
            <IoMenu />
          </h1> */}
          <div
            onClick={handleOpen}
            className="w-fit lg:hidden flex items-center justify-center cursor-pointer flex-col gap-1 text-neutral-700 "
          >
            {open ? <FaX /> : <FaBars />}
          </div>
        </div>
        {/* Small NavBar */}
        <div
          className={`${
            open
              ? "flex absolute top-20 left-0 w-full h-auto md:relative "
              : "hidden"
          } flex-1 w-full flex-col items-center justify-end gap-16`}
        >
          <ul className="flex flex-col md:items-center items-start flex-wrap  text-lg  md:gap-8 gap-4">
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
        </ul>

        <Link to={"/"} className="flex items-center lg:hidden cursor-pointer">
          <img className=" w-16 " src={logo} />
          <h1 className="text-xl -ml-4 italic font-medium">RS Tiles</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
