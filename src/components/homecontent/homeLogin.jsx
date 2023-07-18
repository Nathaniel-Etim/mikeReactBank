import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function HomeContainer() {
  const navigate = useNavigate();

  const imageObj = [
    "https://media.istockphoto.com/id/635974362/photo/building-a-network-towards-success.jpg?s=612x612&w=0&k=20&c=cwxRzaKQdvMJZ1FapI7qgGpbQCtSBf9PLQ2FMk0Tu0M=",
    "https://cdn.punchng.com/wp-content/uploads/2019/12/08005635/Handshake-etiquette.jpg",
  ];

  const reStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${imageObj[0]})`,
    height: "400px",
    width: "100%",
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const reStyle2 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${imageObj[1]})`,
    height: "400px",
    width: "100%",
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  function onGoToLoginHandelerFn() {
    navigate("Login");
  }
  return (
    <ImageCover>
      <WelcomeHome style={reStyle}>
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
      <WelcomeHome style={reStyle2}>
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
    </ImageCover>
  );
}

export default HomeContainer;

export const blurAnimation = keyframes`
  from {
    background-size: 100%;
  }
  to {
    background-size: 120%;
  }
`;

const WelcomeHome = styled.div`
  width: 100%;
  overflow: auto;
  flex: 0 0 auto;
  animation: ${blurAnimation} 5s linear infinite;
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  height: 100%;
  max-width: 500px;
  font-family: sans-serif;
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
    font-size: 50px;

    & h6 {
      font-size: 50px;
      color: #af1414ef;
      font-weight: 700;
    }
  }

  & p {
    text-align: center;
    font-size: 19px;

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

const ImageCover = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
`;
