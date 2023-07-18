import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TransactionInput from "./transferInput";

function TransaferPage() {
  const navigate = useNavigate();

  function onGotoHomePageFn() {
    navigate("/logedIn");
  }

  return (
    <TransferPageContainer>
      <UserDetails onClick={onGotoHomePageFn}>
        <div>
          <h3>Nathaniel Erim</h3>
          <h6>Source Account - 2270055649 </h6>
        </div>
        <h4>1,500,000</h4>
      </UserDetails>
      <TransactionInput />
    </TransferPageContainer>
  );
}

export default TransaferPage;

const TransferPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  gap: 20px;
`;

const UserDetails = styled.div`
  background-color: #8080802c;
  padding: 20px 10px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & h3 {
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
  }

  & h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    gap: 5px;
    color: #334152;
  }
`;
