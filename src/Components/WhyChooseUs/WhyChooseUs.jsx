import { GiNetworkBars, GiNotebook, GiThink } from "react-icons/gi";
import { PiNotePencilDuotone } from "react-icons/pi";
import { GiBookCover } from "react-icons/gi";
const WhyChooseUs = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <h2 className="text-center text-[#EE5417] text-5xl font-bold">But,</h2>
      <p className="font-bold text-4xl mb-9 text-center">
        why should you become a mindful marketer?
      </p>
      <div className="my-5 flex justify-center  flex-wrap items-end gap-3">
        <div className="   w-1/4 text-center ">
          <h2 className="text-center flex justify-center  items-center  ">
            <GiNotebook className="text-8xl "></GiNotebook>
          </h2>
          <p className="text-center my-2  text-[20px]">
            Learn to look at the challenges <br /> through a different lens
          </p>
        </div>
        <div className="   w-1/4 text-center ">
          <h2 className="text-center flex justify-center  items-center  ">
            <PiNotePencilDuotone className="text-8xl "></PiNotePencilDuotone>
          </h2>
          <p className="text-center my-2 text-[20px]">
            Develop a big understanding <br /> of modern marketing
          </p>
        </div>
        <div className="   w-1/4 text-center ">
          <h2 className="text-center flex justify-center  items-center  ">
            <GiBookCover className="text-8xl "></GiBookCover>
          </h2>
          <p className="text-center my-2 text-[20px]">
            Understand time tested <br /> Principal
          </p>
        </div>
        <div className="   w-1/4 text-center ">
          <h2 className="text-center flex justify-center  items-center  ">
            <GiNetworkBars className="text-8xl "></GiNetworkBars>
          </h2>
          <p className="text-center my-2 text-[20px]">
            Become a strategic thinker <br /> without trend-surfing
          </p>
        </div>
        <div className="   w-1/4 text-center ">
          <h2 className="text-center flex justify-center  items-center  ">
            <GiThink className="text-8xl "></GiThink>
          </h2>
          <p className="text-center my-2 text-[20px]">
            Incorporate and creative & <br /> innovative  thought process </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
