import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly py-4">
      <div>
        <h1 className="text-2xl font-medium">RS</h1>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink>About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
