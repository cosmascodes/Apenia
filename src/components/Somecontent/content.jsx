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
      {/* [&>*:nth-child(even)]:flex-row-reverse */}
        <div className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:full select-none relative flex justify-center items-center'>
              <img src={image2} alt="logo" className="md:cursor-arrow select-none h-60" />
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:full font-[Mulish] text-center md:text-left'>
              <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
              It’s your money, we just help you manage it.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
              Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.
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
              Save money as you spend it, seriously.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
              You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.
              </p>
                <Link to='/' className='font-[700]'>
                See all our Savings
                  <span className="inline align-middle">
                    <ion-icon name="chevron-forward"></ion-icon>
                  </span>
                </Link>
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
              Turn off access, turn on safety.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
              Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.
              </p>
                <Link to='/' className='font-[700]'>
                Learn more about Cards
                  <span className="inline align-middle">
                    <ion-icon name="chevron-forward"></ion-icon>
                  </span>
                </Link>
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
              We’re always happy to help you.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
              You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.
              </p>
                <Link to='/' className='font-[700]'>
                Get Help
                  <span className="inline align-middle">
                    <ion-icon name="chevron-forward"></ion-icon>
                  </span>
                </Link>
            </div>
          </Slide>
        </div>
        <div className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:w-full select-none relative flex justify-center items-center'>
              <img src={image6} alt="logo" className="md:cursor-arrow select-none h-60" />
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
            <div className='md:w-full font-[Mulish] text-center md:text-left'>
              <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
              Fees as clear as glass.
              </h1>
              <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
              We’re serious about free banking, and we will never, ever charge you for anything without your consent.
              </p>
                <Link to='/' className='font-[700]'>
                See all our fees
                  <span className="inline align-middle">
                    <ion-icon name="chevron-forward"></ion-icon>
                  </span>
                </Link>
            </div>
          </Slide>
        </div>
    </div>
  )
}

export default Content