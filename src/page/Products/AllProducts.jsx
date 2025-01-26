import coming from "../../assets/image/Portfolio Update-amico.png";
import SideBarFilter from "../../components/AllProducts/SideBarFilter";

const AllProducts = () => {
  return (
    <div className="pt-32">
      <div className="grid grid-cols-12  gap-x-3">
        {/* Side Filter */}
        <div className="col-span-3 border">
          <SideBarFilter />
        </div>
        <div className="col-span-9 border h-screen">i'm coming</div>
      </div>
    </div>
  );
};

export default AllProducts;
