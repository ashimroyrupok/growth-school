import  { useEffect, useState } from "react";

const Form = () => {
  const [show,SetShow]=useState(false)

    useEffect(() => {
      // Show the modal after 10 seconds
      const timeoutId = setTimeout(() => {
        SetShow(true);
      }, 15000);

      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }, []);

  return (
    <div>
      {show &&
      (
        <div className="h-full absolute top-[50%] left-[2%]">
          <div className="max-w-[420px]  ml-10  py-6 px-8 h-[420px] mt-20 bg-[#F2E4D2] rounded shadow-xl">
            <h2 onClick={()=> SetShow(false)} className="text-right font-bold text-3xl">X</h2>
            <h2 className="text-center text-4xl font-semibold ">
              FLAT 15% OFF
            </h2>
            <p className="text-center">
              Enter your details and win a coupon <br /> worth 15% off
            </p>
            <form action="">
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your phone"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
                <button className="cursor-pointer py-2 px-4 block mt-6 bg-[#EF6834] text-white font-bold w-full text-center rounded">
                  Show me a coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
