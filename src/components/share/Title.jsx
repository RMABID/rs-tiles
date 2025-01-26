const Title = ({ text1 }) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="md:text-5xl text-3xl flex flex-col justify-center items-center  font-bold text-[#2D3790] ">
        {text1} <span className="w-10/12 bg-[#2D3790] my-4 h-[2px]"></span>
      </h1>
    </section>
  );
};

export default Title;
