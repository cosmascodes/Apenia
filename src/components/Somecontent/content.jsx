import React from 'react'
import image1 from "/assets/vg1.svg"
import image2 from "/assets/vg5.svg"
import image3 from "/assets/vg3.svg"
import image4 from "/assets/vg4.svg"
import image5 from "/assets/vg5.svg"
import image6 from "/assets/vg6.svg"
import { Link } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";


function Content() {
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
                Borderless Cash Transfer.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                Cash transfer solutions with a borderless capability allow individuals or businesses to send and receive money across international boundaries seamlessly.
                These services typically use digital platforms and can be cost-effective compared to traditional banking wire transfers.
              </p>
            </div>
          </Slide>
        </div>
        <div className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row`}>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:full select-none relative flex justify-center items-center'>
              <img src={image3} alt="logo" className="md:cursor-arrow select-none h-60" />
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:w-full font-[Mulish] text-center md:text-left'>
              <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                Personal Budgeting and Spending.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                Personal budgeting involves creating a financial plan that outlines income, expenses, and savings goals.
                Modern budgeting tools and apps make it easy for individuals to track their spending, categorize expenses, and set budget limits.
                Effective personal budgeting promotes financial discipline, helps individuals reach their financial objectives, and ensures better money management.
              </p>
            </div>
          </Slide>
        </div>
        <div className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:w-full select-none relative flex justify-center items-center'>
              <img src={image4} alt="logo" className="md:cursor-arrow select-none h-60" />
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:w-full font-[Mulish] text-center md:text-left'>
              <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                Saving account.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                Saving money involves setting aside a portion of income for future needs or emergencies.
                Savings can be kept in various financial instruments like savings accounts and investment accounts.
                Saving is a fundamental financial practice that provides financial security and enables individuals to achieve their long-term goals.SAVE & EARN Earn up to 12%* interest a year
                Goal Save is a savings tool that grows your money at interest rates that increase over time. You can add money whenever you want and take it out when you need it.
              </p>
            </div>
          </Slide>
        </div>
        <div className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row`}>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:w-full select-none relative flex justify-center items-center'>
              <img src={image5} alt="logo" className="md:cursor-arrow select-none h-60" />
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:full font-[Mulish] text-center md:text-left'>
              <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                Investments.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                Investment involves using saved money to generate returns over time, typically by purchasing assets such as stocks, bonds, real estate, or mutual funds.
                Investments can offer the potential for wealth growth and financial security but also come with varying levels of risk.
                Diversifying an investment portfolio is a strategy to manage risk while seeking financial growth.
              </p>
            </div>
          </Slide>
        </div>
    </div>
  )
}

export default Content