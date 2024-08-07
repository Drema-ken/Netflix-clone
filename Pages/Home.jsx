import React from 'react'
import Hero from '../components/Hero'
import Movierow from '../components/Movierow'
import endpoints from '../services/data'

const Home = () => {
  return (
    <>
        <Hero/>
        <Movierow title='Upcoming' url={endpoints.upcoming}/>
        <Movierow title='Trending' url={endpoints.trending}/>
        <Movierow title='Popular' url={endpoints.popular}/> 
    </>
  )
}

export default Home
