import React from 'react'
import doc from '../images/doc.png'
import bgImage from '../images/background-desktop4.png'
import Navbar from '../components/Navbar'
import ccLogo from '../images/creative-commons.png'
import instagramLogo from '../images/instagram.png'
import logoWhiteFill from '../images/tooth-4.png'
import bgFooter from '../images/background-footer.png'

function ContactPage() {

  const handleClickToRedirect = (url) => {
    window.location.href = url
    window.scrollTo(0, 0);
    window.location.reload(true)
  }

  return (
    <>
      <header className='h-[300px] md:h-[400px] w-screen bg-cover bg-center lg:bg-left-top bg-no-repeat flex flex-col items-stretch justify-top lg:pl-20 lg:pr-20 pt-8 pb-10 pl-10 pr-10' style={{backgroundImage: `url(${bgImage})`}}>
        <Navbar />
        <div className='h-full w-full flex flex-col items-start justify-end pt-10'>
          <h1 className='text-transparent text-[2.5rem] md:text-5xl text-white font-unbounded font-light leading-none drop-shadow-md'>
            Contacto
          </h1>
        </div>
      </header>
      <main>
        <section className='h-auto w-screen bg-[#111111] flex flex-col md:flex-row items-start justify-start md:justify-between md:gap-4 gap-8 lg:pl-20 lg:pr-20 pt-10 pb-16 pl-10 pr-10'>
          <div className='h-auto w-auto md:w-1/2 lg:w-2/3 flex flex-col gap-2'>
            <h1 className='text-xl text-purple-400 font-unbounded font-light leading-tight mb-0 md:mb-2'>
              Sobre licencias de modelos 3D
            </h1>
            <div className='h-auto w-auto flex flex-col items-start justify-start gap-3 mb-10'>
              <p className='font-inter font-normal text-[1.1rem] text-white leading-tight'>
                "Permanent Teeth" collection ( <a target='_blank' href='https://sketchfab.com/DundeeDental/collections/permanent-teeth-4c0d0548c40c463c8cdceb6e0d08df7f' className=' text-blue-400'>https://skfb.ly/HzyR</a> ) by University of Dundee, School of Dentistry is licensed under Creative Commons Attribution ( <a target='_blank' href='http://creativecommons.org/licenses/by/4.0/' className=' text-blue-400'>http://creativecommons.org/licenses/by/4.0/</a> ).
              </p>
              <a target='_blank' href='http://creativecommons.org/licenses/by/4.0/' className=' text-blue-400'>
                <img src={ccLogo} className='object-cover h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]' />
              </a>
            </div>
            <h1 className='text-xl text-purple-400 font-unbounded font-light leading-tight mb-0 md:mb-2'>
              Sobre el desarrollo
            </h1>
            <div className='h-auto w-auto flex flex-col items-start justify-start gap-3 mb-10'>
              <p className='font-inter font-normal text-[1.1rem] text-white leading-tight'>
                Creado por: José Daniel Romero.
              </p>
              <a target='_blank' href='https://www.instagram.com/josedanielromero_t/' className=' text-blue-400'>
                <img src={instagramLogo} className='object-cover h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]' />
              </a>
            </div>
            <h1 className='text-xl text-purple-400 font-unbounded font-light leading-tight mb-0 md:mb-2'>
              Sobre uso de la app
            </h1>
            <div className='h-auto w-auto flex flex-col items-start justify-start gap-3'>
              <p className='font-inter font-normal text-[1.1rem] text-white leading-tight'>
                Morfo app es una aplicación de libre acceso, tanto educadores como estudiantes son bienvenidos a usar y distribuir la web para llegar a ser reconocida como una aliada en la educación y/o actualización en el sector odontológico.
              </p>
              {/* <a target='_blank' href='https://www.instagram.com/josedanielromero_t/' className=' text-blue-400'>
                <img src={instagramLogo} className='object-cover h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]' />
              </a> */}
            </div>
          </div>
          <div className='h-auto w-full md:w-auto md:1/2 lg:w-1/3 md:h-auto flex flex-col items-center justify-center md:items-end'>
            <img src={doc} className='object-cover h-[300px] w-[300px] md:h-[400px] md:w-[400px]' />
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

export default ContactPage;