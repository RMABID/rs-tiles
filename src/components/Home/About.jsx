import { Fade } from "react-awesome-reveal";
import Title from "../share/Title";

const About = () => {
  return (
    <section className="bg-[#F7F7F7] py-14 px-14">
      <Fade direction="right">
        <Title text1={"About Us"} />
      </Fade>
      <div className="flex flex-col justify-center items-center">
        <Fade direction="right">
          <p className="text-center my-12 text-lg lg:w-6/12 mx-auto">
            Star Ceramics Limited a Bangladesh Lebanon Joint Venture and one of
            the largest ceramic tiles & Sanitaryware manufacturing company in
            Bangladesh. The Original vision of the founders backed by solid
            perseverance is to manufacture world-class ceramic tiles and
            sanitaryware with quality and beauty.
          </p>
        </Fade>
        <Fade direction="left">
          <button className="btn bg-[#2D3790] w-40 text-xl py-6 hover:bg-transparent hover:text-black text-white">
            Read more
          </button>
        </Fade>
      </div>
    </section>
  );
};

export default About;
