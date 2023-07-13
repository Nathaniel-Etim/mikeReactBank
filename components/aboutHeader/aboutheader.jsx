import React from "react";
import styled from "styled-components";
import useState from "react";

function Header() {
  return (
    <Topheader>
      <h1>About Us</h1>
      <AboutHeaderLinks>
        <li>Home</li>
        <li>|</li>
        <li>About Us</li>
      </AboutHeaderLinks>
    </Topheader>
  );
}

export default Header;

export const Topheader = styled.div`
  text-align: center;
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url("https://media.istockphoto.com/id/1328041693/photo/abstract-dollar-icon-on-blue-background-with-mockup-place-mobile-banking-and-market-concept.jpg?s=612x612&w=0&k=20&c=zyOLhnL0yW4dUB7kQoBk2s_t93LJnOX16Ug51FBg4oI=");
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

export const AboutHeaderLinks = styled.ul`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  list-style-type: none;
  margin-top: -20px;
  font-size: 17px;
`;
