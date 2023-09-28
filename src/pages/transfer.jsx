import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { HeroContents } from '../components/Hero/HeroContents'
import team from "/assets/team.svg";
import JoinCard from '../components/JoinCard'
import Testimonials from '../components/Testimonials/Testimonials'
import image2 from "/assets/mission.svg"
import image3 from "/assets/vision.svg"
import image4 from "/assets/purpose.svg"
import { Slide } from 'react-awesome-reveal'

function Transfer() {
  return (
    <>
        <section
        className="bg-[#f9f9f9] bg-cover
        font-[Mulish] md:bg-top bg-center sticky top-0 z-50"
        >
        <Navbar/>
        </section>
        <section className="px-5 md:px-20 pt-20 md:pt-0">
            <div className="font-[Mulish] flex flex-col md:flex-row md:justify-between justify-center text-center h-full md:p-20 md:text-left md:items-start">
                {HeroContents.map(( content, index )=>(
                    <div key={index}>
                    <h1 className="mb-1 text-primary font-[900] py-4 text-[35px] md:text-5xl md:w-[420px]">
                        {content.transfer.h1}
                    </h1>
                    <p className="text-[18px] mb-5 md:w-[340px]">
                        {content.transfer.p}
                    </p>
                    </div>
                ))}
                <div className='mt-[-10vh] flex items-start'>
                    <img src={team} alt="team" className="md:cursor-pointer h-[80vh] opacity-80"/>
                </div>
            </div>
        </section>
        <section className="px-5 py-20 md:px-20 md:py-0 font-[Mulish]">
            <div className='flex justify-center mt-12'>
            <div className='grid md:grid-cols-3 gap-5 md:px-20'>
                <div className='p-5 bg-[#ffcfcfb5] drop-shadow-3xl rounded-lg mb-5'>
                <div className='text-center'>
                    <h1 className='text-[24px] font-[900] text-primary mb-3'>Financial Security</h1>
                    <p className='text-[13px] md:text-[11px]'>Peace of mind.</p>
                </div>
                </div>
                <div className='p-5 bg-[#d8d9cfad] drop-shadow-3xl rounded-lg mb-5'>
                <div className='text-center'>
                    <h1 className='text-[24px] font-[900] text-primary mb-3'>Future Opportunities</h1>
                    <p className='text-[13px] md:text-[11px]'>Investment and growth.</p>
                </div>
                </div>
                <div className='p-5 bg-[#ffcdb88e] drop-shadow-3xl rounded-lg mb-5'>
                <div className='text-center'>
                    <h1 className='text-[24px] font-[900] text-primary mb-3'>Emergency Cushion</h1>
                    <p className='text-[13px] md:text-[11px]'>Safety net.</p>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className='flex justify-center pt-20'>
            <div className='md:px-20 flex flex-col md:w-3/4'>
                <div className={`flex mt-10 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
                    <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                    <div className='md:full select-none relative flex justify-center items-center'>
                        <img src={image2} alt="logo" className="md:cursor-arrow select-none h-60" />
                    </div>
                    </Slide>
                    <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                    <div className='md:full font-[Mulish] text-center md:text-left'>
                        <h1 className='text-[32px] md:pr-20 text-primary leading-[38px] font-[900]'>
                            Save and Grow Your Wealth
                        </h1>
                        <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                            By intelligently investing your savings, you can watch your wealth multiply steadily over time, securing your financial future.
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
                        <h1 className='text-[32px] md:pr-20 text-primary leading-[38px] font-[900]'>
                            Achieve Your Money Goals Easily
                        </h1>
                        <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                            With disciplined savings and strategic financial planning, achieving your financial milestones becomes a seamless and attainable journey.
                        </p>
                    </div>
                    </Slide>
                </div>
                <div className={`flex mt-20 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
                    <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                    <div className='md:full select-none relative flex justify-center items-center'>
                        <img src={image4} alt="logo" className="md:cursor-arrow select-none h-60" />
                    </div>
                    </Slide>
                    <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
                    <div className='md:full font-[Mulish] text-center md:text-left'>
                        <h1 className='text-[32px] md:pr-20 text-primary leading-[38px] font-[900]'>
                            Effortless Savings Made Rea
                        </h1>
                        <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                            Embrace the simplicity of automated savings, where your money grows effortlessly, allowing you to build a secure and prosperous financial path.
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

export default Transfer