import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { HeroContents } from '../components/Hero/HeroContents'
import Button from '../components/Button/Button'
import team from "/assets/team.svg";
import JoinCard from '../components/JoinCard'
import Testimonials from '../components/Testimonials/Testimonials'

function Customers() {
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
                    {content.customer.h1}
                </h1>
                <p className="text-[18px] mb-5 md:w-[340px]">
                    {content.customer.p}
                </p>
                <Button name="Join Waitlist"/>
                </div>
            ))}
            <div className='mt-[-10vh] flex items-start'>
                <img src={team} alt="team" className="md:cursor-pointer h-[80vh] opacity-80"/>
            </div>
        </div>
        </section>
        <section className='flex flex-col items-center justify-center'>
            <div className='mt-10 '>
                <h1 className='px-5 font-[Mulish] font-[900] text-primary text-[32px] text-center'>
                    How it works
                </h1>
            </div>
            <div className='flex justify-center mt-12'>
            <div className='grid md:grid-cols-3 gap-5 md:px-20'>
                <div className='p-5 h-[150px] bg-white drop-shadow-3xl rounded-lg mb-5'>
                    <p className='text-[14px] font-[700] font-[Mulish]'>
                        In terms of ability to pay -The loan instalment should not exceed 90% of the average monthly Chama contributions.
                    </p>
                </div>
                <div className='p-5 h-[150px] bg-white drop-shadow-3xl rounded-lg mb-5'>
                    <p className='text-[14px] font-[700] font-[Mulish]'>
                        Chama should have been in existence for at least 3 Months. 
                    </p>
                </div>
                <div className='p-5 h-[150px] bg-white drop-shadow-3xl rounded-lg mb-5'>
                    <p className='text-[14px] font-[700] font-[Mulish]'>
                        In addition, the Chama should be able to pay incidental costs of security perfection fees
                    </p>
                </div>
                <div className='p-5 h-[150px] bg-white drop-shadow-3xl rounded-lg mb-5'>
                    <p className='text-[14px] font-[700] font-[Mulish]'>
                        Copies of I.D. and PINS for the officials, list of all group members, their contacts and their business activities
                    </p>
                </div>
                <div className='p-5 h-[150px] bg-white drop-shadow-3xl rounded-lg mb-5'>
                    <p className='text-[14px] font-[700] font-[Mulish]'>
                        You can get a minimum KES. 50,000 and maximum of  1000000 Loan up to 3 times.
                    </p>
                </div>
                <div className='p-5 h-[150px] bg-white drop-shadow-3xl rounded-lg mb-5'>
                    <p className='text-[14px] font-[700] font-[Mulish]'>
                        Loan up to 3 times Chama saving subject to appraisals.
                    </p>
                </div>
            </div>
            </div>
        </section>
        <section>
            <Testimonials name="users"/>
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

export default Customers