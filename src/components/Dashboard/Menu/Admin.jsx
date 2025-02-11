import { MdNoteAdd } from "react-icons/md";
import MenuItem from "./MenuItem";
import { LuBrickWall } from "react-icons/lu";
import { FaStackOverflow } from "react-icons/fa";

const Admin = () => {
  return (
    <>
      <MenuItem icon={MdNoteAdd} text="Add Product" address="/dashboard" />
      <MenuItem icon={LuBrickWall} text="All Products" address="all-product" />
      <MenuItem icon={FaStackOverflow} text="Rs Loan" address="rs-loan" />
    </>
  );
};

export default Admin;
