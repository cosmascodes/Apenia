import React from 'react'
import Logo from "/logo-a.svg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='p-5 md:p-10 pt-14 font-[Mulish] grid grid-cols-2 md:grid-cols-6 gap-8'>
        <div>
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12"/>        
        </div>
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Company</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Blog</li>
            <li className='pt-4'>Join Our Team</li>
            <li className='pt-4'>About Us</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Help</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Get Help</li>
            <li className='pt-4'>FAQs</li>
            <li className='pt-4'>Contact Us</li>
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
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Customer</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Save</li>
            <li className='pt-4'>Transfer & Spend</li>
            <li className='pt-4'>Invest</li>
            <li className='pt-4'>Apenia card</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px] font-[700] mb-2 text-primary'>Invest in Business</h1>
          <ul className='text-[12px]'>
            <li className='pt-4'>Become an Investor</li>
          </ul>
        </div>
      </div>
      <div className='p-5 mt-5 font-[Mulish] md:grid grid-cols-4 gap-10 mb-10'>
        <div>
          <h1 className='text-primary mb-4 text-[14px] font-[700]'>Contact</h1>
          <div className='flex flex-col'>
            <span className='text-[14px] text-primary font-[700] underline'>+254 714 99 11 11</span>
            <span className='text-[14px] text-primary font-[700] underline'>info@apenia.com</span>
          </div>
          <div className='mb-5 flex flex-row gap-4 mt-[1.2rem]'>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              
            <Link to="https://twitter.com/ApeniaBank" className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
              
            </div>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              
            <Link to="https://www.instagram.com/apenia_mfb/" className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            
            </div>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>              
            <Link to="https://www.facebook.com/apeniabank/" className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
            </div>
            <div className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>              
            <Link to="https://info@apenia.com" className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="mail-outline"></ion-icon>
            </Link>
            </div>
            <Link to="http://linkedin.com/company/apenia-mfb/" className='w-8 h-8 rounded-full border border-slate-400 flex justify-center items-center text-[1.2rem]'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </div>
        </div>
        <div>
          <h1 className='text-primary mb-4 text-[14px] font-[700]'>Nairobi</h1>
          <div className='text-primary font-[Mulish] text-[14px] font-[700] flex flex-col'>
            <span>Chandaria Incubation and innovation Center,</span>
            <span>Thika Road</span>
          </div>
        </div>
      </div>
      <span className='px-5 text-[12px] font-[Mulish]'>© 2023 Apenia Technologies Ltd. All rights reserved.</span>
    </>    
  )
}

export default Footer