import React from 'react'
import appstore from "/assets/appstore.svg";
import playstore from "/assets/playstore.svg";
import globe from "/assets/globe.svg";
import { HeroContents } from './HeroContents'

function Hero() {
  return (
        <div className="font-[Mulish] flex flex-col md:flex-row justify-between pt-20 text-center md:h-[80vh] md:px-20 md:text-left md:items-center">
          {HeroContents.map(( content, index )=>(
            <div key={index}>
              <h1 className="mb-1 text-primary font-[800] py-4 text-[35px] md:text-5xl md:w-[420px]">
                {content.Homepage.h1}
              </h1>
              <p className="text-[18px] mb-5 md:w-[340px] leading-[26px]">
                {content.Homepage.p}
              </p>
              <div className=' flex justify-center md:justify-start h-[80px] '>
                <div className='flex flex-row items-center '>
                  <img src={appstore} alt="appstore" className="md:cursor-pointer h-[100px] md:ml-[-16px]"/>  
                  <img src={playstore} alt="playstore" className="md:cursor-pointer h-[110px]  ml-[-16px]"/>    
                </div>            
              </div>
            </div>
          ))}
          <div className='mt-[-10vh] md:mt-[-4vh]'>
            <img src={globe} alt="globe" className="md:cursor-pointer h-[80vh] opacity-70"/>
          </div>          
        </div>
  )
}

export default Hero