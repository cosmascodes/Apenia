import React from 'react'
import openaccount from "/assets/openaccount.png";
import download from "/assets/download.png";
import access from "/assets/24hr.png";
import interest from "/assets/interest.png";
import credit from "/assets/credit.png";

function Cards() {
  return (
    <div className='md:px-20 md:pt-20 grid md:grid-cols-3 gap-3'>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={openaccount} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
                <h1 className='text-[16px] font-[900] text-primary mb-3'>Empower Yourself</h1>
            <p className='font-[500] text-[13px]'>Harness AI for effortless self-registration and personalized banking solutions, redefining empowerment in modern finance.</p>
          </div>
        </div>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={download} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
                <h1 className='text-[16px] font-[900] text-primary mb-3'>Download Apenia App</h1>
            <p className='font-[500] text-[13px]'>Easily access Apenia via our intuitive app or dial *xxxx# for swift, AI-enhanced account setup, redefining convenience in banking.</p>
          </div>
        </div>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={access} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
                <h1 className='text-[16px] font-[900] text-primary mb-3'>Unleash the Power of 24/7 Banking</h1>
            <p className='font-[500] text-[13px]'>Experience unparalleled banking convenience with Apenia, leveraging AI for 24/7 access, empowering you to manage finances seamlessly, anytime, anywhere.</p>
          </div>
        </div>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={interest} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
                <h1 className='text-[16px] font-[900] text-primary mb-3'>Grow Your Savings</h1>
            <p className='font-[500] text-[13px]'>
Leverage Apenia to optimize your financial potential with competitive interest rates, powered by AI, maximizing returns on your account balances.</p>
          </div>
        </div>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={credit} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
                <h1 className='text-[16px] font-[900] text-primary mb-3'>Unlock Your Financial Goals</h1>
            <p className='font-[500] text-[13px]'>
Empower your financial journey with Apenia's AI-driven credit access, seamlessly fulfilling your aspirations without unnecessary hurdles or delays.</p>
          </div>
        </div>
    </div>
  )
}

export default Cards