import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const LatestCard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: products = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-products`);
      return data;
    },
  });

  return (
    <div>
      {products
        .filter((product) => product.latest === true)
        .map((item, index) => (
          <Link key={index} to={`/all-products/${item?._id}`}>
            <div className="  shadow w-96  rounded-xl hover:scale-105 cursor-pointer duration-500 transition-all border border-white overflow-hidden bg-white flex flex-col">
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src={item?.product_image}
                alt={item?.product_name}
              />
              <div className="bg-white group relative flex flex-col hover:-translate-y-11 w-full transition-all duration-500  rounded-b-lg py-4 flex-grow  items-center justify-center">
                <h3 className="text-3xl text-[#1D86BD] text-center font-medium py-4">
                  {item?.product_name}
                </h3>
                <div className="absolute -bottom-full group-hover:bottom-1 transition-all duration-500">
                  hi
                </div>
              </div>
            </div>
          </Link>
        ))}
      {/*  */}
    </div>
  );
};

export default LatestCard;
