import { useState } from "react";

const SideBarFilter = () => {
  const [filter, setFilter] = useState([]);

  const handleFilter = (e) => {
    setFilter((prev) => {
      if (prev.includes(e.target.value)) {
        return prev.filter((item) => item !== e.target.value);
      } else {
        return [...prev, e.target.value];
      }
    });
  };

  console.log(filter);

  return (
    <div className="pl-4  flex flex-col items-center gap-y-8 p-2">
      <h1 className="text-3xl font-medium  ">Filter result</h1>
      <div className="p-8  shadow rounded-md bg-[#FFFFFF]">
        <h3 className="text-2xl font-medium my-4">Category</h3>
        <div className="flex flex-col items-start pt-2 gap-y-4">
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <input
              type="checkbox"
              value="wall"
              onChange={handleFilter}
              className="checkbox checkbox-lg"
            />
            <legend className="text-xl font-light uppercase">Wall</legend>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <input
              type="checkbox"
              value="floor"
              onChange={handleFilter}
              className="checkbox checkbox-lg"
            />
            <legend className="text-xl font-light uppercase">Floor</legend>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <input
              type="checkbox"
              value="stairs"
              onChange={handleFilter}
              className="checkbox checkbox-lg"
            />
            <legend className="text-xl font-light uppercase">Stairs</legend>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <input
              type="checkbox"
              value="wall-floor"
              onChange={handleFilter}
              className="checkbox checkbox-lg"
            />
            <legend className="text-xl font-light uppercase">
              Wall & Floor
            </legend>
          </div>
        </div>
      </div>
      <div className="p-8 px-12 shadow rounded-md bg-[#FFFFFF]">
        <h3 className="text-2xl font-medium my-4">Type</h3>
        <div className="flex flex-col items-start pt-2 gap-y-4">
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <input type="checkbox" className="checkbox checkbox-lg" />
            <legend className="text-xl font-light uppercase">glazed</legend>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <input type="checkbox" className="checkbox checkbox-lg" />
            <legend className="text-xl font-light uppercase">Rustic</legend>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <input type="checkbox" className="checkbox checkbox-lg" />
            <legend className="text-xl font-light uppercase">Mat</legend>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <input type="checkbox" className="checkbox checkbox-lg" />
            <legend className="text-xl font-light uppercase">Homo Gines</legend>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
