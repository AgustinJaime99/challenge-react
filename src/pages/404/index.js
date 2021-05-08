import React from "react";
import { Link } from "wouter";
import Fade from "react-reveal/Fade";

export default function index() {
  return (
    <Fade>
      <div id="main-style">
        <div className="tittle-container">
          <h1 className="tittle">
            Error{" "}
            <div className="item">
              <h1 className="numbers-tittle">404</h1>
            </div>
          </h1>
        </div>
        <h2 className="sub-tittle">
          This page dosn't exist, back to <Link to="/">Home</Link>
        </h2>
      </div>
    </Fade>
  );
}
