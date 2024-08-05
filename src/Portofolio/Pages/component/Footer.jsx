import React from 'react'

const Footer = () => {
  return (
    <footer className=' text-center p-3 h-[200px] flex flex-col gap-4 bg-red-500'>
            <button className='bg-white rounded p-2 w-[250px] self-center font-bold'>Connect with me</button>
            <p className='text-green-500 font-bold'>Email <a href=''>idiongomfonkennedy@gmail.com</a></p>
            <p className='text-green-500 font-bold'>GitHub <a href=''>Drema_ken</a></p>
            <p className='text-green-500 font-bold'>LinkedIn <a href=''>Drema Kennedy</a></p>
    </footer>
  )
}

export default Footer
