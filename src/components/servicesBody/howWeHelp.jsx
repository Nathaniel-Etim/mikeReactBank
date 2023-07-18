import React from "react";
import { styled } from "styled-components";

function HowWeHelp() {
  const reStyle1 = {
    background: "green",
  };

  const reStyle2 = {
    background:
      "url('https://i.dailymail.co.uk/1s/2019/04/23/17/12623808-6951497-image-a-9_1556037807700.jpg')",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    backgroundPosition: "-300px 0px",
  };
  return (
    <TotalCover>
      <DivCover>
        <LeftDiv></LeftDiv>
        <RightDiv>
          <div>
            <Line></Line>
            <h1>How We Can Help</h1>
            <p>
              Whether you are working toward financial security, providing a
              steady stream of income, or planning for retirement, we can help
              simplify your finances. Hart County Trust Bank can provide access
              to a wide range of quality investments and services to pursue your
              financial goals.
            </p>
          </div>
        </RightDiv>
      </DivCover>
      <DivCover>
        <RightDiv style={reStyle1}>
          <div>
            <Line></Line>
            <h1>International Banking</h1>
            <p>
              To connect you with the right people, we provide an International
              Banker - one person dedicated to you. This is someone you get to
              know and rely on for all of your international banking needs.
            </p>
          </div>
        </RightDiv>
        <LeftDiv style={reStyle2}></LeftDiv>
      </DivCover>
    </TotalCover>
  );
}

export default HowWeHelp;

const DivCover = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    diplay: flex;
    flex-direction: column;
  }
`;

const RightDiv = styled.div`
  width: 100%;
  color: white;
  background: black;
  line-height: 1.7;

  & div {
    padding: 80px 80px 40px 80px;

    @media screen and (max-width: 800px) {
      padding: 80px 30px 40px 30px;
    }
  }

  & h1 {
    font-size: 35px;
  }

  & p {
    font-size: 16px;
  }
`;

const LeftDiv = styled.div`
  width: 100%;
  background: url("https://imageio.forbes.com/specials-images/dam/imageserve/1045876492/960x0.jpg?format=jpg&width=960");
  height: 74vh;
  background-size: contain;
  background-position: -30px 0px;
  background-attachment: fixed;

  @media screen and (max-width: 800px) {
    background-size: cover;
    height: 220px;
  }
`;

const Line = styled.section`
  width: 40px;
  height: 5px;
  background: white;
`;

const TotalCover = styled.section`
  margin-top: 100px;
`;
