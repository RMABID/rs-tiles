import { MdNoteAdd } from "react-icons/md";
import MenuItem from "./MenuItem";
import { LuBrickWall } from "react-icons/lu";

const Admin = () => {
  return (
    <>
      <MenuItem icon={MdNoteAdd} text="Add Product" address="add-product" />
      <MenuItem icon={LuBrickWall} text="All Products" address="all-product" />
    </>
  );
};

export default Admin;
