import React from "react";
import image1 from "/assets/vg1.svg";
import image2 from "/assets/vg5.svg";
import image3 from "/assets/vg3.svg";
import image4 from "/assets/vg4.svg";
import image5 from "/assets/vg5.svg";
import card from "/assets/phone.png";
import { Slide } from "react-awesome-reveal";

function Content() {
  return (
    <div className="md:px-20 flex flex-col">
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
              src={image1}
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
            <h1 className="text-[28px] md:pr-40 text-primary leading-[34px] font-[900]">
              Borderless Cash Transfer with AI Efficiency.
            </h1>
            <p className="mb-5 mt-5 text-[14px]">
              Unlock the borders of financial transactions with cutting-edge
              cash transfer solutions boasting borderless capabilities,
              empowering individuals and businesses to effortlessly send and
              receive money globally. Leveraging digital platforms infused with
              AI technology, these services streamline international
              transactions, offering a cost-effective alternative to
              conventional banking wire transfers. Embrace the future of
              borderless finance with seamless and efficient cross-border money
              transfers.
            </p>
          </div>
        </Slide>
      </div>
      <div
        className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row`}
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
            <h1 className="text-[28px] md:pr-40 text-primary leading-[34px] font-[900]">
              AI-Powered Budgeting and Spending.
            </h1>
            <p className="mb-5 mt-5 text-[14px]">
              Embrace personal budgeting's power, mapping income, expenses, and
              savings goals. Modern tools streamline tracking spending,
              categorizing expenses, and setting budget limits. This fosters
              discipline, aiding in financial objectives and better money
              management.
            </p>
          </div>
        </Slide>
      </div>
      <div
        className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}
      >
        <Slide
          direction="up"
          triggerOnce
          delay={2}
          cascade
          damping={1.5}
          className="md:w-1/2"
        >
          <div className="md:w-full select-none relative flex justify-center items-center">
            <img
              src={image4}
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
            <h1 className="text-[28px] md:pr-40 text-primary leading-[34px] font-[900]">
              Saving account.
            </h1>
            <p className="mb-5 mt-5 text-[14px]">
              Saving money involves setting aside a portion of income for future
              needs or emergencies. Savings can be kept in various financial
              instruments like savings accounts and investment accounts. Saving
              is a fundamental financial practice that provides financial
              security and enables individuals to achieve their long-term
              goals.SAVE & EARN Earn up to 12%* interest a year Goal Save is a
              savings tool that grows your money at interest rates that increase
              over time. You can add money whenever you want and take it out
              when you need it.
            </p>
          </div>
        </Slide>
      </div>
      <div
        className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row`}
      >
        <Slide
          direction="up"
          triggerOnce
          delay={2}
          cascade
          damping={1.5}
          className="md:w-1/2"
        >
          <div className="md:w-full select-none relative flex justify-center items-center">
            <img
              src={image5}
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
            <h1 className="text-[28px] md:pr-40 text-primary leading-[34px] font-[900]">
              Investments.
            </h1>
            <p className="mb-5 mt-5 text-[14px]">
              Investment, powered by AI, entails deploying saved funds to
              generate returns through diverse assets like stocks, bonds, real
              estate, or mutual funds. While investments promise wealth growth
              and security, they entail varying risks. AI-driven portfolio
              diversification mitigates risks while optimizing financial growth.
              Leveraging predictive analytics, AI fine-tunes investment
              strategies, ensuring a balanced portfolio tailored to individual
              risk tolerance and financial objectives.
            </p>
          </div>
        </Slide>
      </div>
      <div
        className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row-reverse`}
      >
        <Slide
          direction="up"
          triggerOnce
          delay={2}
          cascade
          damping={1.5}
          className="md:w-1/2"
        >
          <div className="md:w-full select-none relative flex justify-center items-center">
            <img
              src={card}
              alt="logo"
              className="md:cursor-arrow select-none h-2/3 md:-mt-20"
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
            <h1 className="text-[28px] md:pr-40 text-primary leading-[34px] font-[900]">
              Global Payment(Virtual and Physical Card).
            </h1>
            <p className="mb-5 mt-5 text-[14px]">
              Experience the future of cross-border transactions with AI-powered
              global payment solutions, facilitating seamless payments and
              transactions worldwide. These platforms excel in currency
              conversion, enabling users to transact in their preferred currency
              effortlessly. Leveraging advanced algorithms, global payment
              platforms streamline cross-border commerce, bolstering
              international trade and financial interactions. With AI at the
              helm, expect enhanced efficiency and accuracy, revolutionizing the
              way individuals and businesses engage in global financial
              transactions.
            </p>
          </div>
        </Slide>
      </div>
      <div
        className={`flex mt-40 gap-10 justify-between flex-col-reverse md:flex-row`}
      >
        <Slide
          direction="up"
          triggerOnce
          delay={2}
          cascade
          damping={1.5}
          className="md:w-1/2"
        >
          <div className="md:w-full select-none relative flex justify-center items-center">
            <img
              src={image5}
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
            <h1 className="text-[28px] md:pr-40 text-primary leading-[34px] font-[900]">
              Multi-currency.
            </h1>
            <p className="mb-5 mt-5 text-[14px]">
              Unlock the power of AI-enhanced currency conversion services,
              facilitating effortless exchange between currencies at real-time
              rates. Vital for international endeavors like travel, trade, and
              investment, these services ensure seamless transactions across
              diverse currencies. Whether through banks, currency exchange
              bureaus, or online platforms, AI-driven currency conversion
              guarantees accuracy and efficiency, empowering individuals and
              businesses to navigate global financial landscapes with ease and
              confidence.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Content;
