"use client"
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="relative flex flex-col">
      <button onClick={() => setShow(!show)}
        className="p-2 flex items-center justify-center absolute -top-11.5 border border-transparent w-9 left-2 rounded-lg cursor-pointer hover:border-black">
        <img src={`${show ? "/close.svg" : "/menu.svg"}`} alt="" />
      </button>
      <div className={`${show ? "block" : "hidden"} flex flex-col gap-3 overflow-hidden ${show ? "p-2" : "p-0"} rounded-xl`}>
        <Link className="hover:bg-gray-200 rounded-full px-4 py-2"
          onClick={() => setShow(false)} href="/dashboard/">Dashboard</Link>
        <Link className="hover:bg-gray-200 rounded-full px-4 py-2"
          onClick={() => setShow(false)} href="/dashboard/profile">Profile</Link>
        <Link className="hover:bg-gray-200 rounded-full px-4 py-2"
          onClick={() => setShow(false)} href="/dashboard/setting">Setting</Link>
      </div>
    </div >
  )
};

export default SideBar;