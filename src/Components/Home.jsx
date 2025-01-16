import React from "react";
// import { Link } from "react-router";
import Card from "./Cards/card";

function Home() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="/images/background.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>API Docs</h5>
            <a href="/docs">click me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
