import React from 'react'
import { cardquotes } from './Cardquotes'

function Cards() {
  return (
    <div className='md:p-20 flex flex-wrap gap-x-4 gap-y-10 items-center justify-center'>
        {cardquotes.map((cardquote, index)=>(
            <div key={index} className='flex flex-row items-center justify-between w-full md:flex-col bg-white md:w-[31%] h-[130px] py-5 rounded-lg drop-shadow-3xl'>      
                {/* <p className='text-black font-[Mulish] font-[900] text-[14px] text-left'>
                  {cardquote.text}
                </p> */}
            </div>
        ))}
    </div>
  )
}

export default Cards