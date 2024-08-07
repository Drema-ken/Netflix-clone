import React from 'react'
import { Link } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

const Navbar = () => {
   const {user,logout} = userAuth();
   
  return (
     <header className='absolute w-full top-0 left-0 z-10 bg-transparent flex justify-between items-center px-3 h-[70px]'>
      <Link to='/'>
         <h1 className='text-red-700 uppercase font-extrabold text-4xl z-10'>Netflix</h1>
      </Link>
         <div className='flex gap-4'>
            {user?.email ? 
               <>
                  <Link to='/profile'>
                    <button className='border-solid border-1 text-lg text-white p-2 rounded-lg w-full cursor-pointer hover:text-red-700 h-full'>Profile</button>
                  </Link>
                  
                     <button className='bg-red-700 p-3  rounded-lg text-white font-semibold w-full hover:bg-white h-full hover:text-red-700' onClick={()=>{logout()}}>Logout</button>
                  
               </>:
               <>
                  <Link to='/login'>
                     <button className='border-solid border-1 text-lg text-white p-2 rounded-lg w-full cursor-pointer hover:text-red-700'>Login</button>
                  </Link>
                  <Link to='/signup'>
                     <button className='bg-red-700 px-4 rounded-lg text-white font-semibold h-full hover:bg-white hover:text-red-700'>Signup</button>
                  </Link>
               </>
            
            }
         </div>
     </header>
  )
}

export default Navbar
