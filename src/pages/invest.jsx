import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { HeroContents } from '../components/Hero/HeroContents'
import Button from '../components/Button/Button'
import team from "/assets/team.svg";
import image2 from "/assets/vg5.svg"
import image3 from "/assets/vg3.svg"
import { Slide } from "react-awesome-reveal";
import JoinCard from '../components/JoinCard'

function Invest() {
  return (
    <>
        <section
        className="bg-[#f9f9f9] bg-cover
        font-[Mulish] md:bg-top bg-center sticky top-0 z-50"
        >
        <Navbar/>
        </section>
        <section className="px-5 md:px-20">
        <div className="font-[Mulish] flex flex-col md:flex-row md:justify-between justify-center text-center h-full md:p-20 md:text-left md:items-start">
            {HeroContents.map(( content, index )=>(
                <div key={index}>
                <h1 className="mb-1 text-primary font-[900] py-4 text-[35px] md:text-5xl md:w-[420px]">
                    {content.invest.h1}
                </h1>
                <p className="text-[18px] mb-5 md:w-[340px]">
                    {content.invest.p}
                </p>
                <Button name="Invest in Business"/>
                </div>
            ))}
            <div className='mt-[-10vh] flex items-start'>
                <img src={team} alt="team" className="md:cursor-pointer h-[80vh] opacity-80"/>
            </div>
        </div>
        </section>
        <section className='flex justify-center'>
        <div className='md:px-20 flex flex-col md:w-3/4'>
            <div className={`flex mt-20 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
            <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                <div className='md:full select-none relative flex justify-center items-center'>
                <img src={image2} alt="logo" className="md:cursor-arrow select-none h-60" />
                </div>
            </Slide>
            <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                <div className='md:full font-[Mulish] text-center md:text-left'>
                <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                    Our mission
                </h1>
                <p className='mb-5 mt-5 text-[14px]'>
                    We're giving Africans around the world the tools to make better financial decisions and create their own financial freedom.
                </p>
                </div>
            </Slide>
            </div>
            <div className={`flex mt-20 gap-10 justify-between flex-col-reverse md:flex-row`}>
            <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                <div className='md:full select-none relative flex justify-center items-center'>
                <img src={image3} alt="logo" className="md:cursor-arrow select-none h-60" />
                </div>
            </Slide>
            <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                <div className='md:w-full font-[Mulish] text-center md:text-left'>
                <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                    Our vision
                </h1>
                <p className='mb-5 mt-5 text-[14px]'>
                    We're giving Africans around the world the tools to make better financial decisions and create their own financial freedom.
                </p>
                </div>
            </Slide>
            </div>
            <div className={`flex mt-20 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
            <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                <div className='md:full select-none relative flex justify-center items-center'>
                <img src={image2} alt="logo" className="md:cursor-arrow select-none h-60" />
                </div>
            </Slide>
            <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                <div className='md:full font-[Mulish] text-center md:text-left'>
                <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                    Our purpose
                </h1>
                <p className='mb-5 mt-5 text-[14px]'>
                    We're giving Africans around the world the tools to make better financial decisions and create their own financial freedom.
                </p>
                </div>
            </Slide>
            </div>
        </div>
        </section>
        <section className="px-5 md:px-20">
            <JoinCard/>
        </section>
        <section className="mt-14 mb-14 px-2 md:px-20 border-t border-t-slate-200">
            <Footer/>
        </section>
    </>
  )
}

export default Invest