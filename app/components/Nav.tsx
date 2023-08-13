"use client";
import Image from "next/image";
import React from "react";

const Nav = () => {
  const menu = [
    {
      id: 1,
      name: "HOME",
      base: "/",
    },
    {
      id: 2,
      name: "TEAM",
      base: "/#team",
    },
    {
      id: 3,
      name: "ROADMAP",
    },
  ];
  return (
    <nav className="flex items-center fixed w-full justify-between border-b-2 bg-white">
      <div className="w-[90px] h-[90px] bg-white">
        <Image
          src="/cyberrose.png"
          className="p-1 rounded-full"
          width={90}
          height={90}
          alt="Logo"
        />
      </div>
      <div className="hidden md:flex gap-14">
        {menu.map((item, index) => (
          <a
            className="cursor-pointer hover:underline font-medium text-black hover:text-gray-600"
            key={index}
            href={item.base}
          >
            <h2>{item.name}</h2>
          </a>
        ))}
      </div>
      <div className="w-[150px] h-[60px] font-semibold bg-black text-white flex justify-center items-center rounded-full mr-5 hover:bg-slate-800">
        Connect Wallet
      </div>
    </nav>
  );
};

export default Nav;
