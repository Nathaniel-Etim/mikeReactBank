import React, { useState } from "react";
import styled from "styled-components";

function AllBeneficiary() {
  const [beneficiaties, setBeneficiaties] = useState([
    {
      name: "Samuel jonas",
      bank: "Villa",
      accNumber: 9338362628,
    },
  ]);
  return (
    <AllContainer>
      <TransactionHeader>
        <h3>Name</h3>
        <h3>Bank</h3>
        <h3>Account Number </h3>
      </TransactionHeader>
      <EachTranction>
        <h3 className="userName">Samuel</h3>
        <h3 className="">Eco Bank</h3>
        <h4>2270055649</h4>
      </EachTranction>
    </AllContainer>
  );
}

export default AllBeneficiary;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  margin: 30px auto 0;
  background-color: #d8d3d3d3;
  padding: 10px 10px 10px 10px;
  border-radius: 2px;
  gap: 10px;
  box-sizing: border-box;
`;

export const TransactionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;

  & h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 150px;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    border: none;
    font-size: 0.81rem;
    color: rgba(90, 99, 126, 0.49);
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  & .date {
    @media screen and (max-width: 599px) {
      display: none;
    }
  }

  @media screen and (max-width: 529px) {
    & h3 {
      width: 95px;
    }
  }
`;

export const EachTranction = styled(TransactionHeader)`
  font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
    system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #3e4b5b;
  align-items: flex-start;
  justify-content: space-evenly;

  & .date {
    font-size: 10px;
  }

  & .icon {
    display: none;
  }

  & .spec {
    display: none;
  }

  @media screen and (max-width: 803px) {
    & .status {
      display: none;
    }
    & .icon {
      display: flex;
      color: #0080007d;
      width: 22px;
      height: 30px;
    }
  }

  & h3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-size: 0.99rem;
    font-weight: 500;
    line-height: 1.5;
    color: #3e4b5b;
    text-align: left;
    margin: 0;
    width: 90px;

    @media screen and (max-width: 529px) {
      width: 70px;
    }
  }

  /* & .userName {
    width: 121px;
  } */

  & h4 {
    font-weight: 500;
    font-size: 0.99rem;
    margin: 0;
    width: 90px;

    @media screen and (max-width: 529px) {
      width: 75px;
    }
  }
`;
export const FirstItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;
