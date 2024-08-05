import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
   <div className='w-full h-screen flex flex-col items-center bg-gradient-to-tr from-green-300'>
   <section className=' h-[550px] m-auto rounded p-7 border-2 border-solid border-red-500'>
        <h1 className='font-bold text-5xl text-green-600'>Contact Details</h1>
        <div>
            <img src='' alt="" />
            <h1>Drema_Ken</h1>
        </div>
        <div>
            <img src='' alt="" />
            <h1>idiongomfonkennedy@gmail.com</h1>
        </div>
        <div>
            <img src='' alt="" />
            <h1>Drema Kennedy</h1>
        </div>
   </section>
   <Link to='/'>
        <button className=' font-bold text-white p-2 bg-red-500 rounded-md mb-4 ml-3 hover:bg-white hover:text-red-500'>&lt;&lt; Home</button>
   </Link>
   </div>
  )
}

export default Contact
