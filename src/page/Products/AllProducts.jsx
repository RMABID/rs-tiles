import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/AllProducts/ProductCard";
import SideBarFilter from "../../components/AllProducts/SideBarFilter";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const AllProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const axiosPublic = useAxiosPublic();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const { data } = await axiosPublic("/all-products");
      return data;
    },
  });

  const handleSearch = async () => {
    console.log(searchValue);
  };

  return (
    <div className="pt-32 lg:px-12 md:px-8 px-4">
      <div className="grid grid-cols-12  gap-x-3">
        {/* Side Filter */}
        <div className="col-span-3">
          <SideBarFilter />
        </div>
        <div className="col-span-9  h-screen">
          <div className="flex items-center md:justify-between justify-center ">
            <div className="items-center hidden md:flex justify-center gap-2">
              <select defaultValue="default" className="select select-lg">
                <option disabled value={"default"}>
                  Popularity
                </option>
                <option>Price (Lowest to Highest)</option>
                <option>Price (Highest to Lowest)</option>
              </select>
            </div>

            <div className="join">
              <div>
                <input
                  className="input py-6 input-bordered join-item"
                  placeholder="Search"
                  name="search"
                  onBlur={(e) => setSearchValue(e.target.value)}
                />
              </div>

              <div className="indicator">
                <button
                  type="submit"
                  onClick={handleSearch}
                  className="btn py-6 join-item"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 my-12 md:grid-cols-2 items-center gap-8 lg:gap-12">
            {products.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
