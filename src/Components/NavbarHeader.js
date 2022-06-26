import React, { useState } from "react";
import "./NavbarHeader.css";
// import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/Layer-2.png";

function NavbarHeader(props) {
  const [Click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!Click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const [myStyle, setMyStyle] = useState({
    color: "#06252c",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "#06252c") {
      setMyStyle({
        color: "white",
        backgroundColor: "#06252c",
      });
      setBtnText("Disable Dark Mode");
    } else {
      setMyStyle({
        color: "#06252c",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  const onCLickEvent = () => {
    toggleStyle();
  };

  return (
    <div>
      <nav className="navbar" style={myStyle}>
        <div className="navbar-container">
          <Link to="/Home">
            <img src={logo} className="navbar-logo" height="60" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={Click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={Click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item ch-text-font">
              <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item ch-text-font">
              <Link
                to="/Prices"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Prices
              </Link>
            </li>
            <li className="nav-item ch-text-font">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item ch-text-font">
              <Link
                to="/Services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item ch-text-font">
              <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>
            <li className="nav-item ch-text-font">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="togglebutton form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={onCLickEvent}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              {btnText}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarHeader;
