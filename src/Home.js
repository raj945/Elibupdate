import "./styles.css";
import "./nav.css";
import React from "react";
import Card from "./card";
import { Library } from "./data";
import Books from "./connect";
import Nav from "./nav";

import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <Nav />
      <div className="land">
        <div className="maintext">Hello World</div>
        {/* <div className="mainimage">
          <img src={img} alt="img.jpg" />
        </div> */}
      </div>
      <div className="body">
        <h1 id="text">Books</h1>
        <div id="books">
          <Books />
        </div>
        <h1 id="text">Books - 2</h1>
        <Books />
      </div>
    </div>
  );
}
