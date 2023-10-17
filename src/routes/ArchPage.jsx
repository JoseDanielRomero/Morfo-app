import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import bgImage from '../images/background-desktop3.png'
import logoWhiteNoFill from '../images/tooth-2.png'
import logoWhiteFill from '../images/tooth-4.png'
import bgFooter from '../images/background-footer.png'
import { useEffect } from 'react'

function ArchPage({ data }) {

  useEffect(() => {

    window.scrollTo(0, 0);

  },[data])

  return (
    <>
      <header className='h-auto md:h-[500px] w-screen bg-cover bg-center lg:bg-left-top bg-no-repeat flex flex-col items-stretch justify-top lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10' style={{backgroundImage: `url(${bgImage})`}}>
        <Navbar />
        <div className='h-full w-full flex flex-col items-start justify-between pt-10'>
          <div className='h-auto w-full flex flex-col items-end justify-start order-2 md:order-1'>
            <div className='h-auto lg:w-1/3 md:w-1/2 w-full flex flex-col items-start justify-start gap-3'>
              <img src={logoWhiteNoFill} className='object-cover h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]' />
              <p className='font-inter font-normal text-[1rem] text-white leading-tight'>
                {data.description}
              </p>
              <Link to={`/${data.buttonPath}`} className='h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out shadow-md'>
                <p className='font-inter font-semibold text-lg text-white'>Empieza el recorrido</p>
              </Link>
            </div>
          </div>
          <div className='h-auto w-full flex flex-col items-start justify-center order-1 md:order-2 mb-12 md:mb-0'>
            <h1 className='text-transparent text-[2.5rem] md:text-5xl text-white font-unbounded font-light leading-none drop-shadow-sm'>
              {data.title}
            </h1>
          </div>
        </div>
      </header>
      <main className='h-auto w-screen lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10 mb-8'>
        <section className='h-auto w-full grid grid-cols-2 lg:grid-cols-8 sm:grid-cols-4 bg-white p-1 gap-1 rounded-md'>
          {data.teeth.map((tooth)=>{  

            const imgUrl = new URL(`../images/teeth/${tooth.path}.png`, import.meta.url).href
    
            return (
              <article key={tooth.id} className='h-[300px] w-full bg-[#111111] flex flex-col items-stretch justify-stretch'>
                <div className='h-1/3 w-full border-b-4 border-white p-3 flex flex-col items-center justify-center'>
                  <Link to={`/${tooth.path}`} className='text-[1rem] text-purple-400 hover:text-white font-unbounded font-light leading-tight text-center cursor-pointer'>
                    {tooth.name}
                  </Link>
                </div>
                <div className='h-2/3 w-full p-1 flex flex-col items-center'>
                  <img src={imgUrl} className='object-cover h-full w-auto' />
                </div>
              </article>
            )
          })}
        </section>
      </main>
      <footer className='h-auto w-screen bg-cover bg-center lg:bg-left-top bg-no-repeat flex flex-col items-center justify-center lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10 gap-2' style={{backgroundImage: `url(${bgFooter})`}}>
        <div className='h-full w-auto flex flex-row items-center gap-2 cursor-pointer'>
          <img src={logoWhiteFill} className='object-cover h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]' />
          <h3 className='font-unbounded font-semibold text-[1.2rem] lg:text-[1.3rem] text-white'>Morfo app</h3>
        </div>
        <h1 className='text-transparent text-[1rem] lg:text-[1.1rem] text-white font-unbounded font-light leading-tight mb-4 text-center'>
          Diseñada y desarrollada por José Romero © 2023
        </h1>
      </footer>
    </>
  )
}

export default ArchPage;