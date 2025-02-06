import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
// import Slider from "./Slider";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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
    <div className="my-14">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{
          delay: 3000,

          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {products
          ?.filter((product) => product.latest === true)
          ?.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="group  shadow w-96 h-[30rem] rounded-xl hover:scale-105  duration-500 transition-all border border-white overflow-hidden cursor-pointer bg-white flex flex-col">
                <img
                  className="rounded-t-lg object-cover"
                  src={item?.product_image}
                  alt={item?.product_name}
                />
                <Link
                  to={`/all-products/${item?._id}`}
                  className="bg-white  relative flex flex-col group-hover:-translate-y-11 w-full transition-all duration-500  rounded-b-lg py-4 flex-grow  items-center justify-center"
                >
                  <h3 className="text-3xl text-[#1D86BD] text-center font-medium py-4">
                    {item?.product_name}
                  </h3>
                  <div className="absolute flex  items-center -mb-4 gap-3 -bottom-full group-hover:bottom-1 transition-all duration-500">
                    <span className="text-2xl mt-3 aspect-square border rounded-full p-1">
                      <TiSocialFacebook />
                    </span>
                    <span className="text-2xl mt-3 aspect-square border rounded-full p-1">
                      <CiTwitter />
                    </span>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default LatestCard;
