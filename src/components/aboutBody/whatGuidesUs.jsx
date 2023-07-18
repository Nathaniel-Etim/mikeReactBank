import React from "react";
import styled from "styled-components";

function WhatGuidesUs() {
  const myStyle = {
    fontSize: "30px",
    textAlign: "center",
    fontFamily: "sans-serif",
    fontWeight: "800",
  };

  const guideData = [
    {
      id: 1,
      topWrite: "Our Vision",
      bottomWrite:
        "To become the leading World, technology-driven, global financial institution that provides distinctive range of financial services.",
    },
    {
      id: 2,
      topWrite: "Our Mission",
      bottomWrite:
        "To build Our brand into a reputable international financial institution recognized for innovation, superior performance and creation of premium value for all stakeholders. Our primary business strategy is to continue to focus on the customer – the undisputed employer.",
    },
  ];

  const displayGuideData = guideData.map((eachone) => {
    return (
      <Cover key={eachone.id}>
        <GuideHead>{eachone.topWrite}</GuideHead>
        <GuideParagraph>{eachone.bottomWrite}</GuideParagraph>
      </Cover>
    );
  });
  return (
    <Container>
      <h1 style={myStyle}>What Guides Us</h1>
      <SubContainer>{displayGuideData}</SubContainer>
    </Container>
  );
}

export default WhatGuidesUs;

const Container = styled.div`
  padding: 30px 80px;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNbmNnQTdb8qls6AkHiR_td_FQzEeUpSLO1AVglRSlNE3vyjsC6IJOYvlUFVPqFnFWwI&usqp=CAU");
  background-size: cover;

  @media screen and (max-width: 800px) {
    padding: 20px 30px;
  }
`;

const GuideHead = styled.h2`
  font-size: 30px;
  color: gold;
`;

const GuideParagraph = styled.p`
  font-size: 16px;
`;

const SubContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 800px) {
    diplay: flex;
    flex-direction: column;
  }
`;

const Cover = styled.div`
  width: 100%;
  line-height: 1.7;
`;
