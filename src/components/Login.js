import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header />
        <form className='w-3/12 p-12 my-36 absolute mx-auto right-0 left-0 bg-black text-white rounded bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>Sign In</h1>
            <input 
            type="text" 
            placeholder='Email Address' 
            className="p-4 my-4 w-full bg-grey-700" 
            />
            <input 
            type="password" 
            placeholder='Password' 
            className="p-4 my-4 w-full bg-grey-700" 
            />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign in</button>
        </form>
    </div> 
  )
}

export default Login