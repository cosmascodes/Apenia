import React from 'react'
import { TestimonialsContents } from './testimonialcontents'

function Testimonials() {
  return (
    <>
        <div className='mt-20 '>
            <h1 className='px-5 font-[Mulish] font-[900] text-primary text-[32px] text-center'>
                Don’t just take our word for it
            </h1>
        </div>
        <div className='flex flex-row flex-nowrap gap-5 overflow-x-auto no-scrollbar p-5 pb-10 pt-10'>
            {TestimonialsContents.map((testimonial, index)=>(
                <div key={index} className='flex-mine w-[330px] drop-shadow-3xl bg-white rounded-lg p-10 text-[11px] font-[Mulish]'>
                    <p>{testimonial.text}</p>
                    <p className='mt-10 font-[900]'>{testimonial.name}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Testimonials