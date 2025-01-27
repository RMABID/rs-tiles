import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Admin from "./Menu/Admin";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  console.log(isActive);
  return (
    <section>
      {/* Small Screen Navbar */}
      <div className="bg-purple-50 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              {/* <img className="w-14" src={logo} alt="logo" /> */}
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none focus:bg-gray-200"
        >
          {isActive ? <AiOutlineBars className="h-5 w-5" /> : <RxCross1 />}
        </button>
      </div>
      {/* sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-hidden bg-blue-100 w-64 shadow space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-500 ease-in-out`}
      >
        <div>
          <div className="w-full  z-50 md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
            <Link to="/">
              <img
                // className='hidden md:block'
                // src={logo}
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Menu Items */}
              {/* {role === "User" && <User />}
              {role === "Moderator" && <Moderator />}
              {role === "Admin" && <Admin />} */}

              {/* <User />
              <Moderator />
              <Admin /> */}
              <Admin />
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
    </section>
  );
};

export default Sidebar;
