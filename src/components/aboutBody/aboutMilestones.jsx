import React from "react";
import styled from "styled-components";
import useState from "react";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

function AboutMileStone() {
  const mileData = [
    {
      id: 1,
      writing: "5000+",
      icon: <BsFillPiggyBankFill />,
      paragraph: "clients",
    },
    {
      id: 2,
      writing: "10+",
      icon: <BsAward />,
      paragraph: "awards",
    },
    {
      id: 3,
      writing: "12",
      icon: <BsHeart />,
      paragraph: "partnership",
    },
  ];

  const displayMilestone = mileData.map((eachone) => {
    return (
      <div key={eachone.id}>
        <Icon>{eachone.icon}</Icon>
        <MileStoneWrite>{eachone.writing}</MileStoneWrite>
        <p>{eachone.paragraph}</p>
      </div>
    );
  });

  return (
    <Container>
      <SubContainerLeft>
        <MilestoneHeading>Some Of Our Milestones</MilestoneHeading>
        <MilestoneContent>
          Hart County Trust Bank impressive growth pattern and performance over
          the years have earned it excellent ratings, recognitions and
          endorsement from local and international agencies and institutions.
          Hart County Trust Bank has maintained a consistent and solid financial
          performance in its long history. We have a history of pioneering
          innovations in the World financial services sector. We have clearly
          distinguished Ourself in the banking industry through superior service
          quality.
          <Flex>{displayMilestone}</Flex>
        </MilestoneContent>
      </SubContainerLeft>
      <SubContainerRight></SubContainerRight>
    </Container>
  );
}

export default AboutMileStone;

export const Container = styled.div`
  width: 100%;
  display: flex;

  background: lightgrey;

  @media screen and (max-width: 800px) {
    diplay: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

const SubContainerLeft = styled.div`
  width: 50%;
  color: black;
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 14px 20px;
  }
`;

const SubContainerRight = styled.div`
  width: 50%;
  background: url("https://media.istockphoto.com/id/637865206/photo/man-preparing-to-sign-a-bank-contract.jpg?s=612x612&w=0&k=20&c=XrKJnf-FKtMJL7vEPoQykUkzdiZjAP75GPjdbss3UD4=");
  height: 700px;
  background-size: cover;
  background-position: right;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 350px;
  }
`;

const MilestoneHeading = styled.h1`
  font-size: 35px;
  font-weight: 1000;
  font-family: sans-serif;
`;

const MilestoneContent = styled.p`
  font-size: 19px;
  font-family: sans-serif;
  line-height: 1.7;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    padding-right: 30px;
  }
`;

const Icon = styled.p`
  font-size: 50px;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const MileStoneWrite = styled.h1`
  font-size: 40px;
  margin-top: -44px;

  @media screen and (max-width: 800px) {
    font-size: 23px;
    margin-top: -20px;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 4rem;
  text-align: center;
  margin-top: 0px;

  @media screen and (max-width: 800px) {
    width: 100%;
    gap: 2rem;
    display: flex;
    align-items: center;
  }
`;
