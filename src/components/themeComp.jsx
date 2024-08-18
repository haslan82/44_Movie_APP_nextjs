"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeComp = () => {
    const [mounted, setMounted] = useState(false);
    const {systemTheme,theme, setTheme} = useTheme();

useEffect(()=> {
    setMounted(true)
}, [])

const themeMode = theme ==="system" ? systemTheme : theme
//! console.log(themeMode, "themeMode")
  return (
    <div>
        {
            mounted && (
                themeMode === "light" ?
                <MdDarkMode onClick={()=> setTheme ("dark")} size={25} className='cursor-pointer'/> :
                 <MdOutlineLightMode onClick={()=> setTheme ("light")} size={25} className='cursor-pointer'/>
            )
        }
     
    </div>
  )
}

export default ThemeComp
