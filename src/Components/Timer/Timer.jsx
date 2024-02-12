import { FaIndianRupeeSign } from "react-icons/fa6";
const Timer = () => {
  return (
    <div className="h-[50vh] bg-[#131033] p-12">
      <div className="py-10 text-white">
        <h2 className="text-center text-4xl font-bold">Time is running out.</h2>
        <h2 className="text-center text-4xl font-bold">
          Grab your spot <span className="border-b-2">fast</span> !
        </h2>
        <div className="my-12 flex justify-center  gap-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-6xl font-bold mt-2">21</h2>
            <p>Hours</p>
          </div>
          <p className="text-6xl font-bold">:</p>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-6xl font-bold mt-2">15</h2>
            <p>Minutes</p>
          </div>
          <p className="text-6xl font-bold">:</p>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-6xl font-bold mt-2">51</h2>
            <p>Second</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <button className="flex font-semibold  text-[20px] text-[#131033] bg-[#F4B700] py-6 px-10 rounded-md">
            <span>Register now at</span>
            <span className="pl-2 mt-2">
              <FaIndianRupeeSign></FaIndianRupeeSign>
            </span>
            499
            <span className="relative mx-2">
              1999
              <h2 className="-my-4 h-1 bg-[#131033] font-bold text-[#131033]  " > </h2>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
