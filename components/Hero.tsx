import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Litup from './ui/Lit-up-borders'
import { FaFacebook, FaLocationArrow } from 'react-icons/fa'
import { Fa1, FaBriefcase, FaTicket } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 overflow-hidden '>
    <div>
        <Spotlight className='-top-40 -left-20 md:-left-32 md:-top-20 h-screen w-screen'fill='white' />
        <Spotlight className='-top-20 right- md:-left-32 md:-top-20 w-screen 'fill='purple' />

        <Spotlight className='top-10 right-50 h-[80vh] w-[50vw] "  'fill='blue' />
        {/* <Spotlight className='top-10 center h-[90vh]  'fill='purple' /> */}
        <Spotlight className='top-10 mr-120 h-[60vh] w-[60vw]' fill='purple' />


        <Spotlight className='-top-20 left-1/3 h-[50vh] w-[70vw] rotate-45 'fill='blue' />
        <Spotlight className='-top-20 left-1/2 h-[80vh] w-[90vw]  'fill='white' />
        <Spotlight className='-top-30 left-1/2 h-[70vh] w-[60vw]  'fill='purple' />
        {/* <Spotlight className='top-40 left-3/4 h-[40vh] w-[20vw]  'fill='purple' /> */}
        <Spotlight className='top-90 left-1/4 h-[70vh] w-[50vw]  'fill='blue' />


        <Spotlight className='-top-10 left-25 h-[30vh] w-[50vw]  'fill='blue' />

      </div>
        <div className="h-screen  w-full dark:bg-black-100 bg-white  
        dark:bg-grid-white/[0.03] bg-grid-black/[0.1]  flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center 
      justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/> 
    </div>
    <div className='flex justify-center relative my-32 z-10'>
      <div className='max-w-[89vw'>
        <h2 className='uppercase tracking-widest text-xs text-center md:text-xs text-blue-100'>
          
          Dynamic WebPages created with React
        </h2>
        <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words= "Work with Passion, Create with Ambition."
         ></TextGenerateEffect>
        <p className='uppercase mt-5 text-[10px] tracking-widest text-l text-center md:text-xl text-blue-100'>Hi! I'm Adrian, Engineer and Next.js Developer based in Poland</p>
        <a href="#about">
            <Litup 
            title = "Show my work"
            icon={<FaBriefcase />}
            position='right'
            />
        </a>
        
    </div>
      
      </div>
      </div>

    
  )
}

export default Hero