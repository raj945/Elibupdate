import "./styles.css";
import "./nav.css";
import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import About from "./about";
import Home from "./Home";
import Reach from "./Contact";

export default function App() {
  return (
    // <div className="App">
    //   <Nav />
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Reach />} />
      </Routes>

      <Link to="/home">Home</Link>
    </>
    //   <div className="land">
    //     <div className="maintext">Hello World</div>
    //     {/* <div className="mainimage">
    //       <img src={img} alt="img.jpg" />
    //     </div> */}
    //   </div>
    //   <div className="body">
    //     <h1 id="text">Books</h1>
    //     <div id="books">
    //       <Books />
    //     </div>
    //     <h1 id="text">Books - 2</h1>
    //     <Books />
    //   </div>
    // </div>
  );
}
