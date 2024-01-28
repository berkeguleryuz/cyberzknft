import Image from "next/image";
import React from "react";

type Props = {};

const Team = (props: Props) => {
  const teamlist = [
    {
      title: "Developer",
      name: "Cyber",
      logo: "/altbg3.png",
    },
    {
      title: "Management",
      name: "Staryum",
      logo: "/altbg2.png",
    },
    {
        title: "Partnership",
        name: "Explorer",
      logo: "/altbg1.png",
    },
    {
        title: "Developer",
        name: "Omegayon",
        logo: "/altbg00.png",
      },
  ];

  return (
    <div id="team" className="px-12 mt-12">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-gray-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] font-bold">TEAM</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-gray-600 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-4 lg:grid-cols-2 justify-around mt-10 gap-5">
        {teamlist.map((item, index) => (
          <div
            className="text-center flex flex-col justify-center items-center
                gap-6"
                key={index}
          >
            <div className="bg-gray-200 rounded-full flex-1">
              <Image
                src={item.logo}
                alt="Avatar"
                width={300}
                height={300}
                className="p-5 hover:scale-110 transition-all cursor-pointer rounded-full"
                key={item.title}
              />
            </div>
            <h2 className="mt-5 font-bold">{item.name}</h2>
            <h2 className="text-gray-400">{item.title}</h2>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Team;
