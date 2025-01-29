import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { product_image, product_name, _id } = item;
  return (
    <Link to={`/all-products/${_id}`}>
      <div className="shadow  rounded-xl hover:scale-105 cursor-pointer duration-500 transition-all border border-white overflow-hidden bg-white flex flex-col">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={product_image}
          alt={product_name}
        />
        <div className="bg-white rounded-b-lg py-4 flex-grow flex items-center justify-center">
          <h3 className="text-3xl text-[#1D86BD] text-center font-medium py-4">
            {product_name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
