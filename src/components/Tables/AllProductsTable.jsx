import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllProductsTable = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    product_name,
    _id,
    category,
    quantity,
    size,
    box,
    pes,
    product_image,
    total_box,
  } = item;
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/product/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr className="">
      <td>
        <img className="w-16 h-12 " src={product_image} alt="" />
      </td>
      <td>{product_name}</td>
      <td>{category}</td>
      <td>{size}</td>
      <td>{total_box.toFixed(4)}</td>
      <td>{quantity.toFixed(3)}</td>
      <th>
        <div className="flex items-center justify-center">
          <Link
            to={`/dashboard/all-product/${_id}`}
            className="btn text-lg btn-ghost hover:bg-lime-400 "
          >
            <FiEdit />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn text-red-500 hover:bg-red-500 hover:text-white text-lg btn-ghost "
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default AllProductsTable;
