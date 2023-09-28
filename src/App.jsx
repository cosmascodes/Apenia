import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Join from "./pages/join";
import Signin from "./pages/signin";
import Careers from "./pages/careers";
import AboutUs from "./pages/about";
import Invest from "./pages/invest";
import Customers from "./pages/customers";
import Contactus from "./pages/contactus";
import Transfer from "./pages/transfer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/join" element={<Join/>}></Route>
        <Route path="/invest" element={<Invest/>}></Route>
        <Route path="/save" element={<Customers/>}></Route>
        <Route path="/transfer" element={<Transfer/>}></Route>
        <Route path="/contact" element={<Contactus/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/careers" element={<Careers/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
      </Routes>
    </>
  );
};

export default App;
