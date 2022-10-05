import React, { useState, useEffect } from "react";
import "./header.scss";
const Header = props => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }

  return (
    <div className="nav" id="navBar">
      <div className="navContainer">
        <p>test</p>
        <div>
          <ul className="navbar-nav">
            <li>Home</li>
            <li>Service</li>
            <li>Process</li>
            <li>Testimonials</li>
            <li>Portfolio</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </div>   
    </div> 
  );
};

export default Header;

