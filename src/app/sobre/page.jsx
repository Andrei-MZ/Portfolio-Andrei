"use client"

import {
  FaHtml5,
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaVuejs,
  FaCss3, 
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "Sobre mim",
  description:
  "Olá sou Andrei, um desenvolvedor de software e estudando de Analise e Desenvolvimento de Sistemas com um forte foco em desenvolvimento Frontend. Minha principal especialização é Nextjs, nas quais utilizo meu conhecimento em Javascript para criar aplicações Frontend e diversos tipos de soluções de software. Em minha jornada profissional tive oportunidade de participar de um projeto voluntario, utilizando Nuxt e Sass, mas também tenho experiências em projetos particulares com Next, React e Javascript.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Andrei Zebrowski"
    },
    {
      fieldName: "Telefone",
      fieldValue: "(+51) 9 9917-2556"
    },
    {
      fieldName: "Experiencia",
      fieldValue: "+1 ano"
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível"
    },
    {
      fieldName: "Email",
      fieldValue: "andreimendes8@gmail.com"
    },
    
  ]
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Minhas experiencias',
  description: "No âmbito técnico, meu trabalho atualmente está focado em tecnologias baseadas em JavaScript, e utilizar frameworks de Next.js e React, para o backend estou estudando Node.js.",
  items: [
    {
      company: "Ria Sistemas - Voudoar.ai",
      position: "Desenvolvedor Frontend",
      duration: "2024/04 - Presente"
    },
    {
      company: "Projetos particulares",
      position: "Desenvolvedor Frontend",
      duration: "2024"
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Minha educação",
  description:
  "Desenvolvedor Web e estudante de Análise e Desenvolvimento de Sistemas na Universidade Santa Cruz do Sul (UNISC).",
  items: [
    {
      institution: "Universidade de Santa Cruz do Sul",
      position: "Analise e Desenvolvimento de Sistemas",
      duration: "2024",
    },
    {
      institution: "NodeBR",
      position: "Desenvolvimento de APIs com Node.js",
      duration: "2024",
    },
  ]
};

// skill data
const skills = {
  title: "Minhas habilidades",
  description:
  "Tecnologias que uso e estudo diariamente:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaVuejs />,
      name: "vue",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { 
  Tooltip,
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";


import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
  }}
  className="min-h-[80vh] fle items-center justify-center py-12 xl:py-0"
  >
      <div className="mx-auto container">
        <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-380px mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about me">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

          {/* experiencia */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=> {
                    return (
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* educação */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=> {
                    return (
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                            </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-xs">
                            {item.institution}
                            </p>
                          </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>

          {/* habilidades */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index)=> {
              return (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {skill.icon}
                          </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              )
              })}
            </ul>
            </div>
            </TabsContent>
            
          {/* sobre mim */}
          <TabsContent value="about me" className="w-full text-center xl:text-left">
             <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index)=> {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
             </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
   );
  };
  

export default Sobre;