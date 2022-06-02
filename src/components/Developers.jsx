import React from 'react'
import terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <div id='developers' className='w-full text-white bg-black'>
        <div className='max-w-[1240px] px-4 py-24 md:flex md:items-center mx-auto'>
            <div>
                <h1>Superpowers for <span className='bg-gradient-to-tr from-yellow-400 to-pink-600 bg-clip-text text-transparent'>DEFI</span> developers.</h1>
                <p className='w-full lg:w-10/12 mt-3'>Checkout the <span className='text-yellow-400'>documentation</span>, the <span className='text-yellow-400'>quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
            </div>
            <div className='py-16 md:py-0 '>
                <img className='max-w-xs shadow-md shadow-yellow-400' src={terminal} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Developers