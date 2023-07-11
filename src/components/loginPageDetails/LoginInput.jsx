import React from "react";
import { BsFingerprint, BsPersonCircle } from "react-icons/bs";
import { styled } from "styled-components";

function LoginInput() {
  return (
    <BottomContainer>
      <div>
        <label>Account No:</label>
        <InputWrapper>
          <BsPersonCircle className="icon" />
          <input type="number" maxLength={11} placeholder="1234567890" />
        </InputWrapper>
      </div>
      <div>
        <label>Password:</label>
        <InputWrapper>
          <BsFingerprint className="icon" />
          <input type="number" maxLength={11} placeholder="1234567890" />
        </InputWrapper>
      </div>
      <div>
        <div>
          <input type="checkbox" checked />
          <label>Remember me</label>
        </div>
        <h6>Login</h6>
      </div>
      <p>Forgotten password ?</p>
    </BottomContainer>
  );
}

export default LoginInput;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const InputWrapper = styled.div`
  background-color: red;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
`;
