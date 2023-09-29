import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { HeroContents } from '../components/Hero/HeroContents'
import Button from '../components/Button/Button'
import team from "/assets/team.svg";
import image2 from "/assets/mission.svg"
import image3 from "/assets/vision.svg"
import image4 from "/assets/purpose.svg"
import { Slide } from "react-awesome-reveal";

function AboutUs() {
  return (
    <>
      <section
        className="bg-[#f9f9f9] bg-cover
        font-[Mulish] md:bg-top bg-center sticky top-0 z-50"
      >
        <Navbar/>
      </section>
      <section className="px-5 md:px-20 pt-20 md:pt-10">
        <div className="font-[Mulish] flex flex-col md:flex-row md:justify-between justify-center text-center h-full md:p-20 md:text-left md:items-start">
            {HeroContents.map(( content, index )=>(
              <div key={index}>
                <h1 className="mb-1 text-primary font-[900] py-4 text-[35px] md:text-5xl md:w-[420px]">
                  {content.about.h1}
                </h1>
                <p className="text-[18px] mb-5 md:w-[340px]">
                  {content.about.p}
                </p>
                <Button name="Join Apenia "/>
              </div>
            ))}
            <div className='mt-[-10vh] flex items-start'>
                <img src={team} alt="team" className="md:cursor-pointer h-[80vh] opacity-80"/>
            </div>
        </div>
      </section>
      <section className='p-5 md:p-20 py-0 flex justify-center'>
        <div className='md:w-1/2 md:text-center font-[Mulish]'>
            <h1 className='mb-4 font-[900] text-primary text-[32px]'>About Apenia</h1>
            <p className='text-[14px] leading-8'>
              Apenia LLC is a Pan-African digital bank that aims to transform the financial landscape for African youth and informal micro-enterprises. By utilizing technology, creativity, and community, we are revolutionizing the African financial industry.
              We empower young people and traders by providing them with access to the financial products they deserve, equipping them with the confidence and resources to achieve their dreams. Our platform goes beyond banking wealth; it fosters individual worth and believes in the immense potential of humans to drive progress in the world.
            </p>
        </div>
      </section>
      <section className='flex justify-center'>
        <div className='md:px-20 flex flex-col md:w-3/4'>
        <div className='flex flex-col items-center'>
          <h1 className='px-5 font-[Mulish] font-[900] text-primary text-[32px] text-center mb-2'>Our Philosophy</h1>
        </div>
          <div className={`flex mt-10 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}>
            <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
              <div className='md:full select-none relative flex justify-center items-center'>
                <img src={image2} alt="logo" className="md:cursor-arrow select-none h-60" />
              </div>
            </Slide>
            <Slide direction="up" triggerOnce delay={2} cascade damping={1.5} className='md:w-1/2'>
              <div className='md:full font-[Mulish] text-center md:text-left'>
                <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                  Mission
                </h1>
                <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                Pioneering the banking industry with unwavering transparency and fairness, fostering equitable returns for both savers and borrowers, streamlining financial processes, and empowering individuals to realize their financial aspirations.
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
                  Vision
                </h1>
                <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                  To be the most preferred digital micro bank for Africans, leading in consumer investment opportunities while fostering trust and financial empowerment.
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
                <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                  Purpose
                </h1>
                <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
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
                  Tagline
                </h1>
                <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                Where banking meets convenience.
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
                <h1 className='text-[32px] md:pr-40 text-primary leading-[43px] font-[900]'>
                  Positioning Statement
                </h1>
                <p className='mb-5 mt-5 md:w-[315px] text-[14px]'>
                  Your Gateway to Limitless Financial Potential in the Digital Age.
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 md:p-20 font-[Mulish]">
        <div className='flex flex-col items-center'>
          <h1 className='px-5 font-[Mulish] font-[900] text-primary text-[32px] text-center mb-2'>Our values</h1>
          <p className='text-center md:w-1/3'>
            We're passionate about our values and a great work culture.
          </p>
        </div>
        <div className='flex justify-center mt-12'>
          <div className='grid md:grid-cols-3 gap-5 md:px-20'>
            <div className='p-5 h-[320px] bg-[#d8d9cfad] drop-shadow-3xl rounded-lg mb-5'>
              <div>
                <h1 className='text-[24px] font-[900] text-primary mb-3'>Integrity</h1>
                <p className='text-[13px] md:text-[11px]'>Experience the assurance of unwavering integrity in every interaction with us – where honesty, transparency, and ethical conduct are not just values we uphold, but the foundation of our commitment to building trust and enduring partnerships with our customers..</p>
              </div>
            </div>
            <div className='p-5 h-[320px] bg-[#ffcdb88e] drop-shadow-3xl rounded-lg mb-5'>
              <div>
                <h1 className='text-[24px] font-[900] text-primary mb-3'>Creativity and innovation</h1>
                <p className='text-[13px] md:text-[11px]'>Embark on a journey with us that celebrates creativity and innovation at its core. We are dedicated to pushing boundaries, embracing fresh ideas, and pioneering inventive solutions to not only meet your needs but exceed expectations, ensuring a partnership that thrives on continuous progress and ingenuity..</p>
              </div>
            </div>
            <div className='p-5 h-[320px] bg-[#ecd2dc] drop-shadow-3xl rounded-lg mb-5'>
              <div>
                <h1 className='text-[24px] font-[900] text-primary mb-3'>Team work</h1>
                <p className='text-[13px] md:text-[11px]'>Elevate your experience with us as we embrace the power of teamwork. Our collaborative spirit ensures that you benefit from a collective synergy, where diverse skills and perspectives converge to deliver solutions that are greater than the sum of their parts. Together, we achieve more, setting the stage for shared success and mutual growth.</p>
              </div>
            </div>
            {/* <div className='p-5 h-[320px] bg-[#adc4ce6d] drop-shadow-3xl rounded-lg mb-5'>
              <div>
                <h1 className='text-[24px] font-[900] text-primary mb-3'>Unity of purpose</h1>
                <p className='text-[13px] md:text-[11px]'>Join us in our pursuit of excellence, where unity of purpose reigns supreme. Every effort, every decision, and every achievement is driven by a shared commitment to a common goal. Together, we navigate challenges, celebrate victories, and forge a path toward success with a singular focus that unites us in purpose and propels us forward as a cohesive and determined team.</p>
              </div>
            </div>
            <div className='p-5 h-[320px] bg-[#d1eeffaf] drop-shadow-3xl rounded-lg mb-5'>
              <div>
                <h1 className='text-[24px] font-[900] text-primary mb-3'>Respect and dignity for the customers</h1>
                <p className='text-[13px] md:text-[11px]'>Experience service that goes beyond transactions – with us, it's about unwavering respect and dignity for every customer. We prioritize your unique needs, ensuring that every interaction reflects a commitment to understanding, valuing, and honoring your perspective. Your satisfaction is not just a goal; it's a reflection of the genuine respect and dignity we bring to every customer relationship.</p>
              </div>
            </div>
            <div className='p-5 h-[320px] bg-[#e2d1ffaf] drop-shadow-3xl rounded-lg mb-5'>
              <div>
                <h1 className='text-[24px] font-[900] text-primary mb-3'>Effective corporate governance</h1>
                <p className='text-[13px] md:text-[11px]'>Choose confidence and stability with our commitment to effective corporate governance. Our organization is built on a foundation of transparency, accountability, and strategic decision-making. With a governance structure that prioritizes ethical practices and prudent management, we ensure the long-term success of our enterprise, earning the trust and confidence of our stakeholders.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="mt-14 mb-14 px-2 md:px-20 border-t border-t-slate-200">
        <Footer/>
      </section>
    </>
  )
}

export default AboutUs