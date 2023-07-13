import react from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function HomeContainer() {
  const navigate = useNavigate();

  function onGoToLoginHandelerFn() {
    navigate("Login");
  }
  return (
    <WelcomeHome>
      <WelcomeContent>
        <h6>Welcome to herpex Financial trust Bank</h6>
        <span>
          Your <h6> Bank </h6> , YOUR WAY
        </span>
        <p>
          A bank that gives you more Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam, quod. Itaque.
        </p>

        <Btn onClick={onGoToLoginHandelerFn}>Login</Btn>
      </WelcomeContent>
    </WelcomeHome>
  );
}

export default HomeContainer;

export const blurAnimation = keyframes`
  from {
    filter: blur(10px);
  }
  to {
    filter: blur(0.2px);
  }
`;

const WelcomeHome = styled.div`
  background-image: url(https://s3-us-west-2.amazonaws.com/aa.techdemand.io/wp-content/uploads/2020/05/28083325/Banking-1024x631.jpg);
  height: 400px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${blurAnimation} 2s linear forwards;
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  margin-top: 10px;
  height: 100%;
  max-width: 500px;
  background-color: #80808052;
  color: white;
  font-style: normal;

  & h6 {
    font-size: 19px;
    font-weight: 400;
  }
  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 5px;
    height: 0;
    font-size: 30px;

    & h6 {
      font-size: 40px;
      color: #af1414ef;
      font-weight: 700;
    }
  }

  & p {
    text-align: center;
    font-size: 19px;
    background-color: #808080a1;

    line-height: 25px;
  }
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #af141481;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #af1414db;
  }
`;
