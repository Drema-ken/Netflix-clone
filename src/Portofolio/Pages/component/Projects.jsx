import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from './data'

const Projects = () => {
  return (
    <>
            {projects.map(({img,title,details},index)=>{
                return(
                <section key={index} className='border-2 relative border-solid w-full rounded h-[400px] py-5 shadow-sm flex flex-col gap-4 justify-center '>
                    <img src={`src/assets/${img}`} className='max-w-[60px] self-center lg:max-w-[80px] '/>
                    <h1 className='text-3xl font-bold mb-5'>{title}</h1>
                    <p className='font-bold'>{details}</p>
                    <Link className='bg-green-500 w-max m-auto p-3 rounded text-white hover:text-red-400 hover:bg-red-50'><b>GO to &gt;&gt;</b></Link>
                </section>)
            })}
    </>
  )
}

export default Projects
