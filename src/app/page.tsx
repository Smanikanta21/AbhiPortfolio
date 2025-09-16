"use client"
import { cn } from "@/lib/utils";
import { Meteors } from '../components/ui/meteors'
import { PixelImage } from "../components/ui/pixel-image"
import { FiGithub } from "react-icons/fi";
import { BoxReveal } from "../components/ui/box-reveal";
import { DotPattern } from '../components/ui/dot-pattern'


export default function Landing() {
  return (
    <>
      <nav className='fixed bg-transparent bottom-6 w-full flex justify-center items-center z-50'>
        <div className='text-white backdrop-blur-md flex justify-center items-center gap-3 border border-white/50 py-4 px-6 rounded-4xl hover:scale-105 ease-in duration-180 hover:px-8'>
          <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>Home</a>
          <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>About</a>
          <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>Skills</a>
          <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>Projects</a>
          <a href='#' className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:text-shadow-2xs shadow-white'>Contact Me</a>
          <div><FiGithub size={32} className='font-light hover:font-medium transition-all ease-in-out duration-250 hover:scale-125 hover:cursor-pointer text-white hover:bg-white/15 p-2 rounded-xl ' /></div>
          <div></div>
        </div>
      </nav>


      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern height={32} width={32} glow={true} className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )} />
        <div className="bg-black flex justify-center items-center h-screen">
          <Meteors />
          <div className='relative'>
            <h1
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-tr from-gray-300 to-gray-500 bg-clip-text text-center text-6xl md:text-8xl font-bold leading-none text-transparent"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Abhinay Siraparapu
            </h1>

          </div>
          <div className="z-50 absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent blur-sm"></div>
        </div>
      </div>

      <div className='w-full h-screen flex flex-col md:p-8'>
        <div className='flex  w-full items-center justify-center'><h1 className='text-3xl md:text-6xl font-bold font-stretch-110% my-4'>About Me</h1></div>
        <div className="m-2 md:m-6 md:p-6 flex flex-col md:flex-row items-center justify-center gap-22">
          <div className="flex-shrink-0">
            <PixelImage src="/images/profile.png" />
          </div>
          <div className='flex flex-col gap-6'>
            <div className="max-w-md px-4 py-2 shadow-2xl shadow-white/35 hover:scale-105 ease-in-out duration-300 rounded-xl">
              <div className="space-y-1">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p
                    className="leading-relaxed text-white text-xl text-left"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Hi, I&apos;m <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: '600', color: '#D1D5DB' }}>Abhinay Siraparapu</span>, a passionate developer...
                  </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="leading-relaxed text-white text-xl text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
                    building creative and dynamic web applications.
                  </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="leading-relaxed text-white text-xl text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
                    I enjoy exploring new technologies and crafting visually appealing,
                  </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="leading-relaxed text-white text-xl text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {"user‑friendly"} experiences.
                  </p>
                </BoxReveal>
              </div>
            </div>
            <div className='flex flex-row justify-evenly'>
              <div style={{ fontFamily: "'Roboto Mono', monospace" }} className="border border-white/40 px-4 py-2 rounded-xl text-center">
                5.6 CGPA
              </div>
              <div className='border border-white/40 px-4 py-2 rounded-xl text-center' style={{ fontFamily: "'Roboto Mono', monospace" }} >
                <h2>0</h2>
                <p>Projects</p>
              </div>
              <div className='border border-white/40 px-4 py-2 rounded-xl text-center' style={{ fontFamily: "'Roboto Mono', monospace" }} >
                <h2>2+</h2>
                <p>Years of coding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}