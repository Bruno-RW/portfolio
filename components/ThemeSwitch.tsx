"use client";

import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/context/ThemeContext";
import { useMediaQuery } from "@/lib/hooks";


const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    const isMobile = useMediaQuery("(max-width: 640px)");

    return (
        <button className="fixed flex top-5 right-5 items-center justify-center w-[3rem] h-[3rem] bg-opacity-80 border border-white border-opacity-40 rounded-full shadow-2xl bg-white backdrop-blur-[0.5rem] hover:scale-[1.15] active:scale-105 sm:top-auto sm:bottom-5 transition-all dark:bg-gray-950" onClick={toggleTheme}>
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    );
}
export default ThemeSwitch;