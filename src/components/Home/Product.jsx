import Title from "../share/Title";
import wall from "../../assets/image/product card.jpg";
import floor from "../../assets/image/floor tiles.jpg";
import sanitary from "../../assets/image/banner.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "motion/react";
import { useState } from "react";

const Product = () => {
  const [category, setCategory] = useState("");

  return (
    <section className="my-14 w-10/12 lg:w-8/12 mx-auto ">
      <Fade direction="down">
        <Title text1={"Products"} />
      </Fade>
      <div className="grid my-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center md:gap-14 gap-4">
        <Fade direction="left">
          <Link to={"/all-products"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundImage: `url('${wall}')` }}
              className="md:w-[405px] w-[365px] mx-auto hover:translate-y-[-5px] duration-700 ease-in-out relative h-[323px] bg-center bg-cover bg-no-repeat"
            >
              <div className="inset-0 bg-[#05110456]  flex flex-col items-center justify-center absolute">
                <button
                  onClick={() => setCategory("wall")}
                  className="btn w-48 text-xl bg-[#F0EFEF]"
                >
                  Wall Tails
                </button>
              </div>
            </motion.div>
          </Link>
        </Fade>
        <Fade direction="up">
          <Link to={"/all-products"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundImage: `url('${floor}')` }}
              className="md:w-[405px] w-[365px] mx-auto  hover:translate-y-[-5px] duration-700 ease-in-out relative h-[323px] bg-center bg-cover bg-no-repeat"
            >
              <div className="inset-0 bg-[#05110456]  flex flex-col items-center justify-center absolute">
                <button
                  onClick={() => setCategory("Floor")}
                  className="btn w-48 text-xl bg-[#F0EFEF]"
                >
                  Floor Tails
                </button>
              </div>
            </motion.div>
          </Link>
        </Fade>
        <Fade
          direction="right"
          className="md:col-span-2 lg:col-span-1 md:flex lg:flex-none justify-center"
        >
          <Link>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundImage: `url('${sanitary}')` }}
              className="md:w-[405px] w-[365px] mx-auto  hover:translate-y-[-5px] duration-700 ease-in-out relative h-[323px] bg-center bg-cover bg-no-repeat"
            >
              <div className="inset-0 bg-[#05110456]  flex flex-col items-center justify-center absolute">
                <button className="btn w-48 text-xl bg-[#F0EFEF]">
                  Sanitary
                </button>
              </div>
            </motion.div>
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Product;
