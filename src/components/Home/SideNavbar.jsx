import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="fixed z-40">
      <div className="flex flex-col gap-6 mt-62 text-white items-center">
        <Link
          to="https://www.facebook.com/profile.php?id=61558253872692"
          className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40"
        >
          <FaFacebookF />
        </Link>
        <Link className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40">
          <BsTwitter />
        </Link>
        <Link className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40">
          <GrInstagram />
        </Link>
        <Link className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40">
          <FaLinkedinIn />
        </Link>
        <Link className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40">
          <FaYoutube />
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
