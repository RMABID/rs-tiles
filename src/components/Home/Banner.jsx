import banner from "../../assets/image/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${banner}')`,
      }}
      className="relative bg-center bg-cover w-full bg-no-repeat h-screen md:h-[50rem]"
    >
      <div className="absolute inset-0 bg-[#05110456] flex justify-center items-center text-center">
        <div className="text-white p-6">
          <h1 className="text-5xl font-medium uppercase mb-4">
            Serving You Excellence
          </h1>
          <p className="text-lg">
            The premium exquisite collection will effortlessly reflect your
            luxurious living style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
