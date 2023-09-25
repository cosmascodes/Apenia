import React from 'react'

function Cards() {
  return (
    <div className='md:px-20 md:pt-20 grid grid-cols-3 gap-3'>
        <div className='bg-white w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-300'></div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Self-account opening capability. </p>
          </div>
        </div>
        <div className='bg-white w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-300'></div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Simply download the Apenia App or dial *xxxx#  </p>
          </div>
        </div>
        <div className='bg-white w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-300'></div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Enjoy limitless banking with 24/7 access. </p>
          </div>
        </div>
        <div className='bg-white w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-300'></div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Earn competitive interest on your account balances. </p>
          </div>
        </div>
        <div className='bg-white w-[300px] drop-shadow-3xl p-4 rounded-lg mb-3'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-300'></div>
          <div className='mt-2'>
            <p className='font-[500] text-[13px]'>Access to credit facility.</p>
          </div>
        </div>
    </div>
  )
}

export default Cards