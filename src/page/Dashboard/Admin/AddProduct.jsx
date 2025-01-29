import axios from "axios";
import imageUpload from "../../../api/utils";
import ProductFrom from "../../../components/Dashboard/From/ProductFrom";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddProduct = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const from = event.target;
    const product_name = from.product_name.value;
    const category = from.category.value;
    const type = from.type.value;
    const size = from.size.value;
    const box = from.box.value;
    const pes = from.pes.value;
    const image = from.image.files[0];
    const product_image = await imageUpload(image);

    const addProduct = {
      product_name,
      category,
      product_image,
      type,
      size,
      box: parseInt(box),
      pes: parseInt(pes),
      owner_info: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };

    try {
      const { data } = await axiosSecure.post("/tails-products", addProduct);
      toast.success("Product SuccessFully Added");
      navigate("/dashboard/all-product");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ProductFrom user={user} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
