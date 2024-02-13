import { FaIndianRupeeSign } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div className="bg-[#1A1646] flex justify-center items-center h-full lg:h-[50vh] p-10">
      <div className="w-full text-white p-8 rounded-md border-2 bg-[#131033] flex flex-col lg:flex-row justify-center items-center">
        <div className=" w-full lg:w-[60%] lg:border-r-2">
          <h2 className="text-3xl font-semibold text-left">
            Crash course Launch Offer (Save INR 1799)
          </h2>
          <ul className="list-disc pl-5 my-10">
            <li> learn the toolkit of the professionals in just 3 hours</li>
            <li>Enjoy the discount price of 499</li>
            <li>The launce offer expires soon,grab your seat NOW</li>
          </ul>
        </div>
        <div className=" w-full lg:w-[40%] px-8">
          <h2 className="text-[20px]">Price of the Program</h2>
          <div className="flex">
            <span>
              <FaIndianRupeeSign className="text-3xl mt-2 text-[#F4B700] font-semibold"></FaIndianRupeeSign>
            </span>
            <span className="mr-2 text-4xl text-[#F4B700] font-semibold">
              499
            </span>
            <span className="">
              1999 <h2 className="-m-8 font-bold ml-2 ">____</h2>{" "}
            </span>
          </div>
          <button className="bg-[#F4B700] py-4 px-8 text-2xl rounded-md font-bold text-[#131033] mt-7">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
