"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
// import { useMediaQuery } from "react-responsive";

import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  // const is mobile =useMediaQuery({query: "(max-width: 768px)"});

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full h-[4.5rem] border border-white border-opacity-40 rounded-t-xl bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03] sm:top-6 sm:w-[36rem] sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0,    x: "-50%", opacity: 1 }}
      />
      <nav className="flex fixed bottom-[1.45rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:py-0">
        <ul className="flex flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-500 w-[22rem] gap-y-2 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map(link => (
            <motion.li className="flex relative items-center justify-center h-3/4"
              key={link.hash} 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>

              <Link className={clsx("flex items-center justify-center w-full px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300", {"text-gray-950 dark:text-gray-200": activeSection === link.name})}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now());
                }}
              >
                {/* {isMobile ? link.icon : link.name} */}
                {link.name}

                {link.name === activeSection && (
                  <motion.span className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    layoutId="activeSection" transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;