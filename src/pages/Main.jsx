import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import Content from "../components/Somecontent/content";
import Testimonials from "../components/Testimonials/Testimonials";
import JoinCard from "../components/JoinCard";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <section
        className="bg-[#f9f9f9] bg-cover
        font-[Mulish] md:bg-top bg-center sticky top-0 z-50"
      >
        <Navbar />
      </section>
      <section className="px-5 md:px-20">
        <Hero/>
      </section>
      <section className="px-5 md:px-20">
        <Cards/>
      </section>
      <section className="px-5 md:px-20">
        <Content/>
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
  );
};

export default Main;
