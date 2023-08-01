import React from "react";
import styled from "styled-components";
import { Btn } from "../homecontent/homeLogin";
import { useDispatch } from "react-redux";
import { userInterfaceAction } from "../../store/UIstore";
// import {  } from "../beneficiaries/addBeneficiary";

function TransactionInput() {
  const dispatch = useDispatch();

  function showUserPinMenuFn() {
    dispatch(userInterfaceAction.showUserPin());
  }

  return (
    <TransactionInputContainer>
      <TheInputContainer>
        <InputContainerCustom>
          <label> Destination Account Name:</label>
          <input type="Text" required className="input-error" />
        </InputContainerCustom>
        <InputContainerCustom>
          <label> Amount:</label>
          <input type="Text" required className="input-error" />
        </InputContainerCustom>
        <InputContainerCustom>
          <label> Transaction Discription :</label>
          <input type="Text" required className="input-error" />
        </InputContainerCustom>
      </TheInputContainer>
      <TheInputContainer>
        <InputContainerCustom>
          <label> Routing Number:</label>
          <input type="Text" required className="input-error" />
        </InputContainerCustom>
        <Btn onClick={showUserPinMenuFn}>Transfer</Btn>
      </TheInputContainer>
    </TransactionInputContainer>
  );
}

export default TransactionInput;

const TransactionInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;

  @media screen and (max-width: 619px) {
    flex-direction: column;
  }
`;

const InputContainerCustom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    font-size: 15px;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    border: none;
    color: rgba(90, 99, 126, 0.749);
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  & input {
    border: none;
    border: 1px solid rgba(90, 99, 126, 0.749);
    height: 30px;
    width: 250px;
    border-radius: 9px;
    color: rgba(90, 99, 126, 0.749);

    &:focus {
      outline: none;
    }
  }
`;

const TheInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  z-index: 3;
  transition: 0.3s ease-in-out;
`;
