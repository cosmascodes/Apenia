import React from 'react'
import image1 from "/assets/vg1.svg"
import image2 from "/assets/vg5.svg"
import image3 from "/assets/vg3.svg"
import image4 from "/assets/vg4.svg"
import image5 from "/assets/vg5.svg"
import card from "/assets/phone.png"
import { Slide } from "react-awesome-reveal";


function Content() {
  return (
    <div className='md:px-20 flex flex-col'>
        <div className={`flex mt-20 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:full select-none relative flex justify-center items-center'>
              <img src={image1} alt="logo" className="md:cursor-arrow select-none h-60" />
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:full font-[Mulish] text-center md:text-left'>
              <h1 className='text-[28px] md:pr-40 text-primary leading-[34px] font-[900]'>
                Borderless Cash Transfer.
              </h1>
              <p className='mb-5 mt-5 text-[14px]'>
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
              <h1 className='text-[28px] md:pr-40 text-primary leading-[34px] font-[900]'>
                Personal Budgeting and Spending.
              </h1>
              <p className='mb-5 mt-5 text-[14px]'>
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
              <h1 className='text-[28px] md:pr-40 text-primary leading-[34px] font-[900]'>
                Saving account.
              </h1>
              <p className='mb-5 mt-5 text-[14px]'>
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
              <h1 className='text-[28px] md:pr-40 text-primary leading-[34px] font-[900]'>
                Investments.
              </h1>
              <p className='mb-5 mt-5 text-[14px]'>
                Investment involves using saved money to generate returns over time, typically by purchasing assets such as stocks, bonds, real estate, or mutual funds.
                Investments can offer the potential for wealth growth and financial security but also come with varying levels of risk.
                Diversifying an investment portfolio is a strategy to manage risk while seeking financial growth.
              </p>
            </div>
          </Slide>
        </div>
        <div className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:w-full select-none relative flex justify-center items-center'>
              <img src={card} alt="logo" className="md:cursor-arrow select-none h-2/3 md:-mt-20" />
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:w-full font-[Mulish] text-center md:text-left'>
              <h1 className='text-[28px] md:pr-40 text-primary leading-[34px] font-[900]'>
                Global Payment(Virtual and Physical Card).
              </h1>
              <p className='mb-5 mt-5 text-[14px]'>
              Global payment solutions enable individuals and businesses to make payments and transactions across international borders.
              These services often offer currency conversion, allowing users to pay or receive funds in their preferred currency.
              Global payment platforms simplify cross-border commerce, supporting international trade and financial interactions.
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
              <h1 className='text-[28px] md:pr-40 text-primary leading-[34px] font-[900]'>
                Multi-currency.
              </h1>
              <p className='mb-5 mt-5 text-[14px]'>
                Currency conversion services allow individuals or businesses to exchange one currency for another at current exchange rates.
                This is essential for international travel, trade, and investment, ensuring transactions can occur seamlessly across different currencies.
                Currency conversion services may be offered by banks, currency exchange bureaus, or online platforms.
              </p>
            </div>
          </Slide>
        </div>
    </div>
  )
}

export default Content