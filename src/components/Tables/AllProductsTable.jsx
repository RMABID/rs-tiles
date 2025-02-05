import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const AllProductsTable = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [latests, setLatests] = useState(false);
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
    latest,
  } = item;

  // Delete Product
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/product/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  //Latest Products Add
  const handleAddLatestProduct = async (id) => {
    try {
      await axiosSecure.patch(`/all-products/${id}`, { latests });
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
      <td>
        <button
          onClick={() => handleAddLatestProduct(_id, setLatests(!latests))}
          title="Add Latest Products"
          className={`btn btn-ghost text-xl ${latest ? "text-lime-400" : ""}`}
        >
          {latest ? <IoCheckmarkDoneSharp /> : <IoMdCheckmark />}
        </button>
      </td>
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
