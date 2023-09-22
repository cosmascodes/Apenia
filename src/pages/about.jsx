import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function AboutUs() {
  return (
    <>
    <section
       className="bg-[#f9f9f9] bg-cover
       font-[Mulish] md:bg-top bg-center sticky top-0 z-50"
     >
       <Navbar/>
     </section>
      <section className="mt-14 mb-14 px-2 md:px-20 border-t border-t-slate-200">
        <Footer/>
      </section>
    </>
  )
}

export default AboutUs