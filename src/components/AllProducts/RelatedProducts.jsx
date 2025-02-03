import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ category }) => {
  const axiosPublic = useAxiosPublic();
  console.log(category);

  const { data: related = [] } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-products?filter=${category}`);
      return data;
    },
  });

  console.log(related);

  return (
    <div>
      <h2 className="text-4xl text-left flex">
        Releted Products{" "}
        <span className="text-lg ml-2">({related?.length})</span>
      </h2>
      <p className="border-2 my-4"></p>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 my-14">
        {related?.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
