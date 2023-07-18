import React, { useState } from "react";
import { BsFilePdf, BsPlusCircle, BsWallet } from "react-icons/bs";
import styled from "styled-components";
import { Line } from "../ourServices/homeServices";
import { Btn } from "../homecontent/homeLogin";
// import { CardStyled } from "../../App";

function FinancialOverview() {
  const [finanacialCard, _setFinancialCard] = useState([
    {
      icon: <BsWallet />,
      text: "Make transfer",
      extraIcon: <BsPlusCircle />,
    },
    {
      icon: <BsFilePdf />,
      text: "Get statement",
    },
  ]);

  const eachUserCard = finanacialCard.map((element, index) => {
    return (
      <FinancialCard key={index}>
        {element.icon}
        <FinancialCardContent>
          <h6>Avalable balance</h6>
          <h4>$1,500,00</h4>
        </FinancialCardContent>
        <FinancialBtn>
          {element.text === "Make transfer" ? element.extraIcon : element.icon}
          <h5>{element.text}</h5>
        </FinancialBtn>
      </FinancialCard>
    );
  });
  return (
    <FinancialOverVideContainer>
      <FinancialHeaderText>
        <h4>Financial overview</h4>
        <Line />
      </FinancialHeaderText>
      <EachFinanceItem>{eachUserCard}</EachFinanceItem>
    </FinancialOverVideContainer>
  );
}

export default FinancialOverview;

const FinancialOverVideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const FinancialHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 0px 10px;
  gap: 10px;
  /* border-bottom: 1px solid gray; */

  & h4 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1.2;
    color: #334152;
    margin: 0;
  }
`;
export const CardStyled = styled.div`
  background-color: whitesmoke;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #f5f5f55e;
  border-radius: 10px;
  cursor: pointer;
`;

const FinancialCard = styled(CardStyled)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;

  &:hover {
    background-color: #d8d3d3b8;
  }
`;

const FinancialCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;

  & h6 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1.2;
    color: #334152;
    margin: 0;
  }

  & h4 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1.2;
    color: #334152;
    margin: 0;
    font-size: 25px;
  }
`;

const FinancialBtn = styled(Btn)`
  gap: 5px;
`;

const EachFinanceItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media screen and (max-width: 669px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
