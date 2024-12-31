import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 shadow-md backdrop-blur-sm'>
        <nav className='flex justify-between items-center p-5'>
            <h2 className='font-rocker text-2xl sm:text-3xl lg:text-5xl'>TALKS</h2>
            <button>
            <ul className=' sm:hidden space-y-1'>
                <li className='w-8 h-1 bg-black rounded-full'></li>
                <li className='w-8 h-1 bg-black rounded-full'></li>
                <li className='w-8 h-1 bg-black rounded-full'></li>
            </ul>
            </button>
            <ul className='hidden sm:flex lg:text-lg items-center gap-8 font-poppins'>
                <li className='hover:text-red-500 duration-300'><Link href={"/"}>Home</Link></li>
                <li className='hover:text-red-500 duration-300'><Link href={"#blog"}>Blogs</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header