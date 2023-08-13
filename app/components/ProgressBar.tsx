"use client";
import React, { useEffect, useState } from "react";

type Props = {};

function ProgressBar() {

    const [scrollTop,setScrollTop]=useState<any>();
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return ()=>window.removeEventListener("scroll",onScroll);
    },[])

    const onScroll=()=>{
        const winScroll=document.documentElement.scrollTop;

        const height=document.documentElement.scrollHeight-
                    document.documentElement.clientHeight

        const scrolled=(winScroll/height)*100;
        
        setScrollTop(scrolled)
    }
  return (
    <div className='w-1.5 bg-gray-200 fixed ml-[-5px] h-full mb-4'>
        <div className='bg-gray-600 transition-all ease-out duration-1000' style={{height:`${scrollTop}%`}} />
    </div>
  )
}

export default ProgressBar;
