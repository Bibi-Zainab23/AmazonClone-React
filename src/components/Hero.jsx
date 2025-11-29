import React from "react";
import "./Index.css";

export default function Hero() {
  return (
    <div className="hero">
      <img src="/media/hero.jpg" alt="Hero" />
      <div className="hero-msg">
        <span>
          You are on amazon.com. You can also shop on Amazon India for millions
          of products with fast local delivery.
          <a href="https://www.amazon.in/" target="_blank" rel="noreferrer">
            {" "}
            Click here to go to amazon.in{" "}
          </a>
        </span>
      </div>
    </div>
  );
}
