import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar/NavBar";

const Impressum = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "6rem 3rem" }}>
        <h1>Impressum</h1>  <br />
        Feres Jammali <br />
        Scorpmedia <br />
        Nikolaistraße 32
        <br />
        30159 Hannover
        <br />
        Deutschland <br />
        <br />
        Tel.: 01636009519
        <br />
        E-Mail: info@scorpmedia.de <br />
        <br />
        Umsatzsteuer-Identifikationsnummer: wird nachgereicht
        <br />
        <br />
        Plattform der EU-Kommission zur Online-Streitbeilegung: 
        <a href ="https://ec.europa.eu/odr" > https://ec.europa.eu/odr</a>
        <br />
        <br />
        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
