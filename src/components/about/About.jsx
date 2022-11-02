import React from "react";
import "./about.scss";

import Pic from '../../assets/undraw_Business_deal_re_up4u.png'
const About = () => {
  return (
    <div id="ueber_uns" className="aboutContainer">
      <div className="aboutContainer__inner">
        <div className="inner__left">
          <p>Über Uns</p>
          <h4>Was ist Scorpmedia?</h4>
          <p>
            Scorpmedia ist eine All-in-One-Marketinglösung, die sich um alles
            kümmert, um dein Geschäft online auszubauen. <br /> <br /> Wir sind
            dafür da, um Unternehmen dabei zu helfen, in der digitalen Welt
            erfolgreich zu sein, ohne das Portemonnaie zu sprengen. Wir bieten
            Branding-, Design- und Wartungspakete, die perfekt für diejenigen
            sind, die ihre Online-Präsenz kontrollieren möchten, ohne auf
            Qualität oder Quantität verzichten zu müssen. <br /> <br /> Wir
            möchten, dass du deine Zeit damit verbringst, dein Unternehmen zu
            führen, nicht es zu verwalten. Scorpmedia hat es sich zur Aufgabe
            gemacht, digitales Marketing für dich und dein Team zu vereinfachen.{" "}
            <br /> <br />
          </p>
        </div>
        <div className="inner__right">
          <img loading="lazy" src={Pic} alt="about_us" />
        </div>
      </div>
    </div>
  );
};

export default About;
