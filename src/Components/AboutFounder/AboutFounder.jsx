import image from "../../assets/aboutimg.png";
import { FaArrowCircleRight } from "react-icons/fa";

const AboutFounder = () => {
  return (
    <div className="w-full  bg-[#112225]">
      <div className="max-w-5xl mx-auto bg-white rounded-xl">
        <h2 className="text-5xl font-bold text-center pt-10 mb-3  text-[#26484F] ">
          ABOUT <span className=" text-[#AA9B8A] ">FOUNDEREX</span>
        </h2>
        <p className="text-center">
          The world need your creativity and your ingenuity. Don't put your
          dreams on hold. <br /> Start your founders journey today!
        </p>
        <div className="w-full my-7 p-12 flex justify-center items-center gap-7">
          <img className="w-1/2 rounded-xl" src={image} alt="" />

          <div className="w-1/2 bg-[#EBE9E2] text-[19px] rounded-xl p-4">
            <h2 className="flex justify-around items-start">
              <FaArrowCircleRight className="mt-1 mr-2 text-[#26484F]"></FaArrowCircleRight>
              <p>
                Mastered a
                <span className="font-bold">Structured Approach </span> to build
                a tech venture
              </p>
            </h2>
            <h2 className="flex my-2 justify-around items-start">
              <FaArrowCircleRight className="mt-1 mr-2 text-[#26484F]"></FaArrowCircleRight>
              <p>
                <span className="font-bold">Get coached by </span> indian 1%
                founders, operator and investor.
              </p>
            </h2>
            <h2 className="flex justify-around items-start">
              <FaArrowCircleRight className="mt-1 mr-2 text-[#26484F]"></FaArrowCircleRight>
              <p>
                <span className="font-bold">Learn by doing </span> -works on
                actual start-up ideas in a real world start up team simulation.
              </p>
            </h2>
            <h2 className="flex my-2 justify-around items-start">
              <FaArrowCircleRight className="mt-1 mr-2 text-[#26484F]"></FaArrowCircleRight>
              <p>
                <span className="font-bold">Expend your network </span> in the
                community of like minded parts.
              </p>
            </h2>
            <h2 className="flex justify-around items-start">
              <FaArrowCircleRight className="mt-1 mr-2 text-[#26484F]"></FaArrowCircleRight>
              <p>
                <span className="font-bold">Find your co-founder </span> and
                core team allows the fellows and alumni.
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
