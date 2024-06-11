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
    stack: [{ name: "Javascript"}, { name: "Tailwind"}, { name: "Next.js"}],
    
  },
]



const Trabalho = () => {
  return <div>trabalho</div>;
};

export default Trabalho;