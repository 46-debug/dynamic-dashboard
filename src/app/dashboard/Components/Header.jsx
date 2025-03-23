"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {

  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);

  const router = useRouter();

  const onLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    router.push("/");
  }

  return (
    <div className="flex items-center justify-end gap-10 bg-gray-200 py-2 px-3 rounded-xl">
      <h4 className="text-lg">Hi, <span className="text-blue-700">{name}</span></h4>
      <button onClick={onLogOut}
        className="px-2 py-1 rounded-lg text-red-500 cursor-pointer hover:bg-black hover:text-white">
        Logout
      </button>
    </div>
  );
};

export default Header;
