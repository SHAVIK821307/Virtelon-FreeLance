import React from "react";
import Portfolioimg from "../assets/Portfolio_img.png"
const Portfolio = () => {
  return <section className="bg-zinc-900 px-4 py-4 md:py-12">
  <div className="container mx-auto max-w-6xl">
    {/* Header Section */}
    <div className="mb-16 text-center">
      <div className="mb-8 flex justify-center">
        <img
          src={Portfolioimg}
          alt="Developer illustration"
          
          className="object-contain w-[250px] md:w-[500px]"
        />
      </div>
      <h2 className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
        OUR PORTFOLIO
      </h2>
      <p className="text-2xl font-semibold text-cyan-400 md:text-4xl uppercase mb-4">
      A glimpse into our creative process.
      </p>
      <hr className="border-white" />
    </div>
    <h2 className="mb-2 text-3xl font-bold tracking-normal text-white text-center md:text-4xl">
        DESIGNING PROJECTS
      </h2>
    {/* Services Grid */}
    <div className="grid gap-8 md:grid-cols-2 md:px-12">
      {/* Card */}
      {/* {dataArr.map((data, index) => {
        return (
          <div
            key={index}
            className="relative border-2 border-white bg-transparent px-6 py-16 rounded-[24px] mb-12"
          >
            <div className="flex flex-col items-center h-full justify-between  space-y-4 p-0">
              <div className="absolute top-[-15%]  h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400">
                <img
                  src={data.img}
                  alt="Website Development"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-2xl font-bold text-cyan-400 md:text-2xl">
                {data.topic1}
                <br />
                {data.topic2}
              </h3>
              <p className="text-center text-white">{data.desc}</p>
              <button
                variant="outline"
                className="bg-[#40E0D0] hover:bg-[#3BC9BA] text-black font-semibold px-6 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        );
      })} */}
    </div>
  </div>
</section>;
};

export default Portfolio;
