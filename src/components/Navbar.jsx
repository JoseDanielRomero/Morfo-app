import React from 'react'
import logoWhiteFill from '../images/tooth-4.png'

function Navbar() {

  const handleClickToRedirect = (url) => {
    window.location.href = url
    window.location.reload(true)
  }

  return (
    <nav className='h-auto w-full sm:h-[50px] flex flex-row items-center justify-between'>
      <div className='h-full w-auto flex flex-row items-center gap-2 cursor-pointer' onClick={()=>handleClickToRedirect('/#/')}>
        <img src={logoWhiteFill} className='object-cover h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]' />
        <h3 className='font-unbounded font-semibold text-[1.2rem] lg:text-[1.3rem] text-white'>Morfo app</h3>
      </div>
      <section className='h-full w-auto flex sm:flex-row flex-col items-center sm:gap-14 gap-1'>
        <div onClick={()=>handleClickToRedirect('/#/maxillary')} className='h-auto md:h-full w-auto flex flex-row items-center gap-2 md:hover:border-b-2 md:hover:mt-[2px] hover:border-white cursor-pointer'>
          <h5 className='font-inter font-normal text-[1.1rem] text-white'>superiores</h5>
        </div>
        <div onClick={()=>handleClickToRedirect('/#/mandibular')} className='h-auto md:h-full flex flex-row items-center gap-2 md:hover:border-b-2 md:hover:mt-[2px] hover:border-white cursor-pointer'>
          <h5 className='font-inter font-normal text-[1.1rem] text-white'>inferiores</h5>
        </div>
        <div onClick={()=>handleClickToRedirect('/#/contact')} className='h-full w-auto hidden md:flex flex-row items-center gap-2 hover:border-b-2 hover:mt-[2px] hover:border-white cursor-pointer'>
          <h5 className='font-inter font-normal text-[1.1rem] text-white'>contacto</h5>
        </div>
      </section>
    </nav>
  )
}

export default Navbar;