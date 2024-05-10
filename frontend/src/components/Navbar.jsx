import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">King's</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            Home
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            Services
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
