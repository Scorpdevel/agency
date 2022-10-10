import React from "react";

import "./landing.scss";

const Landing = () => {
  return (
    <div id="home" className="landing" >
      <div className="landing_text">
        <p className="landing_item">Scorpmedia</p>
        <h1 className="landing_item">
          Die Agentur für <br /> Web- und Grafikdesign
        </h1>
        <p className="landing_item">
          Scorpmedia ist eine All-in-One-Marketinglösung, die sich um alles
          kümmert um dein Geschäft online auszubauen.
        </p>
        <div>
          <a href="#kontakt">
          <button  className="landing_button">Kontakt</button>
          </a>
          <a href="#services">
          <button className="landing_button">Angebot</button>
          </a>
        </div>
      </div>
      <div className="wave">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 700"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,700 C 0,700 0,350 0,500 C 1000.71428571428572,750 1522.8571428571429,400 1440,450 C 1440,550 1440,500 1440,700 Z"
            stroke="none"
            stroke-width="0"
            fill="#ffffff"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Landing;
