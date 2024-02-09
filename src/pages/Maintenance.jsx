import React from "react";
import "./maintenance.scss";
import logo from '../assets/LogoNeu.png'

const Maintenance = () => {
  return (
    <div className="maintenance__container">
        <div className="container__main">
        <div className="maintenance__left">
      <h2>Wartungsarbeiten im Gange</h2>
      <p>
        Liebe Besucherinnen und Besucher, aktuell befinden sich unsere kreativen
        Köpfe im Hintergrund in intensiven Wartungsarbeiten, um Ihr
        Nutzungserlebnis zu verbessern. Wir bitten um Ihr Verständnis und sind
        bald wieder für Sie da.
      </p>
      <p>
      In der Zwischenzeit stehen wir Ihnen gerne über <span>info@scorpmedia.de</span> zur Verfügung. Wir danken Ihnen für Ihr Vertrauen und Ihre Geduld.
      </p>
      </div>
      <div className="maintenance__right">
        <img src={logo} width={"30%"} alt="logo scorpmedia"/>
      </div>
      </div>
    </div>
  );
};

export default Maintenance;
