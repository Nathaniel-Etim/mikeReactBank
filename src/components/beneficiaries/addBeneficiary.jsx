import React, { useState } from "react";
import styled from "styled-components";
import { Btn } from "../homecontent/homeLogin";
import { useNavigate } from "react-router-dom";

function AddBeneficiary({ viewAddBen }) {
  const [NameInput, setNameInput] = useState("");
  const [numberInput, setNunmberInput] = useState("");
  const [BankNameInput, setBankNameInput] = useState("");
  const navigate = useNavigate();

  function OnNameInputHandelerFn(e) {
    setNameInput(e.target.value);
  }

  function OnNumberInputHandelerFn(e) {
    setNunmberInput(e.target.value);
  }

  function OnBankNameInputHandelerFn(e) {
    setBankNameInput(e.target.value);
  }

  function onGoToViewScreenFn() {
    viewAddBen(false);
  }

  return (
    <AddContainer>
      <InputContainer>
        <label> Account Name :</label>
        <input
          type="text"
          required
          onChange={OnNameInputHandelerFn}
          value={NameInput}
        />
      </InputContainer>
      <InputContainer>
        <label> Account Number :</label>
        <input
          type="text"
          required
          onChange={OnNumberInputHandelerFn}
          value={numberInput}
        />
      </InputContainer>
      <InputContainer>
        <label> Bank Name :</label>
        <input
          type="text"
          required
          onChange={OnBankNameInputHandelerFn}
          value={BankNameInput}
        />
      </InputContainer>
      <MyBtn onClick={onGoToViewScreenFn}>
        {" "}
        <h3>Add User</h3>{" "}
      </MyBtn>
    </AddContainer>
  );
}

export default AddBeneficiary;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  padding: 10px;
  gap: 20px;
`;

export const InputContainer = styled.div`
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
    border-bottom: 1px solid rgba(90, 99, 126, 0.749);
    width: 250px;
    color: rgba(90, 99, 126, 0.749);

    &:focus {
      outline: none;
    }
  }
`;

const MyBtn = styled(Btn)`
  & h3 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-size: 0.99rem;
    font-weight: 500;
    line-height: 1.5;
    color: #3e4b5b;
    text-align: left;
  }

  &:hover {
    & h3 {
      color: white;
    }
  }
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top-color: #de3561;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 180px;
  /* right: 50%; */
  left: 30%;
  z-index: 11;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 277px;
  height: auto;
  background-color: #2c2828;
  border-radius: 24px;

  @media screen and (max-width: 616px) {
    left: 20%;
  }
  @media screen and (max-width: 363px) {
    left: 10%;
    width: 250px;
  }
`;
