import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./menuItem";
import ThemeComp from "./themeComp";


const Header = () => {
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
  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div className="bg-amber-600 rounded-lg  p-3 text-2xl font-bold">
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          placeholder="Arama yapınız..."
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        </div>
        <BiSearch size={25} />
        <div className="flex items-center gap-5">
            <ThemeComp/>
           
          {menu.map((mn, i) => (
            <MenuItem mn={mn} key={i} />
          ))}
        </div>
      
    </div>
  );
};

export default Header;
