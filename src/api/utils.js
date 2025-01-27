import axios from "axios";

const imageUpload = async (imagedata) => {
  const formData = new FormData();
  formData.append("image", imagedata);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`,
    formData
  );
  return data.data;
};

export default imageUpload;
