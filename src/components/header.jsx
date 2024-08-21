"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./menuItem";
import ThemeComp from "./themeComp";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];
  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div className=" cursor-pointer bg-amber-600 rounded-lg  p-3 text-2xl font-bold">
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Arama yapınız..."
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch size={25} />
      </div>

      <div className="flex items-center gap-5 bg-amber-600 rounded p-1">
        <ThemeComp />

        {menu.map((mn, i) => (
          <MenuItem mn={mn} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Header;
