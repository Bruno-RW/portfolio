import React from "react";

import { LuBookMarked, LuGraduationCap } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { FaFolderOpen, FaPencilRuler, FaEnvelope } from "react-icons/fa";

import pfpImg from "@/public/img/pfp.webp";

import cantinhomodaImg from "@/public/img/cantinho-moda.webp";
import rmtdevImg from "@/public/img/rmtdev.png";
import wordanalyticsImg from "@/public/img/wordanalytics.png";

export const profilePicture = pfpImg;

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(AiFillHome, {size: 22})
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(BsFillInfoCircleFill, {size: 20})
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(FaFolderOpen, {size: 22})
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(FaPencilRuler, {size: 20})
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(BsFillBriefcaseFill, {size: 22})
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(FaEnvelope, {size: 22})
  },
] as const;

export const educationData = [
  {
    title: "IT Associate",
    institution: "Centro Tecnológico Frederico JorgeLogemann (CFJL)",
    description: "Description Description Description Description Description Description Description Description Description Description",
    icon: React.createElement(LuBookMarked),
    date: "2022 - 2023",
  },
  {
    title: "Computer Science",
    institution: "Universidade Regional do Noroeste do Estadodo Rio Grande do Sul (UNIJUÍ)",
    description: "Description Description Description Description Description Description Description Description Description Description",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2027",
  },
] as const;

export const projectsData = [
  {
    title: "Cantinho da Moda",
    description: "Project for my IT Associate Final Paper, where I created the front and backend for product catalog and information managment website.",
    tags: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Bootstrap"],
    imageUrl: cantinhomodaImg,
    url: "https://github.com/Bruno-RW/cantinho_moda",
  },
  {
    title: "Spotify Clone",
    description: 'Spotify clone project following the instructions of "Code With Antonio" on Youtube.',
    tags: ["React", "Next.js", "TypeScript", "Supabase", "Stripe", "Zustand", "PostgreSQL", "Tailwind", "Radix"],
    imageUrl: rmtdevImg,
    url: "https://github.com/Bruno-RW/spotify-clone",
  },
  {
    title: "TypeScript Video Game",
    description: "A RPG clicker game made in cooperation with my college colleague, Pedro Henrique Kalschne.",
    tags: ["TypeScript", "Python", "HTML", "CSS", "MySQL", "Tailwind"],
    imageUrl: wordanalyticsImg,
    url: "https://github.com/Bruno-RW/jogo-ts",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "Framer Motion",
] as const;
