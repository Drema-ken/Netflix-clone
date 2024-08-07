import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backdrop from '../assets/backdrop.jpg'
import { userAuth } from '../context/AuthContext';


const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {setUser,login} = userAuth();
  const navigate =useNavigate();

  const handleLogin = async (e) =>{
    e.preventDefault();
    //actual signing using firebase should happen first then user object can be set
    try{
     await login(email,password)
    setUser({email})
    navigate('/')

  }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <img src={backdrop} alt='///' className='fixed top-0 w-full h-full object-top object-cover '/>
    <div className=' h-full  fixed bg-gradient-to-r from-black/70 w-full'/>
    <div>   
        <div className='  m-auto w-full h-full absolute'>
           <div className='w-[400px] h-[450px]  m-auto mt-24 bg-gray-700 rounded-lg p-6'>
              <h1 className='font-bold text-3xl text-white'>Login</h1>
              <form className='flex flex-col justify-center py-6 gap-4 '>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} autoComplete='email' placeholder='Email' className=' text-white bg-black/70 h-[50px] px-3'/>
                <input type='password' value={password} onChange= {e=> setPassword(e.target.value)} autoComplete='current-password' placeholder='Password'  className='text-white bg-black/70 h-[50px] px-3'/>
                <button onClick={handleLogin} className='bg-red-700 text-white font-bold p-2 rounded-md'>Login</button>
                <div className='flex items-center  justify-between px-2'>
                  <div>
                      <input type='checkbox' className='self-center mr-2' id='remember'/>
                      <label htmlFor='remember' className='text-gray-400'>Remember me</label>
                 </div>
                <p className='justify-self-end'>Need help?</p>
                </div>
                <p className='text-gray-400'>New to Netflix  <Link to='/signup' className='text-red-600'>Sign up</Link></p>
              </form>
           </div>
        </div>
    </div>
    </>
  )
}

export default Login
