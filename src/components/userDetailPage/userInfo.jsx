import React from "react";
import { BsBank2, BsHouse, BsMailbox, BsPhone } from "react-icons/bs";
import styled from "styled-components";
import { Line } from "../ourServices/homeServices";
import { FinancialHeaderText } from "../homeDashboard/finaincialOverview";

function UserInfoSection() {
  return (
    <InfoContainer>
      <FinancialHeaderText>
        <h4>My Details </h4>
        <Line />
      </FinancialHeaderText>
      <RowUserItem>
        <EachContent>
          <BsHouse />
          <h2>Address:</h2>
          <p>
            665 S Pear Orchard Rd suite 106-115, Ridgeland, MS 39157, United
            States
          </p>
        </EachContent>
        <EachContent>
          <BsPhone />
          <h2>Phone :</h2>
          <p>(601) 207 7178</p>
        </EachContent>
      </RowUserItem>
      <RowUserItem>
        <EachContent>
          <BsMailbox />
          <h2>Email:</h2>
          <p>kim36ny1986@gmail.com</p>
        </EachContent>
        <EachContent>
          <BsBank2 />
          <h2>Account Type:</h2>
          <p>Savings</p>
        </EachContent>
      </RowUserItem>
      {/*  */}
    </InfoContainer>
  );
}

export default UserInfoSection;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 20px;
`;

const RowUserItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 494px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 650px) {
    justify-content: center;
    gap: 30px;
  }
`;

const EachContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 250px;
  height: fit-content;
  padding: 10px;

  & h2 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1;
    color: #334152;
    margin: 0;
  }

  & p {
    text-align: left;
    font-size: 16px;
    line-height: 1.7;
    color: gray;
    font-weight: 400;
    margin: 0;
    font-family: Calibri;
  }

  @media screen and (max-width: 650px) {
    width: 150px;

    & h2 {
      font-size: 18;
    }
  }
`;
