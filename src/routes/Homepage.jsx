import React from 'react'
import bgImage from '../images/background-desktop2.png'
import bgFooter from '../images/background-footer.png'
import bgSection1 from '../images/mockup-ipad.png'
import Navbar from '../components/Navbar';
import logoWhiteNoFill from '../images/tooth-2.png'
import hand from '../images/hand.png'
import loudspeaker from '../images/loudspeaker.png'
import logoWhiteFill from '../images/tooth-4.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Homepage() {

  const paths = [
    'maxillary-central', 'maxillary-lateral', 'maxillary-canine', 'maxillary-first-premolar', 'maxillary-second-premolar', 'maxillary-first-molar', 'maxillary-second-molar', 'maxillary-third-molar', 'mandibular-central', 'mandibular-lateral', 'mandibular-canine', 'mandibular-first-premolar', 'mandibular-second-premolar', 'mandibular-first-molar', 'mandibular-second-molar', 'mandibular-third-molar'
  ]
  
  const [randomToothPath, setRandomToothPath] = useState('')

  useEffect(() => {

    setRandomToothPath(Math.floor(Math.random() * paths.length))

  },[])

  const handleClickToRedirect = (url) => {
    window.location.href = url
    window.scrollTo(0, 0);
    window.location.reload(true)
  }

  return (
    <>
      <header className='h-auto md:h-[500px] w-screen bg-cover bg-center lg:bg-left-top bg-no-repeat flex flex-col items-stretch justify-top lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10' style={{backgroundImage: `url(${bgImage})`}}>
        <Navbar />
        <div className='h-full w-full flex flex-col items-start justify-between pt-10'>
          <div className='h-auto w-full flex flex-col items-end justify-start order-2 md:order-1'>
            <div className='h-auto lg:w-1/3 md:w-1/2 w-full flex flex-col items-start justify-start gap-3'>
              <img src={logoWhiteNoFill} className='object-cover h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]' />
              <p className='font-inter font-normal text-[1rem] text-white leading-tight'>
                Explora la forma, estructura y características clínicas de todas las piezas dentarias permanentes a través de modelos 3D.
              </p>
              <Link to={`/${paths[randomToothPath]}`} className='h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out shadow-md'>
                <p className='font-inter font-semibold text-lg text-white'>Pruébalo ahora</p>
              </Link>
            </div>
          </div>
          <div className='h-auto w-full flex flex-col items-start justify-center order-1 md:order-2 mb-12 md:mb-0'>
            <h1 className='text-transparent text-xl text-white font-unbounded font-light leading-tight mb-2'>
              Morfo app, plataforma educativa de Morfología dental
            </h1>
            <h1 className='text-transparent text-[2.5rem] md:text-5xl text-white font-unbounded font-normal leading-none drop-shadow-sm'>
              Simple. Interactiva. Para todos. 
            </h1>
          </div>
        </div>
      </header>
      <main>
        <section className='h-auto w-screen bg-[#111111] flex flex-col sm:flex-row items-start justify-start sm:justify-between sm:gap-4 gap-8 lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10'>
          <div className='h-auto w-auto sm:w-1/2 lg:w-2/3 flex flex-col gap-4'>
            <h1 className='text-xl text-purple-400 font-unbounded font-light leading-tight mb-0 md:mb-2'>
              Didáctica al máximo
            </h1>
            <p className='font-inter font-normal text-[1.1rem] text-white leading-tight'>
              Sumérgete en la anatomía dental gracias al visualizador 3D que te permite mover libremente los modelos o si lo prefieres, puedes también fijarlo según la superficie que desees.<br></br>
              Complementa la parte práctica con teoría, cada una de las piezas dentarias consta con información relevante y resumida del diente en sí y sus distintas caras.
            </p>
          </div>
          <div className='h-auto w-full sm:w-auto sm:1/2 lg:w-1/3 sm:h-auto flex flex-col items-center justify-center sm:items-end'>
            <img src={hand} className='object-cover h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]' />
          </div>
        </section>
        <section className='h-[500px] w-screen bg-cover bg-center lg:bg-left-center bg-no-repeat flex flex-col items-start justify-start gap-4 lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10' style={{backgroundImage: `url(${bgSection1})`}}>
          <h1 className='text-xl text-purple-700 font-unbounded font-light leading-tight mb-0 md:mb-2'>
            Portátil y disponible en 1 solo paso
          </h1>
          <p className='font-inter font-normal text-[1.1rem] w-1/2 md:w-1/3 text-[#111111] leading-tight'>
            A diferencia de otras plataformas, Morfo app es una aplicación web lo que la vuelve accesible desde cualquier navegador y desde cualquier dispositivo. <br></br>
            Sin descargas de apps, ni pre-registros.
          </p>
        </section>
        <section className='h-auto w-screen bg-[#111111] flex flex-col sm:flex-row items-start justify-start sm:justify-between sm:gap-4 gap-0 lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10'>
          <div className='h-auto w-auto sm:w-1/2 lg:w-2/3 flex flex-col gap-4'>
            <h1 className='text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 via-purple-500 to-pink-600 font-unbounded font-light leading-none mb-0 md:mb-2'>
              Recomienda Morfo app
            </h1>
            <p className='font-inter font-normal text-[1.1rem] text-white leading-tight'>
              El objetivo de Morfo app es aportar a toda la comunidad odontológica, desde estudiantes que están teniendo su primer contacto con la Morfología dental hasta odontológos actualizados y en constante entrenamiento.<br></br>
              Si esta web te pareció un aporte, recomiéndala y compártela con los demás.
            </p>
          </div>
          <div className='h-auto w-full sm:w-auto sm:1/2 lg:w-1/3 sm:h-auto flex flex-col items-center justify-center sm:items-end'>
            <img src={loudspeaker} className='object-cover h-[300px] w-[300px] sm:h-[330px] sm:w-[330px]' />
          </div>
        </section>
      </main>
      <footer className='h-auto w-screen bg-cover bg-center lg:bg-left-top bg-no-repeat flex flex-col items-center justify-center lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10 gap-2' style={{backgroundImage: `url(${bgFooter})`}}>
        <div onClick={()=>handleClickToRedirect('/#/contact')} className='h-full w-auto flex flex-row items-center gap-2 cursor-pointer'>
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

export default Homepage;