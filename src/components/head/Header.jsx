import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'

export const Header = () => {
  return (
    <header className='w-full lg:h-[650px] bg-main flex flex-col items-center justify-between bg-no-repeat bg-cover'>
        <Navbar />
        <Hero />
    </header>
  )
}
