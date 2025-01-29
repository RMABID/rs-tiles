import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/AllProducts/ProductCard";
import SideBarFilter from "../../components/AllProducts/SideBarFilter";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import LoadingSpinner from "../../components/share/LoadingSpinner";
import { Outlet } from "react-router-dom";

const AllProducts = () => {
  const axiosPublic = useAxiosPublic();
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState([]);
  const {
    data: products = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["all-products", searchValue, filter],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/all-products?search=${searchValue}&filter=${filter}`
      );
      return data;
    },
  });
  // if (isPending) return <LoadingSpinner />;
  const handleFilter = (e) => {
    setFilter((prev) => {
      if (prev.includes(e.target.value)) {
        return prev.filter((item) => item !== e.target.value);
      } else {
        return [...prev, e.target.value];
      }
    });
  };

  return (
    <div className="pt-32 lg:px-12 md:px-8 px-4">
      <div className="grid grid-cols-12  gap-x-3">
        {/* Side Filter */}
        <div className="col-span-3">
          <SideBarFilter handleFilter={handleFilter} />
        </div>
        <div className="col-span-9 ">
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
                <button type="submit" className="btn py-6 join-item">
                  Search
                </button>
              </div>
            </div>
          </div>

          {products.length !== 0 ? (
            <div className="grid lg:grid-cols-3 my-12 md:grid-cols-2 items-center gap-8 lg:gap-12">
              {products.map((item, index) => (
                <ProductCard item={item} key={index} />
              ))}
            </div>
          ) : (
            <h1 className="h-screen flex flex-col justify-center items-center text-4xl text-red-500">
              Sorry ! No Product Found.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
