import React from 'react'
import bgImage from '../images/background-desktop2.png'
import bgSection1 from '../images/mockup-ipad.png'
import Navbar from '../components/Navbar';
import logoWhiteNoFill from '../images/tooth-2.png'

function Homepage() {
  return (
    <>
      <header className='h-[500px] w-screen bg-cover bg-center lg:bg-left-top bg-no-repeat flex flex-col items-stretch justify-top lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10' style={{backgroundImage: `url(${bgImage})`}}>
        <Navbar />
        <div className='h-full w-full flex flex-col items-start justify-between pt-10'>
          <div className='h-auto w-full flex flex-col items-end justify-start order-2 md:order-1'>
            <div className='h-auto lg:w-1/3 md:w-1/2 w-full flex flex-col items-start justify-start gap-3'>
            <img src={logoWhiteNoFill} className='object-cover h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]' />
              <p className='font-inter font-normal text-[1rem] text-white leading-tight'>
                Explora la forma, estructura y características clínicas de todas las piezas dentarias permanentes.
              </p>
            </div>
          </div>
          <div className='h-auto w-full flex flex-col items-start justify-center order-1 md:order-2'>
            <h1 className='text-transparent text-xl text-white font-unbounded font-light leading-tight mb-2'>
              Morfo app, plataforma educativa de Morfología dental
            </h1>
            <h1 className='text-transparent text-[2.5rem] md:text-5xl text-white font-unbounded font-normal leading-none'>
              Simple. Interactiva. Para todos. 
            </h1>
          </div>
        </div>
      </header>
      <main>
        <section className='h-[500px] w-screen bg-cover bg-center lg:bg-left-center bg-no-repeat flex flex-col items-start justify-start gap-4 lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10' style={{backgroundImage: `url(${bgSection1})`}}>
          <h1 className='text-transparent text-xl text-purple-700 font-unbounded font-light leading-tight mb-2'>
            Portátil y disponible en 1 solo paso.
          </h1>
          <p className='font-inter font-normal text-[1.1rem] w-1/2 md:w-1/3 text-[#111111] leading-tight'>
            A diferencia de otras plataformas, Morfo app es una aplicación web lo que la vuelve accesible desde cualquier navegador y desde cualquier dispositivo. <br></br>Sin descargas de apps, ni pre-registros.
          </p>
        </section>
      </main>
    </>
  )
}

export default Homepage;