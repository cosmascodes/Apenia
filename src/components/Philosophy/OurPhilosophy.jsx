import React from 'react'
import image2 from "/assets/vg5.svg"
import image3 from "/assets/vg3.svg"
import image4 from "/assets/vg4.svg"
import image5 from "/assets/vg5.svg"
import image6 from "/assets/vg6.svg"
import { Slide } from 'react-awesome-reveal'

function OurPhilosophy() {
  return (
    <div className='md:px-20 flex flex-col'>
        <div className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:full select-none relative flex justify-center items-center'>
              <img src={image2} alt="logo" className="md:cursor-arrow select-none h-60" />
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:full font-[Mulish] text-center md:text-left'>
              <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
              Our Mission
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
              Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.
              </p>
            </div>
          </Slide>
        </div>
    </div>
  )
}

export default OurPhilosophy