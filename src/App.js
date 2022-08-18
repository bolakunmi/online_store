import React, { useState } from "react";
import Header from "./header.js";
import General from "./General.js";
import "./index.css";
import Main from "./about.js";
import { Routes, Route, Link } from "react-router-dom";
import About from "./about.js";
import Cart from "./cart.js";

// put a loader!!!
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<General />} />
        {/* <Route path="about" exact element={<About />} /> */}
        <Route path="cart" exact element={<Cart />} />
      </Routes>
      {/* <General />
      <Main /> */}
    </React.Fragment>
  );
}
export default App;

