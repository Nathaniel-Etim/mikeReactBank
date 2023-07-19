import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TransactionInput from "./transferInput";
import { useSelector } from "react-redux";

function TransaferPage() {
  const currentuser = useSelector((store) => store.event.currentAccount);

  const navigate = useNavigate();

  function onGotoHomePageFn() {
    navigate("/logedIn");
  }

  return (
    <TransferPageContainer>
      <UserDetails onClick={onGotoHomePageFn}>
        <div>
          <h3>{currentuser.name}</h3>
          <h6>Source Account - {currentuser.accountNumber} </h6>
        </div>
        <h4>{currentuser.balance}</h4>
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
  padding: 20px;
  height: 70px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* margin: 10px; */

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
    /* margin-right: 10px; */
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
