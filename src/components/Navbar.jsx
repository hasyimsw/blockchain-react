import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='w-full h-20 bg-black fixed z-10 border-b-[0.5px] border-slate-800'>
        <div className='max-w-[1240px] mx-auto px-4 flex items-center justify-between h-full'>
            <div>
                <h1 className='bg-gradient-to-tr from-yellow-400 to-pink-600 bg-clip-text text-transparent'>DEFI</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex items-center text-white'>
                    <li className='hover:text-yellow-400'><a href="#home">Platform</a></li>
                    <li className='hover:text-yellow-400'><a href="#developers">Developers</a></li>
                    <li className='hover:text-yellow-400'><a href="#community">Community</a></li>
                    <li className='hover:text-yellow-400'><a href="#about">About</a></li>
                    <button className='ml-4'>Use DeFi</button>
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div onClick={handleNav} className='block md:hidden'>
                { nav ? <AiOutlineClose size={24} className='text-white' /> : <AiOutlineMenu size={24} className='text-white' /> }
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'w-full bg-black text-white absolute h-screen top-20 left-0 flex justify-center text-center transition-all duration-700' : 'absolute left-[-100%]'}>
                <ul>
                    <li className='hover:text-yellow-400'><a href="#home">Platform</a></li>
                    <li className='hover:text-yellow-400'><a href="#developers">Developers</a></li>
                    <li className='hover:text-yellow-400'><a href="#community">Community</a></li>
                    <li className='hover:text-yellow-400'><a href="#about">About</a></li>
                    <button className='m-4'>Use DeFi</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar