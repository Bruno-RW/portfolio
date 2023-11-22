import React from "react";

import { LuBookMarked, LuGraduationCap } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { FaFolderOpen, FaPencilRuler, FaEnvelope } from "react-icons/fa";

import pfpImg from "@/public/img/pfp.webp";

import cantinhomodaImg from "@/public/img/cantinho-moda.webp";
import ecommerceAdminImg from "@/public/img/ecommerce-admin.png";
import ecommerceStoreImg from "@/public/img/ecommerce-store.png";
import noImg from "@/public/img/noImg.jpg";

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
    title: "E-commerce admin",
    description: 'E-commerce admin following the instructions of "Code With Antonio" on Youtube.',
    tags: ["React", "Next.js", "TypeScript", "Clrek", "Stripe", "Cloudinary", "Zod", "Zustand", "MySQL", "Tailwind", "ShadcnUI", ],
    imageUrl: ecommerceAdminImg,
    url: "https://github.com/Bruno-RW/ecommerce-admin",
  },
  {
    title: "E-commerce store",
    description: 'E-commerce store following the instructions of "Code With Antonio" on Youtube.',
    tags: ["React", "Next.js", "TypeScript", "Clerk", "Stripe", "Cloudinary", "Zod", "Zustand", "MySQL", "Tailwind", "ShadcnUI"],
    imageUrl: ecommerceStoreImg,
    url: "https://github.com/Bruno-RW/ecommerce-store",
  },
  {
    title: "Cantinho Moda Admin",
    description: "Improved admin version of my IT Associate Final Paper (unfinished).",
    tags: ["React", "Next.js", "TypeScript", "NextAuth", "Cloudinary", "Stripe", "Axios", "Zustand", "Prisma","Zod", "PostgreSQL", "Tailwind", "ShadcnUI", "NextUI"],
    imageUrl: noImg,
    url: "https://github.com/Bruno-RW/cantinho-moda-back",
  },
  {
    title: "Cantinho Moda Store",
    description: "Improved store version of my IT Associate Final Paper (unfinished).",
    tags: ["React", "Next.js", "TypeScript", "NextAuth", "Cloudinary", "Stripe", "Axios", "Zustand", "Prisma", "Zod", "PostgreSQL", "Tailwind", "ShadcnUI", "NextUI"],
    imageUrl: noImg,
    url: "https://github.com/Bruno-RW/cantinho-moda-front",
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