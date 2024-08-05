import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <header className=' z-10 bg-white shadow-md fixed text-red-400  w-full flex justify-between h-[60px] items-center px-4'>
       <Link to='/'> <h1 className='text-2xl font-bold'>Drema Kennedy</h1></Link>
        <nav className='flex gap-2'>
            <button className='font-bold hidden sm:block'><a href="#projects">Projects</a></button>
            <button className='font-bold hidden sm:block'> <a href='#About'>About me</a></button>
            <Link to='/contact'>
                 <button className='bg-green-400 p-2 rounded-[50px] text-white w-[150px] font-bold  hover:text-green-500 hover:border-2 hover:border-solid hover:border-green-500  hover:bg-white'>Get in touch</button>
            </Link> 
        </nav>
     </header>
  )
}

export default Navbar
