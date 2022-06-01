import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex items-center justify-between h-full'>
            <div>
                <h1 className='bg-gradient-to-tr from-yellow-400 to-pink-600 bg-clip-text text-transparent'>DEFI</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex items-center text-white'>
                    <li className='hover:text-yellow-400'>Platform</li>
                    <li className='hover:text-yellow-400'>Developers</li>
                    <li className='hover:text-yellow-400'>Community</li>
                    <li className='hover:text-yellow-400'>About</li>
                    <button className='ml-4'>Use DeFi</button>
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div className='block md:hidden'>
                <AiOutlineMenu size={24} className='text-white' />
            </div>

            {/* Mobile Menu */}
            <div className='w-full bg-black text-white absolute h-full top-20 left-0 flex justify-center text-center'>
                <ul>
                    <li className='text-2xl hover:text-yellow-400'>Platform</li>
                    <li className='text-2xl hover:text-yellow-400'>Developers</li>
                    <li className='text-2xl hover:text-yellow-400'>Community</li>
                    <li className='text-2xl hover:text-yellow-400'>About</li>
                    <button className='m-4'>Use DeFi</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar