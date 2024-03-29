import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo-a.svg";
import Button from "../Button/Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white drop-shadow-3xl">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 px-5 py-4 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex text-sm md:text-base hidden items-center gap-1 font-[Mulish] font-[700]">
          <NavLinks />
          <li className="px-3">
            <Link to="/invest">Invest in Business</Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <div className="flex text-sm sm:text-base font-[700] items-center gap-4">
            <Link to="http://waitwhile.com/locations/apenia">Sign in</Link>
            <Link to="/join">
              <Button name="Join Apenia" />
            </Link>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-white fixed w-full h-screen top-0 overflow-y-auto bottom-0 py-24 pl-4 ${
            open ? "left-0" : "left-[-100%]"
          } duration-200`}
        >
          <NavLinks />
          <li className="px-3">
            <Link to="/invest">Invest in Business</Link>
          </li>
          <div className="py-5">
            <Link to="/join">
              <Button name="Join Apenia" />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
