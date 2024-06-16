"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue, } from "@radix-ui/react-select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    Description: "(+051) 9 9917-2556",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "andreimendes8@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Endereço",
    Description: "Santa Cruz do Sul, RS",
  },
];

import { motion } from "framer-motion";

const Contato = () => {
  return <motion.section 
  initial={{ opacity: 0}} 
  animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
}}
 className="py-6"
>
  <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-[30px]">
      {/* forma */}
      <div className="xl:h-[54px] order-2 xl:order-none">
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
          <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
          <p className="text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam atque sit, accusamus excepturi similique suscipit aut animi ipsa soluta placeat ipsam blanditiis. Quam provident doloribus perspiciatis illo, deserunt sequi voluptatum?
          </p>
          {/* Input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="firstname" placeholder="Nome"/>
            <Input type="lastname" placeholder="Sobrenome"/>
            <Input type="email" placeholder="Email"/>
            <Input type="phone" placeholder="Numero Telefone"/>
          </div>
          </form>
      </div>
      {/* info */}
      <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
    </div>
  </div>
  </motion.section>;
};

export default Contato;