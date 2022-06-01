import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our <span className='bg-gradient-to-tr from-yellow-400 to-pink-600 bg-clip-text text-transparent'>DEFI</span> Community</h1>
        <div className='space-x-2 mt-10'>
            <input className='py-2 px-5 rounded-full text-black' type="email" placeholder='Enter your email' />
            <button>Sign Up</button>
        </div>
        <div className='flex items-center justify-center space-x-2 py-2'>
            <input type="checkbox" />
            <p>Yes, I agree to receive email communications from DeFi</p>
        </div>
    </div>
  )
}

export default Subscribe