import commits_img from "../../assets/image/comits.jpg";
const OurTeam = () => {
  return (
    <div
      style={{ backgroundImage: `url('${commits_img}')` }}
      className=" relative bg-no-repeat bg-center  bg-cover h-[450px]"
    >
      <div className="absolute flex flex-col items-center justify-center  inset-0 text-white bg-[#00000081]  text-center">
        <div className="flex flex-col md:mt-40 md:w-8/12 lg:w-6/12 mt-42 mx-auto justify-center items-center">
          <h1 className="text-8xl font-bold">Our Team</h1>
          <p className="text-2xl my-8 font-medium">
            We have the most sophisticated line-up for our management team to
            deliver the best outcome!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
