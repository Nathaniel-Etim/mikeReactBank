import React from "react";
import { styled } from "styled-components";
import LoginInput from "./LoginInput";

function LoginContainer() {
  return (
    <LoginPage>
      <CardComponent>
        <BankName>
          {" "}
          HYPEX <h4> BANK</h4>{" "}
        </BankName>
        <h5>Internet Banking Login</h5>

        <LoginInput />
      </CardComponent>
    </LoginPage>
  );
}
export default LoginContainer;

const LoginPage = styled.div`
  background-color: #0000ff64;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
`;

const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  border: 1px solid gray;
  border-radius: 9px;
  margin: 0 auto;
  max-width: 500px;
  padding: 10px;
  box-sizing: border-box;

  & h5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: #3e3c3c;
    width: 100%;
    border-bottom: 1px solid gray;
  }
`;

const BankName = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;

  font-weight: bolder;
  width: fit-content;
  gap: 3px;
  cursor: pointer;
  height: 120px;

  & h4 {
    background-color: red;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px 10px 0 10px;
  }
`;
