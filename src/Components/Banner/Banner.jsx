import { SlCalender } from "react-icons/sl";
import { CiTimer } from "react-icons/ci";
import { LuTimerReset } from "react-icons/lu";
import { FaIndianRupeeSign } from "react-icons/fa6";
import pic from "../../assets/free-photo.webp"
const Banner = () => {
  return (
    <div className="w-full p-10 h-full lg:h-[80vh] bg-[#1A1646] text-white">
      <h2 className="text-2xl p-5 lg:pl-14 font-semibold">Growth School</h2>

      <div className="w-full flex pl-2 lg:pl-14 mt-20 flex-col-reverse lg:flex-row ">
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-bold">
            Discover a Consultant <br /> Approach to Problem <br /> Solving
          </h2>
          <p className="mt-3">
            learn the proven approach used by top strategy consultant to tackle
            <br /> complex business challenges effectively.Solve an MRB case
            study LIVE <br /> with Ashwin to understand the concept hands-on.
          </p>
          <div className="flex justify-around items-start gap-4 mt-6">
            <div className="border-2 flex flex-col justify-center rounded-md items-center py-7 px-7">
              <SlCalender className="text-xl"></SlCalender>
              <p className="mt-2 text-xl">3rd March</p>
            </div>
            <div className="border-2 flex flex-col justify-center rounded-md items-center py-7 px-7">
              <CiTimer className="text-xl"></CiTimer>
              <p className="mt-2 text-xl">1pm Onwards</p>
            </div>
            <div className="border-2 flex flex-col justify-center rounded-md items-center py-7 px-7">
              <LuTimerReset className="text-xl"></LuTimerReset>
              <p className="mt-2 text-xl">2.5 hours</p>
            </div>
          </div>
          {/* button */}
          <div className="flex mt-7 px-4 justify-center items-center w-full">
            <button className="flex font-semibold  w-full text-[20px] text-[#131033] bg-[#F4B700] py-6 px-10 rounded-md">
              <span>Register now at</span>
              <span className="pl-2 mt-2">
                <FaIndianRupeeSign></FaIndianRupeeSign>
              </span>
              499
              <span className="relative mx-2">
                1999
                <h2 className="-my-4 h-1 bg-[#131033] font-bold text-[#131033]  ">
                  {" "}
                </h2>
              </span>
            </button>
          </div>
          <p className="text-center underline mt-4">
            Click here to get discount
          </p>
        </div>
        <div className=" w-full mt-5 order-1 lg:w-1/2 lg:pl-8">
          <img className="rounded-md h-[400px] w-[520px]" src={pic} alt="" />
          <h3 className="flex items-center w-full">
            <span className="flex-grow bg-gray-200 rounded h-1" />
            <button className="mx-3 text-md mt-2 font-medium  border-2 px-6 py-0.5 rounded-md hover:bg-gray-200">
              Instructed by
            </button>
            <span className="flex-grow bg-gray-200 rounded h-1" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
