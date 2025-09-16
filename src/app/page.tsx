"use client"
import { Meteors } from '../components/ui/meteors'
import { Home, Settings, Search } from "lucide-react";
import { FiGithub } from "react-icons/fi";


export default function Landing() {
  return (
  <>
  <div className="relative overflow-hidden h-screen w-full bg-black flex justify-center items-center">
    <Meteors />
    <div className='relative'>
      <h1 className='md:text-8xl text-center font-bold font-stretch-140% text-white'>Abhinay Siraparapu</h1>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent blur-sm"></div>
    </div>
  </div>

  <nav className='fixed bottom-6 w-full flex justify-center items-center z-50'>
    <div className='text-white flex justify-center items-center gap-3 border border-white/50 py-4 px-6 rounded-4xl hover:scale-105 ease-in duration-180 hover:px-8'>
      <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>Home</a>
      <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>About</a>
      <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>Skills</a>
      <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>Projects</a>
      <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>Contact Me</a>
      <div className='border-1 border-white/60 py-4 mx-2'></div>
      <div><FiGithub size={32} className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:cursor-pointer text-white hover:bg-white/15 p-2 rounded-xl '/></div>
      <div></div>
    </div>
    
  </nav>
</>
  );
}