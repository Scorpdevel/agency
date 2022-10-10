import React from "react";
import "./process.scss";

const Process = () => {
  return (
    <div id="prozess" className="processContainer">
      <div className="processContainer__Inner">
        <div className="inner__header">
          <h3>Unser Prozess</h3>
          <div className="line"></div>
          <p>Unser Prozess um dein Unternehmen an die Spitze zu bringen</p>
        </div>
        <div className="inner__Body">
          <div className="inner__Body_box">
            <div className="inner__Body_box_circle">1</div>
            <div className="inner__Body_box_body">
              <h6>Kontaktaufnahme</h6>
              <p>
                Wir treffen uns mit unseren Kunden von Angesicht zu Angesicht
                oder virtuell, um ein erstes Gespräch zu führen und Wünsche und
                Ziele herauszuarbeiten.
              </p>
            </div>
          </div>
          <div className="inner__Body_box">
            <div className="inner__Body_box_circle">2</div>
            <div className="inner__Body_box_body">
              <h6>Konzeptionierung</h6>
              <p>
                Während dieser Phase können unsere Kunden den Designprozess
                Schritt für Schritt verfolgen und sich aktiv einbringen.
              </p>
            </div>
          </div>
          <div className="inner__Body_box">
            <div className="inner__Body_box_circle">3</div>
            <div className="inner__Body_box_body">
              <h6>Entwicklung</h6>
              <p>
                Im nächsten Schritt wird aus einer Idee Realität. Unter
                Berücksichtigung individueller Kundenwünsche werden die Designs
                finalisiert.
              </p>
            </div>
          </div>
          <div className="inner__Body_box">
            <div className="inner__Body_box_circle">4</div>
            <div className="inner__Body_box_body">
              <h6>Anwendung</h6>
              <p>
                Die Designs stehen bereit zur Veröffentlichung. Wir arbeiten eng
                mit unseren Kunden zusammen, um diese ideal für die Umsetzung
                der Ziele und Wünsche einzusetzen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
