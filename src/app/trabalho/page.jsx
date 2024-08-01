"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from './../../components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "Full stack - Voluntário",
    title: "projeto 1",
    description: "Uma plataforma com IA que conecta doações diretas ás necessidades reais das pessoas afetadas pela crise no RS, onde trabalhei no front-end",
    stack: [{ name: "Nuxt"}, { name: "Sass"}, { name: "Nodejs"},],
    image: "/assets/work/thumb4.png",
    live: "https://voudoar.ai/",
    github: "",
  },
  {
    num: "02",
    category: "Full stack - Dashboard design / em construção",
    title: "projeto 2",
    description: "Uma versão simplificada de um painel financeiro que possui: Uma página inicial, Uma página de login, Páginas de painel proteginas por autenticação, a capacidade dos usuários de adicionar, editar e excluir faturas e também contém um Banco de dados",
    stack: [{ name: "Javascript"}, { name: "Tailwind"}, { name: "Nextjs"}, { name: "React"}, { name: "PostgresSQL"}],
    image: "/assets/work/thumb3.png",
    live: "https://nextjs-dashboard-ayd49za0k-andreis-projects-7241d55b.vercel.app/dashboard",
    github: "https://github.com/Andrei-MZ/nextjs-dashboard",
  },
  {
    num: "03",
    category: "Frontend - Landing Page",
    title: "projeto 3",
    description: "Landing Page simples com animação 3d, interação e responsiva para estudos e noções básicas para landing page",
    stack: [{ name: "Next.js"}, { name: "Tailwind"}],
    image: '/assets/work/thumb1.png',
    live: "https://3d-web-teste.vercel.app/",
    github: "https://github.com/Andrei-MZ/3d-web-teste",
  },
  {
    num: "04",
    category: "Frontend - Challenger Tic Tac Toe",
    title: "project 4",
    description: "Desafio do jogo da velha com React, para estudos de lógica",
    stack: [{ name: "Javascript"}, { name: "Tailwind"}, { name: "React"}],
    image: "/assets/work/thumb2.png",
    live: "https://desafio-jogo-da-velha.vercel.app/",
    github: "https://github.com/Andrei-MZ/desafio-jogo-da-velha",
  },
];



const Trabalho = () => {
  const [project, setProject] = useState(projects[0]);

const handlesSlideChange = (swiper) => {
  //obter o índice de slides atual
  const currentIndex = swiper.activeIndex;
  // atualizar o estado do projeto com base no índice de slides atual
  setProject(projects[currentIndex]);
}

  return <motion.section 
  initial={{ opacity: 0 }} 
  animate={{ 
    opacity: 1, 
    transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} 
  }} 
  className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/* número do esboço */}
            <div className="text-8xl leading-none font-extrabold text-outline">{project.num}</div>
          </div>
          {/* categorias dos projetos */}
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.category}
            </h2>
            {/* descrição dos projetos */}
            <p className="text-white/60">{project.description}</p>
            {/* stacks */}
            <ul className="flex gap-4">
              {project.stack.map((item, index)=>{
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove a ultima virgula */}
                    {index !== project.stack.length - 1 && ","}
                    </li>
                )
              })}
            </ul>
            {/* borda */}
            <div className="border border-white/20"></div>
            {/* botoes */}
            <div className="flex items-center gap-4">
              {/* botao para o projeto deploy */}
              <Link href={project.live} target="_blank">
              <TooltipProvider delayDuration={100}> 
                <Tooltip>
                  <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Projeto deploy</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
              {/* botao para o projeto github */}
              <Link href={project.github} target="_blank">
              <TooltipProvider delayDuration={100}> 
                <Tooltip>
                  <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repositório</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper 
          spaceBetween={30} 
          slidesPerView={1} 
          className="xl:h-[500px] mb-12"
          onSlideChange={handlesSlideChange}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/* sobreposição */}
                  <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                  {/* imagem */}
                  <div className="relative w-full h-full">
                    <Image 
                    src={project.image} 
                    fill 
                    className="object-cover"
                    alt="" />
                  </div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/* botoes de slider */}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
      </div>
    </div>
  </motion.section>;
};

export default Trabalho;