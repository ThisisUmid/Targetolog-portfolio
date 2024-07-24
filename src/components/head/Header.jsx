import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'

export const Header = () => {
  return (
    <header className='w-full h-[650px] bg-main flex flex-col items-center justify-between'>
        <Navbar />
        <Hero />
    </header>
  )
}
