import React from "react";
import "./services.scss";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const Services = () => {
  return (
    <div id="services" className="serviceContainer">
      <div className="service__header_box">
        <p>Leistungen</p>
        <h3>Was können wir für dich tun?</h3>
        <div className="line"></div>
        <p>
          Wir entwickeln alles für deine Onlinepräsenz. Egal ob einzigartige
          Designs, oder eine moderne Webseite.
        </p>
      </div>
      <div className="serviceBox_container">
        <div className="serviceBox">
          <CodeOutlinedIcon color="primary" fontSize="large" />
          <h2>Webentwicklung</h2>
          <div className="line_box"></div>
          <p>
            Eine moderne Webseite ist in der jetzigen Zeit, in der
            Digitalisierung eine große Rolle spielt, enorm wichtig. Egal ob eine
            Eigenentwicklung, oder ein CMS System (z.B. Wordpress) - wir lassen
            dich gut aussehen.
          </p>
        </div>
        <div className="serviceBox boxshadow">
          <DesignServicesOutlinedIcon color="primary" fontSize="large" />
          <h2>Grafikdesign</h2>
          <div className="line_box"></div>
          <p>
            Wir entwerfen einzigartige Logos und Marketingmaterialien, die die
            Stimme und Persönlichkeit deines Unternehmens vermitteln.
          </p>
        </div>
        <div className="serviceBox">
          <LocalGroceryStoreOutlinedIcon color="primary" fontSize="large" />
          <h2>E-commerce</h2>
          <div className="line_box"></div>
          <p>
            Du willst deine Produkte online anbieten, um deinen Umsatz zu
            steigern? Kein Problem! Wir entwickeln dir einen ansprechenden
            Onlineshop. Dafür nutzen wir Shopify, oder Woocommerce, um die
            Cybersecurity zu garantieren.
          </p>
        </div>
      </div>
      <div className="serviceBox_container">
        <div className="serviceBox boxshadow">
          <CameraAltOutlinedIcon color="primary" fontSize="large" />
          <h2>Produktfotos</h2>
          <div className="line_box"></div>
          <p>
            Verabschiede dich von schlechter Qualität und langweiligen
            Produktbildern. Begrüße ein völlig neues Kundenerlebnis mit
            wunderschönen, hochwertigen benutzerdefinierten Fotos.
          </p>
        </div>
        <div className="serviceBox">
          <BrushOutlinedIcon color="primary" fontSize="large" />
          <h2>Digital Art</h2>
          <div className="line_box"></div>
          <p>
            Von umwerfenden Fotomontagen und bunten Illustrationen, bis hin zu
            vollständigen Animationen. Wir sind in der Lage, alles zu erstellen,
            was du dir vorstellen kannst.
          </p>
        </div>
        <div className="serviceBox boxshadow">
          <RecommendOutlinedIcon color="primary" fontSize="large" />
          <h2>Web Support</h2>
          <div className="line_box"></div>
          <p>
            Wir wollen, dass du dich komplett auf dein Kerngeschäft
            konzentrierst. Gerne übernehmen wir für dich die Webseitenpflege.
            Darunter fallen regelmäßige Backups, Aktualisierung der
            Framework/Plugins, oder auch das Einpflegen von neuen Inhalten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
