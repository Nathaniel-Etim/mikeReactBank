import React from "react";
import { Topheader } from "../aboutHeader/aboutheader";
import { AboutHeaderLinks } from "../aboutHeader/aboutheader";

function ContactHeader() {
  const reStyle = {
    background:
      "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('http://entohairclinic.com/wp-content/uploads/2018/10/ento-sss-online-konsultasyon.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Topheader style={reStyle}>
      <h1>Contact us</h1>
      <AboutHeaderLinks>
        <li>Home</li>
        <li>|</li>
        <li>Contact</li>
      </AboutHeaderLinks>
    </Topheader>
  );
}

export default ContactHeader;
