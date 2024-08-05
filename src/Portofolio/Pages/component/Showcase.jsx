import React from 'react'
import Projects from './Projects'

const Showcase = () => {
  return (
     <section id='projects' className='text-center lg:h-screen w-full bg-white flex flex-col justify-center pb-4'>
        <p className='text-[23px] mt-[100px] lg:mt-[16px]'>A few of my creative endeavors.</p>
        <h1 className='font-bold text-xl lg:text-5xl mb-8'>Curious to <span className='text-green-400'>see</span> my work?</h1>
        <section className='flex flex-col gap-2 w-full px-6 sm:flex-row lg:gap-4  lg:flex-nowrap mt-[30px]'>
          <Projects/>
        </section>
     </section>
  )
}

export default Showcase
