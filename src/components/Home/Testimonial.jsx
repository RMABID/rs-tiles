import commits_img from "../../assets/image/comits.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div
      style={{ backgroundImage: `url('${commits_img}')` }}
      className=" bg-no-repeat bg-center  bg-cover"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative  h-[450px] w-full  my-10"
      >
        <SwiperSlide className="absolute flex flex-col items-center justify-center  inset-0 text-white bg-[#00000081]  text-center">
          <div className="flex flex-col md:mt-40 md:w-8/12 lg:w-6/12 mt-42 mx-auto justify-center items-center">
            <p className="text-2xl font-medium">
              The perfect finish of mosaic patterns tiles can enhance the
              lavishness to your living style
            </p>
            <h6 className="text-3xl my-8 font-medium">Luxurious Living</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className="absolute flex flex-col items-center justify-center  inset-0 text-white bg-[#00000081]  text-center">
          <div className="flex flex-col md:mt-40 md:w-8/12 lg:w-6/12 mt-42 mx-auto justify-center items-center">
            <p className="text-2xl font-medium">
              The perfect finish of mosaic patterns tiles can enhance the
              lavishness to your living style
            </p>
            <h6 className="text-3xl my-8 font-medium">Luxurious Living</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className="absolute flex flex-col items-center justify-center  inset-0 text-white bg-[#00000081]  text-center">
          <div className="flex flex-col md:mt-40 md:w-8/12 lg:w-6/12 mt-42 mx-auto justify-center items-center">
            <p className="text-2xl font-medium">
              The perfect finish of mosaic patterns tiles can enhance the
              lavishness to your living style
            </p>
            <h6 className="text-3xl my-8 font-medium">Luxurious Living</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
