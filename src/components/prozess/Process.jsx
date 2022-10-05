import React from "react";
import "./process.scss";

const Process = () => {
  return (
    <div id="prozess"className="processContainer">
      <div className="processContainer__Inner">
        <div className="inner__header">
          <h3>Unser Prozess</h3>
          <div className="line"></div>
          <p>
          Unser Prozess um dein Unternehmen an die Spitze zu bringen
          </p>
        </div>
        <div className="inner__Body">
          <div className="inner__Body_box">
            <div className="inner__Body_box_circle">1</div>
            <div className="inner__Body_box_body">
              <h6>Kontakt aufnahme</h6>
              <p> It is a long established fact that a reader at its layout.</p>
            </div>
          </div>
          <div className="inner__Body_box">
            <div className="inner__Body_box_circle">2</div>
            <div className="inner__Body_box_body">
              <h6>Erstellung eines Konzepts</h6>
              <p> It is a long established fact that a reader at its layout.</p>
            </div>
          </div>
          <div className="inner__Body_box">
            <div className="inner__Body_box_circle">3</div>
            <div className="inner__Body_box_body">
              <h6>Entwicklung</h6>
              <p> It is a long established fact that a reader at its layout.</p>
            </div>
          </div>
          <div className="inner__Body_box">
            <div className="inner__Body_box_circle">4</div>
            <div className="inner__Body_box_body">
              <h6>Veröffentlichung</h6>
              <p> It is a long established fact that a reader at its layout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
