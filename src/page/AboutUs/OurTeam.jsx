import commits_img from "../../assets/image/comits.jpg";
import Title from "../../components/share/Title";
import rana from "../../assets/team/Screenshot 2025-01-25 202112.png";
import Bappi from "../../assets/team/Bappi.jpg";
import Abid from "../../assets/team/rm abid.jpg";
const OurTeam = () => {
  const managementTeams = [
    { name: "Rana", image: rana },
    { name: "Saidul Islam", image: rana },
  ];
  const teams = [
    { name: "Bappi", image: Bappi },
    { name: "RM Abid", image: Abid },
    { name: "Mamun", image: Abid },
  ];
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${commits_img}')` }}
        className=" relative bg-no-repeat bg-center  bg-cover h-[450px]"
      >
        <div className="absolute flex flex-col items-center justify-center  inset-0 text-white bg-[#00000081]  text-center">
          <div className="flex flex-col md:mt-40 md:w-8/12 lg:w-6/12 mt-42 mx-auto justify-center items-center">
            <h1 className="lg:text-8xl md:text-5xl text-4xl font-bold">
              Leadership Team
            </h1>
            <p className="md:text-2xl text-lg my-8 font-medium">
              We have the most sophisticated line-up for our management team to
              deliver the best outcome!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] ">
        <div className="md:w-10/12 lg:w-7/12 py-14 px-8 md:px-0 mx-auto">
          <Title text1={"Senior Management"} />
          <div className="grid my-14 md:grid-cols-2 gap-8">
            {managementTeams?.map((team, index) => (
              <div key={index} className="">
                <img
                  className="w-48 hover:translate-y-[-5px] transition-all duration-500 delay-150 h-48 mx-auto rounded-full border-[8px] border-[#2D3790] -mb-20 object-cover"
                  src={team?.image}
                  alt=""
                />
                <div className="bg-[#202860] h-60 rounded-xl text-white text-center flex justify-center items-center">
                  {team?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white">
          <div className="md:w-10/12 lg:w-7/12 py-14 px-8 md:px-0 mx-auto">
            <Title text1={"Management Team"} />
            <div className="grid my-14 md:grid-cols-2 gap-8">
              {teams?.map((team, index) => (
                <div key={index} className="">
                  <img
                    className="w-48 hover:translate-y-[-5px] transition-all duration-500 delay-150 h-48 mx-auto rounded-full border-[8px] border-[#2D3790] -mb-20 object-cover"
                    src={team?.image}
                    alt=""
                  />
                  <div className="bg-[#202860] h-60 rounded-xl text-white text-center flex justify-center items-center">
                    {team?.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
