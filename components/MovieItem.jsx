import React, {useState}from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { MdDeleteForever } from "react-icons/md";
import { db } from '../services/firebase';
import {updateDoc,doc,arrayUnion,getDoc} from 'firebase/firestore'
import { userAuth } from '../context/AuthContext';

const MovieItem = ({img,title,movie}) => {
  const [like,setLike] = useState(false);
  const {user} =userAuth();
  
  

  const markFav = async()=>{
    try{
        const userEmail = user?.email
        if(userEmail){
          const userDoc = doc(db,'people',userEmail);
          setLike(true);
          await updateDoc(userDoc,{
            favshow: arrayUnion({movie})
          })
         
        }
        else{
          alert('You must login to add movies!')
        }
      }

  catch(err){
    console.log('error')
  }
  
  }



  return (
    <div className='relative flex-shrink-0 w-screen sm:w-[300px] h-full '>
         <img src={img} className='object-cover'  />
         <div className='p-2 absolute top-0 left-0 w-full h-full opacity-0 flex flex-col hover:opacity-100 bg-black/70'>
              { like ?<FaHeart className='self-end cursor-pointer' onClick={()=>{setLike(false)}}/> : <FaRegHeart className='self-end cursor-pointer' onClick={()=>{markFav()}}/>}
              <p className='whitespace-normal m-auto font-bold '>{title}</p>
         </div>
    </div>
  )
}

export default MovieItem
