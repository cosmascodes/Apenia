import React from 'react'
import image from "/assets/vg5.svg"
import Button from './Button/Button'

function JoinCard() {
  return (
    <div className='flex justify-center md:p-20'>
        <div className='w-full h-96 relative'>
            <div className='w-full md:h-[22rem] bottom-0 left-0 border border-red-300 bg-red-200 absolute rounded-md drop-shadow-3xl'>
                <div className='md:w-1/2 flex justify-center h-full flex-col p-10 font-[Mulish]'>
                    <h1 className='text-[32px] font-[900] text-primary'>
                        The money app for Africans.
                    </h1>
                    <p className='text-[14px] mb-5 mt-2'>
                        Save, spend, send and invest money across borders.
                    </p>
                    <Button/>
                </div>                
            </div>
            <div className='hidden md:block md:absolute bottom-0 -right-2 overflow-hidden'>
                <img src={image} alt="image" className="md:cursor-none h-[29rem] mb-[-4rem]" />
            </div>
        </div>
    </div>
  )
}

export default JoinCard