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
            <p className='font-[500] text-[13px]'>Self-account opening capability. </p>
          </div>
        </div>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={download} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Simply download the Apenia App or dial *xxxx#  </p>
          </div>
        </div>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={access} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Enjoy limitless banking with 24/7 access. </p>
          </div>
        </div>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={interest} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Earn competitive interest on your account balances. </p>
          </div>
        </div>
        <div className='bg-white md:w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-100 flex justify-center items-center'>
            <img src={credit} alt="open account" className="md:cursor-pointer h-4"/>
          </div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Access to credit facility.</p>
          </div>
        </div>
    </div>
  )
}

export default Cards