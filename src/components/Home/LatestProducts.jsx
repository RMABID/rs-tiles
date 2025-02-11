import React from "react";
import Title from "../share/Title";
import { Fade } from "react-awesome-reveal";
import LatestCard from "./LatestCard";

const LatestProducts = () => {
  return (
    <section className="my-8 w-10/12 mx-auto ">
      <Fade direction="down">
        <Title text1={"Latest Products"} />
      </Fade>
      <LatestCard />
    </section>
  );
};

export default LatestProducts;
