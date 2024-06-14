"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "projeto 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ratione.",
    stack: [{ name: "Next.js"}, { name: "Tailwind"}],
    image: "/assets/work/3d-projeto-web.png",
    live: "",
    github: "",
  },
  {
    num: "01",
    category: "frontend",
    title: "projeto 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ratione.",
    stack: [{ name: "Javascript"}, { name: "Tailwind"}, { name: "Next.js"}],
    image: "/assets/work/3d-projeto-web.png",
    live: "",
    github: "",
  },
];



const Trabalho = () => {
  const [project, setProject] = useState(projects[0]);
  return <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div>
            {/* número do esboço */}
            <div className="text-8xl leading-none font-extrabold text-outline">{project.num}</div>
          </div>
          {/* categorias dos projetos */}
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.category} projeto
            </h2>
            {/* descrição dos projetos */}
            <p className="text-white/60">{project.description}</p>
            {/* stacks */}
            <ul className="flex gap-4">
              {project.stack.map((item, index)=>{
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                    </li>
                )
              })}
            </ul>
        </div>
        <div className="w-full xl:w-[50%]">slider</div>
      </div>
    </div>
  </motion.section>;
};

export default Trabalho;