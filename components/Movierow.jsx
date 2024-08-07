import React, { useEffect, useRef, useState } from 'react'
import endpoints, { baseUrl } from '../services/data'
import axios from 'axios'
import MovieItem from './MovieItem'
import { FaAngleLeft ,FaAngleRight} from "react-icons/fa6";

const Movierow = ({title,url}) => {
  const [movies,setMovies] = useState([])
  const scrollRef = useRef(null);
  const scrollToRight = () => {
    scrollRef.current.scrollBy(460, 0); // scroll 200px to the right
  };

  const scrollToLeft =() =>{
    scrollRef.current.scrollBy(-460, 0)
  }


  

  useEffect(()=>{
        axios.get(url).then(res => {setMovies(res.data.results) }).catch(err => console.log(err))
  },[])

  return (
    <section className='mt-[10px] relative '>
        <h1 className='pl-2 font-bold text-red-700 text-xl'>{title}</h1>
        <div id='slider' ref={scrollRef} className='group  h-[150px]  w-full mt-[10px] scrollbar-hide flex flex-nowrap overflow-x-scroll gap-2 lg:w-full z-10 scroll-smooth' >
        <FaAngleLeft onClick={scrollToLeft} className='group-hover:block absolute hover:bg-red-700 z-10 hidden  hover:text-white left-[10px] bg-blue-100 top-[100px] text-4xl rounded-[50%] p-1  cursor-pointer' />
             {movies.map((item,index) =>{
               return ( 
                <MovieItem img={`https://image.tmdb.org/t/p/original${item.backdrop_path }` || `https://image.tmdb.org/t/p/original/${item.poster_path }`}
                    key = {index}
                    title={item.title}
                    movie = {item}
                    />
               )
             })}
          <FaAngleRight onClick={scrollToRight} className='hidden group-hover:block absolute right-[20px] hover:bg-red-700 z-10 hover:text-white bg-blue-100 top-[100px] text-4xl rounded-[50%] p-1 cursor-pointer'/>
            
        </div>
    </section>
  )
}

export default Movierow
