import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://rs-riles-server.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
