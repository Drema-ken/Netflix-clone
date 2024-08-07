import React, { useEffect, useState } from 'react'
import endpoints, {baseUrl} from '../services/data';
import moment from 'moment'
import deadpool from '../assets/deadpool.jpg'


const Hero = () => {
  const [movie,setMovie] =useState([]);
  const defaults= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam provident distinctio exercitationem dicta similique! Blanditiis tempora quasi vitae eveniet eligendi labore. Omnis iusto recusandae mollitia quisquam? Ullam, ipsum optio.';
  const textCut = (text=defaults,length) =>{
    const newText = text.slice(0,length) + '...';
    return newText;
  }


  useEffect( ()=>{
   fetch(endpoints.popular).then(res => res.json())
                            .then(data => {
                              const movie = data.results;
                              const randomMovie = movie[Math.floor(Math.random() * movie.length)];
                              setMovie(randomMovie)
                            }) 
                            .catch(err => console.log(err));
                            
          
  },[])
  return (
    <section className='text-white '>
           <div className=' h-[500px]'>
            <div className=' absolute bg-gradient-to-tr from-black h-[500px] w-full '></div>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}` } alt={movie.title} className='w-full h-full object-cover object-top' />
           
            <div className='px-4 absolute top-[200px] w-[600px] md:w-[700px] lg:w-[800px] flex  flex-col gap-2'>
                <h1 className='text-4xl w-screen sm:w-full font-extrabold text-cyan-500'>{movie.title}</h1>
                <div className='flex gap-4'>
                    <button className='capitalize rounded-sm bg-white text-black p-1 font-semibold w-[70px]'>play</button>
                    <button className='border-solid border-red-500 border-[1px] px-2 rounded-md'>Watch later</button>
                </div>
                <p className='text-sm font-bold'>{moment(movie.release_date).format('MMMM,D,YYYY')}</p>
                <p className=' h-[100px] w-[400px] sm:w-[500px] md:w-full text-red-700 font-bold overflow-hidden'>{textCut(movie.overview,200)}</p>
            </div>
            </div>
    </section>
  )
}

export default Hero
