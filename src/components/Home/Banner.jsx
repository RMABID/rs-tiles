import banner from "../../assets/image/banner.jpg";
import { motion } from "motion/react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${banner}')`,
      }}
      className="relative bg-center bg-cover w-full bg-no-repeat h-screen md:h-[50rem]"
    >
      <div className="absolute inset-0 bg-[#05110456] flex justify-center items-center text-center">
        <Fade direction="up">
          <div className="text-white p-6">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-5xl lg:text-8xl font-medium uppercase mb-4"
            >
              Serving You Excellence
            </motion.h1>
            <p className="text-lg">
              The premium exquisite collection will effortlessly reflect your
              luxurious living style.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
