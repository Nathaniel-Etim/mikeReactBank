import React from "react";
import { Topheader } from "../aboutHeader/aboutheader";
import { AboutHeaderLinks } from "../aboutHeader/aboutheader";

function ServicesHeader() {
  const reStyle = {
    background:
      "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('https://trainingindustry.com/content/uploads/2021/03/Customer-Service-Training-for-Your-Bank-4.5.21-928x522.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Topheader style={reStyle}>
      <h1>Services</h1>
      <AboutHeaderLinks>
        <li>Home</li>
        <li>|</li>
        <li>Services</li>
      </AboutHeaderLinks>
    </Topheader>
  );
}

export default ServicesHeader;
