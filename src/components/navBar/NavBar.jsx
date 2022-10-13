import React, { useState } from "react";
import "./navbar.scss";

import Logo from '../../assets/Logo-2-min.png';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [navHead, setNavHead] = useState("nav")

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else{
      setActive("nav__menu");
      setNavHead("nav")
    }

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={navHead}>
      <div className="nav__container">
        <a href="/#home" className="nav__brand">
          <img src={Logo} alt="" loading="lazy"/>
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a onClick={navToggle} href="/#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a  onClick={navToggle} href="/#services" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a  onClick={navToggle} href="/#ueber_uns" className="nav__link">
              Über uns
            </a>
          </li>
          <li className="nav__item">
            <a onClick={navToggle} href="/#prozess" className="nav__link">
              Prozess
            </a>
          </li>
          <li className="nav__item">
            <a  onClick={navToggle} href="/#portfolio" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a  onClick={navToggle} href="/#kontakt" className="nav__link">
              Kontakt
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
