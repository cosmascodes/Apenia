import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { HeroContents } from "../components/Hero/HeroContents";
import Button from "../components/Button/Button";
import team from "/assets/team.svg";
import Testimonials from "../components/Testimonials/Testimonials";

function Careers() {
  return (
    <div>
      <section className="bg-[#f9f9f9] bg-cover font-[Mulish] md:bg-top bg-center sticky top-0 z-50">
        <Navbar />
      </section>
      <section className="px-5 md:px-20">
        <div className="font-[Mulish] flex flex-col md:flex-row md:justify-between justify-center text-center h-full md:p-20 md:text-left md:items-start">
          {HeroContents.map((content, index) => (
            <div key={index}>
              <h1 className="mb-1 text-primary font-[900] py-4 text-[35px] md:text-5xl md:w-[320px]">
                {content.careers.h1}
              </h1>
              <p className="text-lg md:text-2xl mb-5 md:w-[340px]">
                {content.careers.p}
              </p>
              <Button name="View All Jobs" />
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
      <section className="p-5 md:p-20 py-0 flex justify-center">
        <div className="md:w-1/2 md:text-center font-[Mulish]">
          <h1 className="mb-4 font-[900] text-primary text-[32px]">
            Join Apenia Bank
          </h1>
          <p className="text-sm md:text-base leading-8">
            Are you prepared to join a dynamic team dedicated to harnessing AI
            and transforming banking in Africa? At Apenia Bank, we're on a
            mission to empower individuals and micro-enterprises, leveraging AI
            to foster financial growth and potential. Join us in shaping the
            future of finance, where transparency, innovation, and
            community-driven values converge to make a meaningful impact.
            Explore exciting career opportunities with Apenia today and be a
            part of our journey towards a brighter financial future for all.
          </p>
        </div>
      </section>
      <section className="pt-20 md:px-20">
        <div className="flex flex-col items-center font-[Mulish]">
          <h1 className="px-5 font-[Mulish] font-[900] text-primary text-[32px] text-center mb-2">
            Job openings
          </h1>
          <p className="text-center md:w-1/3 text-sm md:text-base">
            Here are some of the current openings
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex gap-5 px-5">
            <div className="p-5 w-[80vw] md:w-72 flex justify-center items-center flex-col bg-white drop-shadow-3xl rounded-lg mb-5">
              <div className="w-[32px] h-[32px] bg-red-300 rounded-full mb-4"></div>
              <div className="text-center">
                <h1 className="text-base md:text-lg font-[900] text-primary">
                  Credit and risk manager
                </h1>
                <p className="text-sm md:text-base">Location: Nairobi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 border-t border-t-slate-200">
        <Footer />
      </section>
    </div>
  );
}

export default Careers;
