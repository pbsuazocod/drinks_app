import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="h-screen w-screen relative bg-gray-300 flex items-center flex-col">
      <div className="h-[80px] w-[80px] bg-red-300 absolute top-[2%] right-[8%] lg:right-[30%]">
        Sound
      </div>
      <div className="bg-gray-600 h-full w-full justify-between flex flex-col items-center lg:max-w-[50%] pt-[2%]">
        <div className=" h-[100px] w-[100px] flex flex-col justify-center items-center rounded-full bg-red-300">
          Logo
        </div>

        <Link
          to="/register"
          className="w-[200px] h-[100px] rounded-lg bg-red-300 flex items-center justify-center"
        >
          {" "}
          i'm a button{" "}
        </Link>
        <div className="bg-gray-200  w-11/12  rounded-sm  ">Sticky footer</div>
      </div>
    </div>
  );
}

export default LandingPage;
