import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Join from "./pages/join";
import Signin from "./pages/signin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/join" element={<Join/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </>
  );
};

export default App;
