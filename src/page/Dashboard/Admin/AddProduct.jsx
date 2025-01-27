import axios from "axios";
import imageUpload from "../../../api/utils";
import ProductFrom from "../../../components/Dashboard/From/ProductFrom";

const AddProduct = () => {
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
    };
    console.log(addProduct);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/tails-products",
        addProduct
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ProductFrom handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
