import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { HeroContents } from '../components/Hero/HeroContents'

function Join() {
  return (
    <>
     <section className="bg-[#f9f9f9] bg-cover font-[Mulish] md:bg-top bg-center sticky top-0 z-50">
        <Navbar/>
      </section>
      <section className="px-5 md:px-20">
      <div className="font-[Mulish] flex flex-col justify-center text-center h-full md:p-20 md:text-left md:items-start">
          {HeroContents.map(( content, index )=>(
            <div key={index}>
              <h1 className="mb-1 text-primary font-[900] py-4 text-[35px] md:text-5xl md:w-[420px]">
                {content.join.h1}
              </h1>
              <p className="text-[18px] mb-5 md:w-[340px]">
                {content.join.p}
              </p>
            </div>
          ))}
        </div>
      </section>      
      <section className="mt-14 mb-14 px-2 md:px-20 border-t border-t-slate-200">
        <Footer/>
      </section>
    </>
  )
}

export default Join