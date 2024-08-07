import React, { useContext, useEffect, useState,useRef } from 'react'
import poster from '.././assets/backdrop.jpg'
import { AuthContext, userAuth } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'
import { db } from '../services/firebase'
import { arrayRemove,doc,arrayUnion,onSnapshot,updateDoc } from 'firebase/firestore'
import { FaAngleLeft ,FaAngleRight} from "react-icons/fa6";
import { MdDeleteForever } from 'react-icons/md'


const Profile = () => {
  const [movies,setMovies]= useState([])
  const {user} =userAuth();

  const deleteFav = async(show) =>{
    const userEmail = user?.email
     const userDoc = doc(db,'people',userEmail);
     await updateDoc(userDoc,{
      favshow: arrayRemove(show)
     })
      console.log(userDoc)
  }
  const scrollRef = useRef(null);
  const scrollToRight = () => {
    scrollRef.current.scrollBy(460, 0); // scroll 200px to the right
  };

  const scrollToLeft =() =>{
    scrollRef.current.scrollBy(-460, 0)
  }


  useEffect(()=>{
      if(user){
        onSnapshot(doc(db,'people',`${user?.email}`),(doc)=>{
          if(doc.data()){
            setMovies(doc.data().favshow)
          }
        })
      }

  },[user?.email])
  
  return (
    <ProtectedRoute>

      <div className='relative h-[400px]   w-screen'>
        <img src={poster} className='w-full h-full object-top object-cover'alt='///'/>
        <div className='bg-gradient-to-tr from-black/70  fixed top-0 w-full h-[400px] opacity-100'/>
        <div className='top-[250px] absolute  left-[0] px-2'>
          <h1 className=' text-white text-3xl sm:text-5xl px-2 font-bold'>My shows</h1>
          <p className='text-gray-400 text-xl font-light text-center'>{user?.email}</p>
        </div>
      </div>
      <section className='mt-[10px] relative '>
        <h1 className='pl-2 font-bold text-red-700 text-xl'>Favorites</h1>
        <div id='slider' ref={scrollRef} className='group  h-[150px]  w-full mt-[10px] scrollbar-hide flex flex-nowrap overflow-x-scroll gap-2 lg:w-full z-10 scroll-smooth' >
        <FaAngleLeft onClick={scrollToLeft} className='group-hover:block absolute hover:bg-red-700 z-10 hidden  hover:text-white left-[10px] bg-blue-100 top-[100px] text-4xl rounded-[50%] p-1  cursor-pointer' />
             {movies.map((item,index) =>{
              
               return (
                 
                <div className='relative flex-shrink-0 w-screen sm:w-[300px] h-full ' >
                <img src={`https://image.tmdb.org/t/p/original${item.movie.poster_path}`} className='object-cover'  />
                <div className='p-2 absolute top-0 left-0 w-full h-full opacity-0 flex flex-col hover:opacity-100 bg-black/70'>
                     <MdDeleteForever className='self-end text-white text-xl cursor-pointer' onClick={()=>{deleteFav(item)}}/>
                     <p className='whitespace-normal m-auto font-bold '>{item.movie.original_title}</p>
                </div>
           </div>
               )
             })}
          <FaAngleRight onClick={scrollToRight} className='hidden group-hover:block absolute right-[20px] hover:bg-red-700 z-10 hover:text-white bg-blue-100 top-[100px] text-4xl rounded-[50%] p-1 cursor-pointer'/>
            
        </div>
    </section>
    </ProtectedRoute>
  )
}

export default Profile
