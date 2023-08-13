import {
    BsDiscord, BsTwitter
} from "react-icons/bs";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <div className="w-[90px] bg-white h-screen border-r-2 fixed flex flex-col justify-around items-center mt-[90px]">
            <h2 className="-rotate-90 fetracking-widest text-1xl font-medium">
                MINT&nbsp;IS&nbsp;SOON
            </h2>
            <div className="flex flex-col gap-7 mb-10 text-[20px]">
                <BsDiscord className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
                <BsTwitter className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
            </div>
        </div>
    );
};

export default Sidebar;
