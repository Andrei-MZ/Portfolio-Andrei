"use client"

import {
  FaHtml5,
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaVue,
  FaCss3, 
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "Sobre mim",
  description:
  "okgopdfkgopkdogpkdfpogopdfkgpodfgodfopgkdpfgkpodfkgpodfkgpokdfgpokdfogkdfopgdf.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Andrei Zebrowski"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+51) 9 9917-2556"
    },
    {
      fieldName: "Experience",
      fieldValue: "+1 ano"
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro"
    },
    {
      fieldName: "Email",
      fieldValue: "andreimendes8@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível"
    },
  ]
};


// experience data
const experience = {
  icon: ''
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
  "sodfjopsdkfoskdfposdkfposdfopksdofsdfkopsdfkopsdf",
  items: [
    {
      institution: "Universidade de Santa Cruz do Sul",
      position: "Estudante",
      duration: "2024",
    },
    {
      institution: "NodeBR",
      position: "Imersão em desenvolvimento de APIs com Node.js",
      duration: "2024",
    },
  ]
};

// skill data
const skills = {
  title: "My skills",
  description:
  "psdlfgpsdflgpdflgpldfpgdfpgpdfglpdflgpdlfgpdflpgd",
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
      icon: <FaVue />,
      name: "Vue",
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

  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    sobre
    </motion.div>
   );
  };
  

export default Sobre;