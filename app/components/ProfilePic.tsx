import Image from "next/image";
import React from "react";

type Props = {};

const ProfilePic = (props: Props) => {
  return (
      <Image
       src="/000.png" 
       alt="User" 
       className="h-screen object-cover rounded-full bg-gray-100 p-3 "
       width={3000}
       height={3000}

    />
  );
};

export default ProfilePic;
