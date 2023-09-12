"use client";

import React from "react";

import { useTheme } from "@/context/ThemeContext";
import { useSectionInView } from "@/lib/hooks";
import { educationData } from "@/lib/data";

import SectionTitle from "./SectionTitle";

const Experience = () => {
    const { theme } = useTheme(); 
    const { ref } = useSectionInView("Education");

    return (
        <section id="education" className="mb-28 scroll-mt-28 sm:mb-40" ref={ref}>
            <SectionTitle>My Experience</SectionTitle>

            <div>
                Currently looking for my first job as a developer.
            </div>
        </section>
    );
}
export default Experience;