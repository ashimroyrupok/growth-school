import { useEffect, useRef, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
const Timer = () => {

  const [timer,setTimer] = useState("00:00:00");
  const Ref = useRef();
  const [minute,setMinute]=useState('00')
  const [scnd,setScnd] = useState("00")

 
  const getRemainging = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { total, hour, minutes, seconds };
  };



  const startTimer = (e) => {
    let { total, hour, minutes, seconds } = getRemainging(e);
    if (total >= 0) {
      setTimer(
        `${hour > 9 ? hour : "0" + hour}:${
          minutes > 9 ? minutes : "0" + minutes
        }:${seconds > 9 ? seconds : "0" + seconds}`
      );
      setMinute(`${minutes > 9 ? minutes : "0" + minutes}`);
      setScnd(`${seconds > 9 ? seconds : "0" + seconds}`);
    }
  };



  const clearTimer = (e) => {
    setTimer("00:00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };



  const getDeadTime =()=>{
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 600);
    return deadline;
  }

  const reset = ()=>{
    clearTimer(getDeadTime());
  }

  useEffect(()=>{
    clearTimer(getDeadTime())
  },[])

  // console.log(timer);


  return (
    <div className=" w-full lg:h-[50vh] bg-[#131033] p-12">
      <div className="py-10 text-white">
        <h2 className="text-center text-4xl font-bold">Time is running out.</h2>
        <h2 className="text-center text-4xl font-bold">
          Grab your spot  <span className="border-b-2">fast</span> !
        </h2>
        <div className="my-12 flex justify-center  gap-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-6xl font-bold mt-2">00</h2>
            <p>Hours</p>
          </div>
          <p className="text-6xl font-bold">:</p>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-6xl font-bold mt-2"> {minute} </h2>
            <p>Minutes</p>
          </div>
          <p className="text-6xl font-bold">:</p>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-6xl font-bold mt-2"> {scnd} </h2>
            <p>Second</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <button onClick={reset} className="flex font-semibold  text-[20px] text-[#131033] bg-[#F4B700] py-6 px-10 rounded-md">
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
