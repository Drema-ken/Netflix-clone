import React from 'react'
import { data } from './data'

const About = () => {

    
  return (
    <section  id='About' className='h-full pt-6  '>
        <div className='font-bold text-center'>
            <p className='lg:text-3xl border-solid border-t-red-700 border-'>Want to know more?</p>
            <h1 className='lg:text-6xl'>A bit <span className='text-green-400'>about</span> me.</h1>
        </div>
        <p className='text-center font-bold lg:text-3xl mt-4'>I am...</p>

        <section className='py-9 flex flex-col gap-6'>
            {data.map(({details,title},index)=>{
                return(
            <div key={index}>
                <div className='flex gap-5 justify-center'>
                    <p className='text-3xl lg:text-7xl font-bold text-green-500'>0{index+1}</p>
                    <h1 className=' text-2xl lg:text-4xl self-center'>{title}</h1>
                </div>
                <p className='text-left font-bold sm:text-center lg:text-left px-3  lg:text-lg text-green-500 m-auto h-[90px] overflow-ellipsis overflow-clip py-4 lg:h-full  w-[400px] sm:w-[600px]'>{details}</p>
            </div>)
            })}
            
        </section>
    </section>
  )
}

export default About
