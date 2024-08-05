import React from 'react'
import profile from '../../../assets/profile.jpg'

const Main = () => {
    const scroller = document.querySelector('#scroller');
    
  return (
     <main id='top' className='flex flex-col gap-6  justify-center  items-center lg:justify-between pt-[50px]  lg:pt-[60px] lg:h-screen lg:flex-row-reverse'>
        <img src={profile} alt='profile picture' className='max-w-[450px] h-[450px] self-center lg:w-[400px] lg:mr-[50px] rounded-[50%]'/>
        <div className=' px-3 flex flex-col justify-center items-center lg:items-start '>
        <h1 className='font-bold text-3xl lg:text-5xl'>Hi! I'm <span className='text-green-400'>Drema</span> Kennedy</h1>
        <h1 className='font-bold text-3xl lg:text-5xl'>Fullstack Stack <span className='text-green-400'>Developer</span></h1>
        <p className='mt-5 mb-5 text-lg text-center lg:text-left'>My favorite tech includes <span className='text-green-500' >Javascript(React.js and NEXT.js), Tailwind CSS, Node.js + Express.js, MongoDb,  &amp; Firebase/Firestore!</span></p>
        <button className='lg:self-start  bg-green-400 w-[150px] text-lg p-2 rounded-[50px]'>Get in touch </button>
        <a href='#top' className='fixed right-6 shadow-md bottom-8 bg-green-700 p-4 z-10 font-extrabold rounded-[50%] rotate-90 '>&lt;&lt;</a>
        </div>
        
     </main>
  )
}

export default Main
