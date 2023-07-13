import React, { useState } from "react";
import { styled } from "styled-components";
import {
  BsGlobe,
  BsCreditCard,
  BsHouseDoorFill,
  BsPiggyBank,
  BsCashCoin,
  BsBank2,
} from "react-icons/bs";

function OurServices() {
  const [services, setServices] = useState([
    {
      icon: <BsGlobe className="icon" />,
      title: "International Banking",
      text: "To connect you with the right people, we provide an International Banker - one person dedicated to you. This is someone you get to know and rely on for all of your international banking needs.",
    },
    {
      icon: <BsCreditCard className="icon" />,
      title: "Credit Cards  ",
      text: "We are dedicated to providing you with more flexible and useful credit tools – and our selection of Hypex Financial Trust Bank Visa® Credit Cards delivers on this commitment.Used for everyday expenses.",
    },
    {
      icon: <BsHouseDoorFill className="icon" />,
      title: "Mortgages",
      text: "Whether you are purchasing your first home, buying a vacation property, or refinancing an existing mortgage, Hypex Financial Trust Bank Residential Loan Consultants can help you navigate the rewarding path to homeownership",
    },
    {
      icon: <BsPiggyBank className="icon" />,
      title: "Accumulation goals",
      text: "Accumulation planning addresses an individual's investment needs, asset allocation, and the suitability of different types of securities in light of your goals.",
    },
    {
      icon: <BsCashCoin className="icon" />,
      title: "Secure financial services",
      text: "Your safety and security is what matters .Learn more of our 24/7 fraud protection program that actively monitors your debit card transactions and will alert you if suspicious activity occurs.",
    },
    {
      icon: <BsBank2 className="icon" />,
      title: "Good investments",
      text: "In Hypex Financial Trust Bank investment management client, you gain access to our wide array of investment experts and expertise. With a choice of multiple managers, in addition to our own manager",
    },
  ]);

  const aboutServices = services.map((element, index) => {
    return (
      <GridItem key={index}>
        <ServiceIconContainer>{element.icon}</ServiceIconContainer>
        <ServiceText>
          <h1>{element.title}</h1>
          <p>{element.text}</p>
        </ServiceText>
      </GridItem>
    );
  });

  return (
    <OurServiceContainer>
      <TopServiceContent>
        <Line></Line>
        <h4>TAKE LOOK AT </h4>
        <h2>Our services</h2>
      </TopServiceContent>
      <GridService>{aboutServices}</GridService>
    </OurServiceContainer>
  );
}

export default OurServices;

const OurServiceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  /* gap: 5px; */
`;

export const Line = styled.div`
  width: 30px;
  height: 6px;
  border-radius: 5px;
  background-color: #af1414d5;
`;

export const TopServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
  gap: 5px;
  box-sizing: border-box;
  margin-top: 70px;

  & h4 {
    font-size: 12px;
    color: gray;
    font-weight: 400;
    margin: 0;
  }
  & h2 {
    font-size: 35px;
    color: #000000c4;
    font-weight: 800;
    margin: 0;
  }
`;

const GridService = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  width: 100%;
  grid-gap: 10px;
  margin: 10px 0 5px 0;
  padding: 5px;
  box-sizing: border-box;
  place-items: center;
  /* background-color: #f5f5f56b; */
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 280px;
  gap: 10px;
  box-sizing: border-box;
  border-radius: 5px;

  padding: 10px;
  height: 250px;

  &:hover {
    background-color: #f5f5f5d2;
  }
`;

const ServiceIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #af1414d5;
  border-radius: 50%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  width: 50px;

  & .icon {
    width: 40px;
    height: 40px;
  }
`;

const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  & h1 {
    font-size: 17px;
    color: #000000c4;
    font-weight: 800;
    margin: 0;
  }
  & p {
    font-size: 18px;
    color: gray;
    font-weight: 400;
    margin: 0;
  }
`;
