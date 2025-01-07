'use client'
import Link from 'next/link'
import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'

const Header = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className='shadow-md backdrop-blur-sm'>
        <nav className='flex justify-between items-center p-5'>
            <h2 className='font-rocker text-2xl sm:text-3xl lg:text-5xl'>TALKS</h2>
            <Popover>
              <PopoverTrigger asChild>
              <button>
                <ul className=' sm:hidden space-y-1'>
                  <li className='w-8 h-1 bg-black rounded-full'></li>
                  <li className='w-8 h-1 bg-black rounded-full'></li>
                  <li className='w-8 h-1 bg-black rounded-full'></li>
                </ul>
              </button>
              </PopoverTrigger>
              <PopoverContent className='w-40 bg-accent-foreground/30 backdrop-blur-sm'>
                  <ul className='flex flex-col sm:hidden lg:text-lg items-center gap-8 font-poppins'>
                <li className='hover:text-red-500 duration-300'><Link href={"/"}>Home</Link></li>
                <li className='hover:text-red-500 duration-300'><Link href={"#blog"}>Blogs</Link></li>
            </ul>
              </PopoverContent>
            </Popover>
            <ul className='hidden sm:flex lg:text-lg items-center gap-8 font-poppins'>
                <li className='hover:text-red-500 duration-300'><Link href={"/"}>Home</Link></li>
                <li className='hover:text-red-500 duration-300'><Link href={"#blog"}>Blogs</Link></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header