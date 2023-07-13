import React from "react";
import { Topheader } from "../aboutHeader/aboutheader";
import { AboutHeaderLinks } from "../aboutHeader/aboutheader";

function LoanHeader() {
  const reStyle = {
    background:
      "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('https://t3.ftcdn.net/jpg/02/12/02/92/240_F_212029215_4dDikoLLxlUDQ9Unv6q2ihWeUZwGu2Rp.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "0px  -180px",
  };
  return (
    <Topheader style={reStyle}>
      <h1>Loan</h1>
      <AboutHeaderLinks>
        <li>Home</li>
        <li>|</li>
        <li>Loan</li>
      </AboutHeaderLinks>
    </Topheader>
  );
}

export default LoanHeader;
