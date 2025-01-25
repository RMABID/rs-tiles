import Title from "../share/Title";
import wall from "../../assets/image/product card.jpg";
import floor from "../../assets/image/floor tiles.jpg";
import sanitary from "../../assets/image/banner.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="my-14 w-10/12 lg:w-8/12 mx-auto ">
      <Title text1={"Products"} />
      <div className="grid my-12 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-4">
        <Link>
          <div
            style={{ backgroundImage: `url('${wall}')` }}
            className="md:w-[405px] w-[465px]  hover:translate-y-[-5px] duration-700 ease-in-out relative h-[323px] bg-center bg-cover bg-no-repeat"
          >
            <div className="inset-0 bg-[#05110456]  flex flex-col items-center justify-center absolute">
              <button className="btn w-48 text-xl bg-[#F0EFEF]">
                Wall Tails
              </button>
            </div>
          </div>
        </Link>
        <Link>
          <div
            style={{ backgroundImage: `url('${floor}')` }}
            className="md:w-[405px] w-[465px]  hover:translate-y-[-5px] duration-700 ease-in-out relative h-[323px] bg-center bg-cover bg-no-repeat"
          >
            <div className="inset-0 bg-[#05110456]  flex flex-col items-center justify-center absolute">
              <button className="btn w-48 text-xl bg-[#F0EFEF]">
                Floor Tails
              </button>
            </div>
          </div>
        </Link>
        <Link className="md:col-span-2 lg:col-span-1 md:flex lg:flex-none justify-center">
          <div
            style={{ backgroundImage: `url('${sanitary}')` }}
            className="md:w-[405px] w-[465px]  hover:translate-y-[-5px] duration-700 ease-in-out relative h-[323px] bg-center bg-cover bg-no-repeat"
          >
            <div className="inset-0 bg-[#05110456]  flex flex-col items-center justify-center absolute">
              <button className="btn w-48 text-xl bg-[#F0EFEF]">
                Sanitary
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Product;
