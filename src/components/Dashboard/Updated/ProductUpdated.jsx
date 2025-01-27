import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import QuantityUpdateModal from "../Modal/QuantityUpdateModal";

const ProductUpdated = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: product = {}, refetch } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/product/${id}`);
      return data;
    },
  });
  const {
    product_name,
    _id,
    category,
    quantity,
    size,
    box,
    pes,
    product_image,
  } = product;
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center my-10 uppercase">
          Updated Product
        </h1>
        <div className="border">
          <div className="flex items-start  justify-between w-[36rem] mx-auto">
            <img className="w-40" src={product_image} alt="" />
            <div className="grid grid-cols-2 gap-12 justify-around">
              <h3>
                <span className="text-xl font-medium">Name : </span>{" "}
                {product_name}
              </h3>
              <h3>
                <span className="text-xl font-medium">Size :</span> {size}
              </h3>
              <h3>
                <span className="text-xl font-medium">Box :</span> {box}
              </h3>
              <h3>
                <span className="text-xl font-medium">Pes :</span> {pes}
              </h3>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium">Only Quantity</h3>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              open modal
            </button>
            <QuantityUpdateModal id={_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdated;
