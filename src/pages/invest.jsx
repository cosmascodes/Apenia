import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { HeroContents } from "../components/Hero/HeroContents";
import Button from "../components/Button/Button";
import team from "/assets/team.svg";
import image2 from "/assets/vg5.svg";
import image3 from "/assets/vg3.svg";
import { Slide } from "react-awesome-reveal";
import JoinCard from "../components/JoinCard";

function Invest() {
  return (
    <>
      <section
        className="bg-[#f9f9f9] bg-cover
        font-[Mulish] md:bg-top bg-center sticky top-0 z-50"
      >
        <Navbar />
      </section>
      <section className="px-5 md:px-20 pt-20">
        <div className="font-[Mulish] flex flex-col md:flex-row md:justify-between justify-center text-center h-full md:p-20 md:text-left md:items-start">
          {HeroContents.map((content, index) => (
            <div key={index}>
              <h1 className="mb-1 text-primary font-[900] py-4 text-[35px] md:text-5xl md:w-[420px]">
                {content.invest.h1}
              </h1>
              <p className="text-[18px] mb-5 md:w-[340px]">
                {content.invest.p}
              </p>
              <Button name="Invest in Business" />
            </div>
          ))}
          <div className="mt-[-10vh] flex items-start">
            <img
              src={team}
              alt="team"
              className="md:cursor-pointer h-[80vh] opacity-80"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-5">
        <div className="mt-20 ">
          <h1 className="px-5 font-[Mulish] font-[900] text-primary text-[32px] md:text-[38px] text-center">
            What is in for you
          </h1>
        </div>
        <div className="md:px-20 flex flex-col md:w-3/4">
          <div
            className={`flex mt-3 md:mt-20 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}
          >
            <Slide
              direction="up"
              triggerOnce
              delay={2}
              cascade
              damping={1.5}
              className="md:w-1/2"
            >
              <div className="md:full select-none relative flex justify-center items-center">
                <img
                  src={image2}
                  alt="logo"
                  className="md:cursor-arrow select-none h-60"
                />
              </div>
            </Slide>
            <Slide
              direction="up"
              triggerOnce
              delay={2}
              cascade
              damping={1.5}
              className="md:w-1/2"
            >
              <div className="md:full font-[Mulish] text-center md:text-left">
                <h1 className="text-[26px] text-primary leading-[43px] font-[900]">
                  Become an Investor
                </h1>
                <p className="mb-5 mt-5 text-sm md:text-base">
                  Tap into the potential of passive income with Apenia Bank,
                  where AI-driven investments grow effortlessly, eliminating the
                  need for constant oversight. Our intuitive platform ensures
                  attractive returns, flexible withdrawals, and unwavering
                  transparency, making it the perfect choice for those seeking a
                  hassle-free and profitable investment experience.
                </p>
              </div>
            </Slide>
          </div>
          <div
            className={`flex mt-20 gap-10 justify-between flex-col-reverse md:flex-row`}
          >
            <Slide
              direction="up"
              triggerOnce
              delay={2}
              cascade
              damping={1.5}
              className="md:w-1/2"
            >
              <div className="md:full select-none relative flex justify-center items-center">
                <img
                  src={image3}
                  alt="logo"
                  className="md:cursor-arrow select-none h-60"
                />
              </div>
            </Slide>
            <Slide
              direction="up"
              triggerOnce
              delay={2}
              cascade
              damping={1.5}
              className="md:w-1/2"
            >
              <div className="md:w-full font-[Mulish] text-center md:text-left">
                <h1 className="text-[26px] text-primary leading-[43px] font-[900]">
                  Passive income opportunity
                </h1>
                <p className="mb-5 mt-5 text-sm md:text-base">
                  Invest with Apenia and earn passive income without the need
                  for active management. Choose your investment amount and
                  duration, and let our AI-driven platform handle the rest. With
                  Apenia, enjoy attractive returns while supporting borrowers in
                  achieving their goals.
                </p>
              </div>
            </Slide>
          </div>
          <div
            className={`flex mt-20 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}
          >
            <Slide
              direction="up"
              triggerOnce
              delay={2}
              cascade
              damping={1.5}
              className="md:w-1/2"
            >
              <div className="md:full select-none relative flex justify-center items-center">
                <img
                  src={image2}
                  alt="logo"
                  className="md:cursor-arrow select-none h-60"
                />
              </div>
            </Slide>
            <Slide
              direction="up"
              triggerOnce
              delay={2}
              cascade
              damping={1.5}
              className="md:w-1/2"
            >
              <div className="md:full font-[Mulish] text-center md:text-left">
                <h1 className="text-[26px] text-primary leading-[43px] font-[900]">
                  Withdrawable principal investment
                </h1>
                <p className="mb-5 mt-5 text-sm md:text-base">
                  Apenia offers the flexibility of withdrawing your principal
                  investment at any time, without penalties. We understand
                  circumstances may change, providing peace of mind to
                  investors, knowing their funds aren't locked in.
                </p>
              </div>
            </Slide>
          </div>
          <div
            className={`flex mt-20 gap-10 justify-between flex-col-reverse md:flex-row`}
          >
            <Slide
              direction="up"
              triggerOnce
              delay={2}
              cascade
              damping={1.5}
              className="md:w-1/2"
            >
              <div className="md:full select-none relative flex justify-center items-center">
                <img
                  src={image3}
                  alt="logo"
                  className="md:cursor-arrow select-none h-60"
                />
              </div>
            </Slide>
            <Slide
              direction="up"
              triggerOnce
              delay={2}
              cascade
              damping={1.5}
              className="md:w-1/2"
            >
              <div className="md:w-full font-[Mulish] text-center md:text-left">
                <h1 className="text-[26px] text-primary leading-[43px] font-[900]">
                  Guaranteed investment transparency
                </h1>
                <p className="mb-5 mt-5 text-sm md:text-base">
                  In addition, Apenia guarantees transparency on investments. We
                  provide regular updates and reports on the performance of your
                  investment, including the interest earned and any fees
                  incurred. We believe that transparency is essential to
                  building trust with our investors and ensuring that they have
                  the information they need to make informed decisions. If
                  you're looking for a transparent, flexible, and profitable
                  investment opportunity, Apenia is the right choice for you.
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-20">
        <JoinCard />
      </section>
      <section className="mt-14 border-t border-t-slate-200">
        <Footer />
      </section>
    </>
  );
}

export default Invest;
