import React from "react";
import "./maintenance.scss";
import fontScorp from '../assets/Logo bright.png'
import { Link } from "react-router-dom";

const Maintenance = () => {
  return (
    <div className="maintenance__container">
        <div className="container__main">
        <div className="maintenance__left">
      <h2>Coming Soon</h2>
      <p>
        Wartungsmodus: Unsere Seite macht sich schick. <br/>
        Bleibt dran, wir sind bald zurück!
      </p>
      <Link
      className="buttonStyle"
            to='#'
            onClick={(e) => {
                window.location.href ="mailto:info@scorpmedia.de";
                e.preventdefault();
            }}
        >
            Kontaktier uns
        </Link>
      <div>
        <img src={fontScorp} alt="scorpmedia schriftzug" />
      </div>
      <div>
        <p>info@scorpmedia.de</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Maintenance;
