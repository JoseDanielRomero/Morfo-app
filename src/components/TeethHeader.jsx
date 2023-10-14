import React from 'react'
import bgImage from '../images/background-desktop1.png'
import Navbar from './Navbar';
import logoWhiteNoFill from '../images/tooth-2.png'

function TeethHeader({ description, name }) {
  return (
    <header className='h-auto md:h-[500px] w-screen bg-cover bg-left lg:bg-left-top bg-no-repeat flex flex-col items-stretch justify-top lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10' style={{backgroundImage: `url(${bgImage})`}}>
      <Navbar />
      <div className='h-full w-full flex flex-col items-start justify-between pt-10'>
        <div className='h-auto w-full flex flex-col items-end justify-start order-2 md:order-1'>
          <div className='h-auto lg:w-1/3 md:w-1/2 w-full flex flex-col items-start justify-start gap-3'>
            <img src={logoWhiteNoFill} className='object-cover h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]' />
            <p className='font-inter font-normal text-[1rem] text-white leading-tight'>{description}</p>
          </div>
        </div>
        <div className='h-auto w-full flex flex-col items-start justify-center order-1 md:order-2 mb-12 md:mb-0'>
          <h1 className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-200 via-purple-500 to-pink-600 font-unbounded font-light leading-none'>
            {name}
          </h1>
        </div>
      </div>
    </header>
  )
}

export default TeethHeader;