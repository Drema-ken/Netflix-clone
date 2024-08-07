import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import backdrop from '../assets/backdrop.jpg'
import { userAuth } from '../context/AuthContext'

const Signup = () => {
  const [checked,setChecked] = useState(true)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {setUser,signup} = userAuth()
  const navigate = useNavigate()
  
  const handleSignUp = async (e) =>{
    e.preventDefault();
    try{
      signup(email,password)
      setUser({email})
      navigate('/')
    }catch(err){
      console.log(err)}
     
        
     
//
  }

  return (
    <>
    <img src={backdrop} alt='///' className='fixed top-0 w-full h-full object-top object-cover'/>
    <div className=' h-full  fixed bg-gradient-to-r  from-black/70 w-full'/>
    <div>   
        <div className='  m-auto w-full h-full absolute'>
           <div className='w-[400px] h-[450px]  m-auto mt-24 bg-gray-700 rounded-lg p-6'>
              <h1 className='font-bold text-3xl text-white'>Sign up</h1>
              <form className='flex flex-col justify-center py-6 gap-4 ' >
                <input type='email' onChange={e => { setEmail( e.target.value)}} autoComplete='email' placeholder='Email' value={email} className=' text-white bg-black/70 h-[50px] px-3'/>
                <input type='password' onChange={e => {setPassword( e.target.value) }} autoComplete='current-password' placeholder='Password'  value={password} className='text-white bg-black/70 h-[50px] px-3'/>
                <button className='bg-red-700 text-white font-bold p-2 rounded-md' onClick={handleSignUp}>Sign up</button>
                <div className='flex items-center  justify-between px-2'>
                  <div>
                      <input type='checkbox'  id='remember'  className='self-center mr-2' value={checked} onChange={(e)=>{setChecked(e.target.checked)}}/>
                      <label htmlFor='remeber' className='text-gray-400'>Remember me</label>
                 </div>
                <p className='justify-self-end'>Need help?</p>
                </div>
                <p className='text-gray-400 text-[15px]'>Already subscribed to Netflix? <Link to='/login' className='text-red-600'>Login</Link></p>
              </form>
           </div>
        </div>
    </div>
    </>
  )
}

export default Signup
