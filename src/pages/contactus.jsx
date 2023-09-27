import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { HeroContents } from '../components/Hero/HeroContents'
import { Link } from 'react-router-dom'
import team from "/assets/team.svg";

function Contactus() {
  return (
    <>
     <section className="bg-[#f9f9f9] bg-cover font-[Mulish] md:bg-top bg-center sticky top-0 z-50">
        <Navbar/>
      </section>
        <section className="px-5 md:px-20 pt-20 md:pt-10">
            <div className="font-[Mulish] flex flex-col md:flex-row md:justify-between justify-center text-center h-full md:pt-20 md:text-left md:items-start">
                {HeroContents.map(( content, index )=>(
                    <div key={index}>
                        <h1 className="mb-1 text-primary font-[900] py-4 text-[35px] md:text-5xl md:w-[420px]">
                            {content.contact.h1}
                        </h1>
                        <p className="text-[18px] mb-5 md:w-[340px]">
                            {content.contact.p}
                        </p>
                        <Link to="/contact" className='underline font-[700] flex justify-start items-center'>
                            Self care
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </Link>
                        <Link to="/contact" className='underline font-[700] flex justify-start items-center'>
                            Call: +254714 99 11 11
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </Link>
                        <Link to="/contact" className='underline font-[700] flex justify-start items-center'>
                            Email: info@apenia.com
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </Link>
                    </div>
                ))}
                <div className='mt-[-10vh] flex items-start'>
                    <img src={team} alt="team" className="md:cursor-pointer h-[80vh] opacity-80"/>
                </div>
            </div>
        </section>    
      <section className="mt-14 mb-14 px-2 md:px-20 border-t border-t-slate-200">
        <Footer/>
      </section>
    </>
  )
}

export default Contactus