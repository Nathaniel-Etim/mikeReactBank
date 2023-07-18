import React, { useState } from "react";
import { styled } from "styled-components";
import {
  BsPersonFill,
  BsHouseFill,
  BsCreditCardFill,
  BsTrophyFill,
  BsPeopleFill,
  BsCurrencyDollar,
} from "react-icons/bs";

function WhatWeOfferBody() {
  const [Offer, setOffer] = useState([
    {
      icon: <BsPersonFill />,
      header: "Off-shore Accounts",
      writing:
        "We Offer Offshore Account \
      for easy and reliable\
      International Transactions",
    },
    {
      icon: <BsHouseFill />,
      header: "Mortages",
      writing:
        "Mortgages Whether you’re purchasing your first home, buying a vacation property, or refinancing an existing mortgage, Hart County Trust Bank Residential Loan Consultants can help you navigate the rewarding path to homeownership",
    },
    {
      icon: <BsCreditCardFill />,
      header: "Credit Cards",
      writing:
        "We are dedicated to providing you with more flexible and useful credit tools – and our selection of Hart County Financial Trust Bank Visa® Credit Cards delivers on this commitment.Used for everyday expenses.",
    },
  ]);

  const [Offer2, setOffer2] = useState([
    {
      icon: <BsPeopleFill />,
      header: "consultancy",
      writing:
        "A commitment to common goals \
        based on open and honest\
        communication.",
    },
    {
      icon: <BsTrophyFill />,
      header: "Bonds and Guarantee",
      writing:
        "We provide services that support your business by demonstrating your creditworthiness and ability to meet contractual obligations.",
    },
    {
      icon: <BsCurrencyDollar />,
      header: "Cash Management",
      writing:
        "Our Cash management platform is an electronic collections platform which provides online real-time updates for monitoring and tracking transactions.",
    },
  ]);

  const displayCards = Offer.map((eachone) => {
    return (
      <Card>
        <IconTotalCover>
          <IconCover>{eachone.icon}</IconCover>
        </IconTotalCover>
        <CardWrite>
          <h1>{eachone.header}</h1>
          <p>{eachone.writing}</p>
        </CardWrite>
      </Card>
    );
  });

  const displayCards2 = Offer2.map((eachone) => {
    return (
      <Card>
        <IconTotalCover>
          <IconCover>{eachone.icon}</IconCover>
        </IconTotalCover>
        <CardWrite>
          <h1>{eachone.header}</h1>
          <p>{eachone.writing}</p>
        </CardWrite>
      </Card>
    );
  });

  return (
    <div>
      <CardCover>{displayCards}</CardCover>
      <CardCover>{displayCards2}</CardCover>
    </div>
  );
}

export default WhatWeOfferBody;

const IconCover = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const CardCover = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
  gap: 4rem;

  @media screen and (max-width: 800px) {
    diplay: flex;
    flex-direction: column;
    padding: 10px 20px;
  }
`;

const CardWrite = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  line-height: 1.7;

  & h1 {
    font-size: 20px;
    font-weight: 800;
    font-family: sans-serif;
  }

  & p {
    margin-top: -1px;
  }
`;

const IconTotalCover = styled.div`
  width: 20%;
`;
