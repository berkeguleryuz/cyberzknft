import React from "react";
import Details from "../shared/Details";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";


const Detail = () => {
  return (
    <div className="mt-12 px-44 text-center flex flex-col items-center">
      <h2 className="text-[20px] font-semibold">{Details.ABOUT_HEADER}.</h2>
      <FiArrowDown className="bg-gray-900 p-3 text-[44px] rounded-full text-white mt-6" />
      <h2 className="my-5 text-gray-400 text-[14px]">{Details.ABOUT_DESC}</h2>
      <FiArrowUp className="bg-gray-900 p-3 text-[44px] rounded-full text-white" />
    </div>
  );
};

export default Detail;
