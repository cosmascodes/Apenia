import React from 'react'
import Logo from "/logo-a.svg";

function Footer() {
  return (
    <>
      <div className='p-5 md:p-10 pt-14 font-[Mulish] grid grid-cols-2 md:grid-cols-6 gap-10'>
        <div>
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12"/>        
        </div>
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Personal</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Discover Personal</li>
            <li className='pt-4'>Transfer & Spend</li>
            <li className='pt-4'>Save</li>
            <li className='pt-4'>Investments</li>
            <li className='pt-4'>Kuda card</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Business</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Discover Business</li>
            <li className='pt-4'>Business Registration</li>
            <li className='pt-4'>SoftPOS</li>
            <li className='pt-4'>Invoicing</li>
            <li className='pt-4'>Electricity</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Company</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Blog</li>
            <li className='pt-4'>Press</li>
            <li className='pt-4'>Join Our Team</li>
            <li className='pt-4'>About Us</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Help</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Get Help</li>
            <li className='pt-4'>Scam Awareness</li>
            <li className='pt-4'>FAQs</li>
            <li className='pt-4'>Security</li>
            <li className='pt-4'>Self Help</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Transparency</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Terms & Conditions</li>
            <li className='pt-4'>Privacy Policy</li>
            <li className='pt-4'>Information Security Policy</li>
            <li className='pt-4'>Cookie Policy</li>
          </ul>
        </div>
      </div>
      <div className='p-5 mt-5 font-[Mulish] md:grid grid-cols-4 gap-10 mb-10'>
        <div>
          <h1 className='text-primary mb-4 text-[14px] font-[700]'>Contact</h1>
          <span className='text-[14px] text-primary font-[700] underline'>help@apenia.com</span>
          <div className='mb-5 flex flex-row gap-4 mt-[1.2rem]'>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-youtube"></ion-icon>
            </div>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-primary mb-4 text-[14px] font-[700]'>Nairobi</h1>
          <ul>
            <li className='text-[12px]'>151 Herbert Macaulay Way, Yaba,</li>
            <li className='text-[12px]'>Lagos,</li>
            <li className='text-[12px]'>Nigeria</li>
          </ul>
        </div>
      </div>
      <span className='px-5 text-[12px] font-[Mulish]'>© 2023 Apenia Technologies Ltd. All rights reserved.</span>
    </>    
  )
}

export default Footer