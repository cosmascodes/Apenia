import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Signupform from '../components/Signupform/Signupform'

function Signin() {
  return (
    <div>
    <section
       className="bg-[#f9f9f9] bg-cover
       font-[Mulish] md:bg-top bg-center sticky top-0 z-50"
     >
       <Navbar/>
     </section>
     <section className='flex justify-center items-center'>
      <Signupform/>
    </section>
    </div>
  )
}

export default Signin