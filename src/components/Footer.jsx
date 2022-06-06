import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2'>
            <div className='text-left'>
                <h3 className='font-bold text-xl border-b-4 inline-block'><span className='bg-gradient-to-tr from-yellow-400 to-pink-600 bg-clip-text text-transparent'>DEFI</span></h3>
                <ul className='flex items-center text-white -ml-4'>
                    <li className='hover:text-yellow-400'><a href="#home">Platform</a></li>
                    <li className='hover:text-yellow-400'><a href="#developers">Developers</a></li>
                    <li className='hover:text-yellow-400'><a href="#community">Community</a></li>
                    <li className='hover:text-yellow-400'><a href="#about">About</a></li>
                </ul>
            </div>
        </div>
        <p className="text-center text-sm text-slate-200 border-slate-200 pt-14 py-4">
            &copy; 2022 &#124; coded with ❤️ by Hasyim
        </p>
    </div>
  )
}

export default Footer