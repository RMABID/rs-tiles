import React from "react";
import Title from "../share/Title";
import { Fade } from "react-awesome-reveal";

const LatestProducts = () => {
  return (
    <section className="my-14 w-10/12 lg:w-8/12 mx-auto ">
      <Fade direction="down">
        <Title text1={"Latest Products"} />
      </Fade>
    </section>
  );
};

export default LatestProducts;
