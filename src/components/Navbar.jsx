import React from 'react'
import { NavLink } from 'react-router-dom';
import logoWhiteFill from '../images/tooth-4.png'

function Navbar() {
  return (
    <nav className='h-[80px] w-full sm:h-[50px] flex flex-row items-center justify-between'>
      <NavLink to='/' className='h-full w-auto flex flex-row items-center gap-2'>
        <img src={logoWhiteFill} className='object-cover h-[32px] w-[32px]' />
        <h3 className='font-unbounded font-semibold text-[1.3rem] text-white'>Morfo app</h3>
      </NavLink>
      <div className='h-full w-auto flex sm:flex-row flex-col items-center sm:gap-14 gap-1'>
        <NavLink to='/maxillary' className='h-full w-auto flex flex-row items-center gap-2 md:hover:border-b-2 md:hover:mt-[2px] hover:border-white'>
          <h5 className='font-inter font-normal text-[1.2rem] text-white'>maxilares</h5>
        </NavLink>
        <NavLink to='/mandibular' className='h-full w-auto flex flex-row items-center gap-2 md:hover:border-b-2 md:hover:mt-[2px] hover:border-white'>
          <h5 className='font-inter font-normal text-[1.2rem] text-white'>mandibulares</h5>
        </NavLink>
        <NavLink to='/contact' className='h-full w-auto hidden md:flex flex-row items-center gap-2 hover:border-b-2 hover:mt-[2px] hover:border-white'>
          <h5 className='font-inter font-normal text-[1.2rem] text-white'>contacto</h5>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;