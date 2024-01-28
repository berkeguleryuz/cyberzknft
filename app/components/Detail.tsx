import React from "react";
import Details from "../shared/Details";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";


const Detail = () => {
  return (
    <div className="mt-12 lg:mr-24 lg:px-44 text-center flex flex-col items-center grid-cols-1">

      <h2 className="items-center justify-center self-center text-[20px] font-semibold">{Details.ABOUT_HEADER}.</h2>
      <FiArrowDown className="bg-gray-900 p-3 md:text-2xl sm:text-3xl lg:text-[44px] justify-center self-center rounded-full text-white mt-6" />
      <h2 className="my-5 text-gray-400 text-[14px]">{Details.ABOUT_DESC}</h2>
      <FiArrowUp className="bg-gray-900 p-3 text-[44px] rounded-full text-white" />
      </div>
  );
};

export default Detail;
