import React from 'react'
import bgImage from '../images/background-desktop1.png'
import Navbar from './Navbar';

function TeethHeader() {
  return (
    <header className='h-[500px] w-screen bg-cover bg-center lg:bg-left-top bg-no-repeat flex flex-col items-stretch justify-top lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10' style={{backgroundImage: `url(${bgImage})`}}>
      <Navbar />
      <div className='h-full w-full flex flex-col items-start justify-end'>
        <h1 className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-200 via-purple-500 to-pink-600 font-unbounded font-light'>
          Incisivo central superior
        </h1>
      </div>
    </header>
  )
}

export default TeethHeader;