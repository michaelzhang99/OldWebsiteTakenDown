import React from "react";
import { Link } from "react-scroll";

function ProjectNavbar() {
  return (
    <div className="ProjLIST">
      <Link
        activeClass="active"
        to="Home"
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
        style={{ color: "white", paddingRight: "15px", paddingLeft: "10px" }}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="REVITNYU"
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        style={{ color: "white", paddingRight: "15px", paddingLeft: "15px" }}
      >
        NYU Renovation
      </Link>
      <Link
        activeClass="active"
        to="Sanjude"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={{ color: "white", paddingRight: "15px", paddingLeft: "15px" }}
      >
        881 San Jude
      </Link>
      <Link
        activeClass="active"
        to="CADschool"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={{ color: "white", paddingRight: "15px", paddingLeft: "15px" }}
      >
        CAD Parts
      </Link>
      <Link
        activeClass="active"
        to="CADCARZ"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={{ color: "white", paddingRight: "15px", paddingLeft: "15px" }}
      >
        Reverse Engineering
      </Link>
      <Link
        activeClass="active"
        to="REACTproj"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={{ color: "white", paddingRight: "15px", paddingLeft: "15px" }}
      >
        React Website
      </Link>
      <Link
        activeClass="active"
        to="BIKEZ"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={{ color: "white", paddingRight: "15px", paddingLeft: "15px" }}
      >
        Electric Bike
      </Link>
      <Link
        activeClass="active"
        to="Mothersday"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={{ color: "white", paddingRight: "15px", paddingLeft: "15px" }}
      >
        Mothersday Cards
      </Link>
    </div>
  );
}

export default ProjectNavbar;
