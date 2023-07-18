import React, { useState } from "react";
import styled from "styled-components";
import { Btn } from "./homeLogin";
import { Line } from "../ourServices/homeServices";

function HomeLoan() {
  const [eachLoan, setEachLoan] = useState([
    {
      image: "https://hypextb.com/public/img/bg-img/2.jpg",
      title: "We take care of you",
    },
    {
      image: "https://hypextb.com/public/img/bg-img/3.jpg",
      title: "No documents needed",
    },
    {
      image: "https://hypextb.com/public/img/bg-img/4.jpg",
      title: "Fast & easy loans",
    },
  ]);

  const EachGrid = eachLoan.map((element, index) => {
    return (
      <LoanContent key={index}>
        <GridImage image={element.image}></GridImage>
        <h4>{element.title}</h4>
      </LoanContent>
    );
  });

  return (
    <Container>
      <HomeLoanContainer>
        <LoanTextContent>
          <Line />
          <span>
            Take a look at <br /> <h2> our loan</h2>
          </span>
          <p>
            At Hypex Financial Trust Bank, our Personal Lines & Loans are
            designed to give our clients maximum flexibility and funding
            options.
          </p>
          <Btn>Apply</Btn>
        </LoanTextContent>
        {EachGrid}
      </HomeLoanContainer>
    </Container>
  );
}

export default HomeLoan;

export const HomeLoanContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  width: 90%;
  grid-gap: 10px;
  row-gap: 40px;
  margin: 70px 0 5px 0;
  padding: 5px;
  box-sizing: border-box;
  place-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f56b;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
`;

const LoanTextContent = styled.div`
  width: 250px;
  padding: 5px;
  box-sizing: border-box;
  gap: 20px;

  & span {
    font-size: 17px;
    color: gray;
    font-weight: 400;

    & h2 {
      font-size: 35px;
      color: #000000c4;
      font-weight: 800;
      margin: 0;
    }
  }

  & p {
    font-size: 17px;
    font-family: "Calibri", sans-serif;
    font-weight: 400;
    text-align: left;
    line-height: 1.7;
  }
`;

export const LoanContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  gap: 2px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  & h4 {
    font-size: 20px;
  }

  &:hover {
    color: #af1414d5;
  }
`;

export const GridImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 5px;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px; /* Adjust the height as needed */
`;
