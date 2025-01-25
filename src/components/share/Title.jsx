const Title = ({ text1 }) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-5xl flex flex-col justify-center items-center  font-bold text-[#2D3790] ">
        {text1} <span className="w-40 bg-[#2D3790] my-3 h-[2px]"></span>
      </h1>
    </section>
  );
};

export default Title;
