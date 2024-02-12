import React from "react";

const Timer = () => {
  return (
    <div className="h-[50vh] bg-[#131033] p-12">
      <div className="py-10 text-white">
        <h2 className="text-center text-4xl font-bold">Time is running out</h2>
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
            <h2 className="text-6xl font-bold mt-2">21</h2>
            <p>Minutes</p>
          </div>
          <p className="text-6xl font-bold">:</p>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-6xl font-bold mt-2">21</h2>
            <p>Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
