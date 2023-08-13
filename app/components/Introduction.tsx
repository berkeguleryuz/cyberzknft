import Image from "next/image";
import React from "react";

function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[120px] border-r-[1px] mt-[-20px]" />
      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
      <h2 className="mt-5 text-black font-medium text-[13px] tracking-widest">HELLO! WE ARE</h2>
      <h1 className="text-[70px] font-bold text-black tracking-widest mt-5">CYBER</h1>
      <h3 className="text-[70px] font-bold text-black tracking-widest mt-0">ROSE</h3>
      <Image 
        src="/bg.jpeg" 
        className="bg-gray-200 p-3 rounded-full"
        width={200}
        height={200}
        alt="Avatar"
      />
      <div className="justify-between gap-5 hidden md:flex">
      <Image 
        src="/bg2.png" 
        className="bg-gray-200 p-3 rounded-full"
        width={200}
        height={200}
        alt="Avatar"
      />
            <Image 
        src="/bg3.png" 
        className="bg-gray-200 p-3 rounded-full"
        width={200}
        height={200}
        alt="Avatar"
      />
      </div>
    </div>
  );
}

export default Introduction;
