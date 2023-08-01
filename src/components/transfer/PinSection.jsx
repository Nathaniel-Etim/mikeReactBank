import React, { useState } from "react";
import styled from "styled-components";
import { PopupContainer } from "../beneficiaries/addBeneficiary";
import { BackDrop } from "./transferInput";
import { Btn } from "../homecontent/homeLogin";
import { useDispatch, useSelector } from "react-redux";
import { userInterfaceAction } from "../../store/UIstore";
import { useNavigate } from "react-router-dom";

function UserPin() {
  const distatch = useDispatch();
  const navigation = useNavigate();
  const userPin = useSelector((state) => state.event.currentAccount);
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const handlePin1Change = (event) => {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);
    if (!isNaN(numericValue)) {
      setPin1(numericValue.toString().slice(0, 1));
    }
  };

  const handlePin2Change = (event) => {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);
    if (!isNaN(numericValue)) {
      setPin2(numericValue.toString().slice(0, 1));
    }
  };

  const handlePin3Change = (event) => {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);
    if (!isNaN(numericValue)) {
      setPin3(numericValue.toString().slice(0, 1));
    }
  };

  const handlePin4Change = (event) => {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);
    if (!isNaN(numericValue)) {
      setPin4(numericValue.toString().slice(0, 1));
    }
  };

  function hidePinMenu() {
    const userInputPin = pin1 + pin2 + pin3 + pin4;

    const isempty = userInputPin.trim() === "";

    if ((userPin.password === +userInputPin) & !isempty) {
      distatch(userInterfaceAction.hideUserPin());
      navigation("/logedIn");
    }

    setPin1("");
    setPin2("");
    setPin3("");
    setPin4("");
  }

  return (
    <>
      <BackDrop />
      <PopupContainer>
        <UserPinContent>
          <h5>Input pin</h5>
          <InputContainer>
            <input
              type="number"
              value={pin1}
              onChange={handlePin1Change}
              min={0}
              max={1}
              maxLength={1}
            />
            <input
              type="number"
              value={pin2}
              onChange={handlePin2Change}
              min={0}
              max={1}
              maxLength={1}
            />
            <input
              type="number"
              value={pin3}
              onChange={handlePin3Change}
              min={0}
              max={1}
              maxLength={1}
            />
            <input
              type="number"
              value={pin4}
              onChange={handlePin4Change}
              min={0}
              max={1}
              maxLength={1}
            />
          </InputContainer>
          <Btn onClick={hidePinMenu}>Continue</Btn>
        </UserPinContent>
      </PopupContainer>
    </>
  );
}

export default UserPin;

const UserPinContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;

  & h5 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.5;
    color: white;
    text-align: left;
    margin: 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 100%; */
  gap: 10px;

  & input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 30px;
    font-size: 20px;

    &:focus {
      outline: none;
    }

    &::-webkit-inner-spin-button {
      display: none;
    }
  }
`;
