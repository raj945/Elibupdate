import React, { useState } from "react";
import "./nav.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

export default function Nav() {
  const [search, setsearch] = useState("");

  function searchdata(e) {
    setsearch(e.target.value);
  }

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h1>Library</h1>
        </div>
        <div className="search">
          <input
            placeholder="Search For Books...."
            value={search}
            onChange={searchdata}
          />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
