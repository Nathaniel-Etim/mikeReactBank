import Raect from "react";
import styled, { keyframes } from "styled-components";

function SubForm() {
  return (
    <SubContainer>
      <ContentSub>
        <h3>Subscribe to our newsletter </h3>
        <InputContainer>
          <InputField type="mail" placeholder="Your e-mail" />
          <h4>Subcribe</h4>
        </InputContainer>
        <p>We will love to hear from you.</p>
      </ContentSub>
    </SubContainer>
  );
}
export default SubForm;

const blurAnimation = keyframes`
  from {
    filter: blur(10px);
  }
  to {
    filter: blur(0.2px);
  }
`;
const SubContainer = styled.div`
  background-image: url("https://brownboots.com/sft1196/does-your-bank-website-proposal-cover-all-the-bases.jpg");
  height: 400px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${blurAnimation} 2s linear forwards;
`;

const ContentSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 20px;
  margin: auto;

  & h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 100;
    color: white;
  }

  & p {
    color: white;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & h4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #af1414d5;
    color: white;
    height: 40px;
    width: 100px;
    cursor: pointer;
    border-radius: 0 20px 20px 0;
  }
`;

const InputField = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 20px 0 0 20px;
  outline: none;
  padding: 10px;
  background: transparent;
  box-sizing: border-box;

  & :focus {
    outline: none;
  }
`;
