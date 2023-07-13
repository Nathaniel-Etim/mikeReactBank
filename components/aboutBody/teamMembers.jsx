import React from "react";
import styled from "styled-components";
import { HaveAglimpse } from "./aboutTheCompany";

function TeamMembers() {
  const TeamMembersData = [
    {
      id: 1,
      name: "John Smith",
      img: "https://photos.watchmedier.dk/watchmedier/resize:fill:3840:0:0/plain/https://photos.watchmedier.dk/Images/15143595/clhmx4/ALTERNATES/schema-16_9/Bj%25C3%25B6rn%2520Jansson%2520-%2520Carnegie",
      role: "Manager",
    },
    {
      id: 2,
      name: "Xiong Grahms",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20230512/pngtree-the-portrait-of-a-young-asian-woman-wearing-a-suit-image_2508329.png",
      role: "Director",
    },
    {
      id: 3,
      name: "Joseph Oyebode",
      img: "https://media.istockphoto.com/id/991802392/photo/with-unfaltering-dedication-you-can-go-far-too.jpg?s=612x612&w=0&k=20&c=sc9aOuRFix1omGDain7gFo-DnC7yoxM-7To5Ve4H7dM=",
      role: "Co-ordinator",
    },
    {
      id: 4,
      name: "John Smith",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNbmNnQTdb8qls6AkHiR_td_FQzEeUpSLO1AVglRSlNE3vyjsC6IJOYvlUFVPqFnFWwI&usqp=CAU",
      role: "Manager",
    },
  ];

  const displayMembersData = TeamMembersData.map((eachone) => {
    const theStyle = {
      width: "170px",
      height: "170px",
      background: `url(${eachone.img})`,
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
    return (
      <div key={eachone.id}>
        <div style={theStyle}></div>
        <h2>{eachone.name}</h2>
        <p>{eachone.role}</p>
      </div>
    );
  });
  return (
    <Container>
      <SubContainer>
        <div className="box"></div>
        <TakeALook>TAKE A LOOK AT</TakeALook>
        <TeamHead>Some Of Team Members</TeamHead>
      </SubContainer>
      <CardContainer>{displayMembersData}</CardContainer>
    </Container>
  );
}

export default TeamMembers;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 30px 40px;
`;

const TakeALook = styled.p`
  font-family: sans-serif;
  font-weight: 1;
  font-size: 21px;
`;

const TeamHead = styled.h2`
  font-family: sans-serif;
  font-weight: 800;
  font-size: 38px;
  margin-top: -16px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  text-align: center;
`;
