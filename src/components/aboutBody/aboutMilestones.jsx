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
  overflow: hidden;
  background: grey;
`;

const SubContainerLeft = styled.div`
  width: 50%;
  color: black;
  padding: 20px 60px;
`;

const SubContainerRight = styled.div`
  width: 50%;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNbmNnQTdb8qls6AkHiR_td_FQzEeUpSLO1AVglRSlNE3vyjsC6IJOYvlUFVPqFnFWwI&usqp=CAU");
  height: 700px;
  background-size: cover;
  background-position: center;
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
`;

const Icon = styled.p`
  font-size: 50px;
`;

const MileStoneWrite = styled.h1`
  font-size: 40px;
  margin-top: -44px;
`;

const Flex = styled.div`
  display: flex;
  gap: 4rem;
  text-align: center;
  margin-top: 0px;
`;
