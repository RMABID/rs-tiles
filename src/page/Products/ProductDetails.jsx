import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/share/LoadingSpinner";
import RelatedProducts from "../../components/AllProducts/RelatedProducts";

const ProductDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosPublic(`/product/${id}`);
      return data;
    },
  });

  const { product_image, category, type, size, quantity, total_box } = product;

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="pt-20 flex px-4 py-14 flex-col justify-center items-center">
        <div className="lg:flex-row  flex flex-col mt-24 justify-center gap-18 items-center">
          <div className="flex-1">
            <img className="w-full" src={product_image} alt={product_image} />
          </div>

          <div className="flex-1 md:w-[622px] h-[525px] mx-auto bg-white p-6 rounded-lg  ">
            <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">
              2398 GL YBR
            </h2>
            <div className="border-t mt-4 border-gray-300">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-300 w-1/2">
                      category
                    </td>
                    <td className="px-4 py-3 text-gray-700 w-1/2">
                      {category}
                    </td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-300 w-1/2">
                      Type
                    </td>
                    <td className="px-4 py-3 text-gray-700 w-1/2">{type}</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-300 w-1/2">
                      Size
                    </td>
                    <td className="px-4 py-3 text-gray-700 w-1/2">{size}</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-300 w-1/2">
                      Quantity
                    </td>
                    <td className="px-4 py-3 text-gray-700 w-1/2">
                      {quantity}
                    </td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-300 w-1/2">
                      Box
                    </td>
                    <td className="px-4 py-3 text-gray-700 w-1/2">
                      {total_box}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="my-14 px-12">
      
        <div>
          <RelatedProducts category={category} />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
