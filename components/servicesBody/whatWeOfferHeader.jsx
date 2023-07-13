import React from "react";
import { styled } from "styled-components";

function WhatWeOfferHeader() {
  return (
    <Section>
      <div className="box"></div>
      <p>TAKE A LOOK AT</p>
      <h2>What We Offer</h2>
    </Section>
  );
}

export default WhatWeOfferHeader;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0px 20px 0px;

  & p {
    font-size: 21px;
    font-weight: 1;
    font-family: Calibri;
  }

  & h2 {
    font-size: 39px;
    margin-top: -15px;
    font-family: sans-serif;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.8);
  }
`;
