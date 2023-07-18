import React, { useState } from "react";
import { styled } from "styled-components";
import { BsBookHalf, BsTrophyFill, BsBank2 } from "react-icons/bs";
import { Container } from "../homecontent/homeLoan";

function CoreValue() {
  const [services, setServices] = useState([
    {
      icon: <BsBookHalf className="icon" />,
      title: "Teamwork",
      text: "A commitment to common goals based on open and honest communication.",
    },
    {
      icon: <BsTrophyFill className="icon" />,
      title: "Trustworthy",
      text: "Forbes recognizes Hypex Financial Trust Bank for expertise and integrity in consulting.",
    },

    {
      icon: <BsBank2 className="icon" />,
      title: "Personality",
      text: "In Hypex Financial Trust Bank, everyone is given the power to create and share ideas, without barriers.",
    },
  ]);

  const aboutCoreValues = services.map((element, index) => {
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
    <Container>
      <CoreValuesContainer>
        <TopServiceContent>
          <Line></Line>
          <h2>Core Value</h2>
          <h4>
            WITH THESE VALUES, WE EMBRACE OUR MISSION TO BRING EACH CLIENT THE
            BEST SERVICE.{" "}
          </h4>
        </TopServiceContent>
        <GridService>{aboutCoreValues}</GridService>
      </CoreValuesContainer>
    </Container>
  );
}

export default CoreValue;

const CoreValuesContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  width: 95%;
  /* gap: 5px; */
`;

export const Line = styled.div`
  width: 30px;
  height: 6px;
  border-radius: 5px;
  background-color: #af1414d5;
`;

const TopServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
  gap: 5px;
  box-sizing: border-box;

  & h4 {
    font-size: 12px;
    color: gray;
    font-weight: 400;
    margin: 0;
    text-align: center;
  }
  & h2 {
    font-size: 35px;
    color: #000000c4;
    font-weight: 800;
    margin: 0;
  }
`;

const GridService = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0 5px 0;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  place-items: center;
  /* background-color: #f5f5f56b; */

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 280px;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 5px;

  padding: 10px;
  height: 150px;

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
    color: white;
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
    font-family: Calibri;
    line-height: 1.7;
    margin: 0;
  }
`;
