import commits_img from "../../assets/image/comits.jpg";
import Title from "../../components/share/Title";
import rana from "../../assets/team/Screenshot 2025-01-25 202112.png";
const OurTeam = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${commits_img}')` }}
        className=" relative bg-no-repeat bg-center  bg-cover h-[450px]"
      >
        <div className="absolute flex flex-col items-center justify-center  inset-0 text-white bg-[#00000081]  text-center">
          <div className="flex flex-col md:mt-40 md:w-8/12 lg:w-6/12 mt-42 mx-auto justify-center items-center">
            <h1 className="text-8xl font-bold">Leadership Team</h1>
            <p className="text-2xl my-8 font-medium">
              We have the most sophisticated line-up for our management team to
              deliver the best outcome!
            </p>
          </div>
        </div>
      </div>
      <div className="w-10/12 my-14 mx-auto">
        <Title text1={"Senior Management"} />
        <div className="grid my-14 grid-cols-2 gap-8">
          <div className="">
            <img
              className="w-48 mx-auto rounded-full border-[8px] border-[#2D3790] -mb-20 object-cover"
              src={rana}
              alt=""
            />
            <div className="bg-[#202860] h-60 rounded-xl text-white text-center flex justify-center items-center">
              Rana
            </div>
          </div>
          <div className="">
            <img
              className="w-48 mx-auto rounded-full border-[8px] border-[#2D3790] -mb-20 object-cover"
              src={rana}
              alt=""
            />
            <div className="bg-[#202860] h-60 rounded-xl text-white text-center flex justify-center items-center">
              Rana
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
