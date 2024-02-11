import React from "react";
import "./maintenance.scss";
import fontScorp from "../assets/Logo bright.png";

const Maintenance = () => {
  return (
    <div className="maintenance__container">
      <div className="container__main">
        <div className="maintenance__left">
          <h2>Coming Soon</h2>
          <p>
            Wartungsmodus: <br />
            Unsere Seite macht sich schick. <br />
            Bleibt dran, wir sind bald zurück!
          </p>
          {/* <Link
      className="buttonStyle"
            to='#'
            onClick={(e) => {
                window.location.href ="mailto:info@scorpmedia.de";
                e.preventdefault();
            }}
        >
            Kontaktiere uns
        </Link> */}
          <button className="buttonStyle">
            <a href="mailto:info@scorpmedia.de?body=My custom mail body">
              Kontaktiere uns
            </a>
          </button>
          <div>
            <img src={fontScorp} alt="scorpmedia schriftzug" />
          </div>
          <div className="info_mail">
            <p>info@scorpmedia.de</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
