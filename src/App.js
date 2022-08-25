import React from "react";
import Header from "./header.js";
import General from "./General.js";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./cart.js";

//works now... no error, the usecontext not yet implemented
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
