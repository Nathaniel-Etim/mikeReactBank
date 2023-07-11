import React from "react";
import styled from "styled-components";

function AboutTheCompany() {
  return (
    <Container>
      <SubContainerLeft>
        <div className="box"></div>
        <HaveAglimpse>
          <p>HAVE A GLIMPSE OF</p>
        </HaveAglimpse>
        <TheCompany>About the company</TheCompany>
        <Content>
          Hart County Trust Bank is a world class bank that blends modern
          amenities with hometown service and decision making. Our customers
          enjoy access to convenient digital and mobile banking platforms, such
          as online banking, mobile deposits, person-to-person payments,
          automatic fraud monitoring, and a worldwide ATM network. By looking at
          our business through the eyes of our customers, we have differentiated
          ourselves from other banks and financial institutions. Because we are
          an independent local bank, we make decisions quickly and locally
          without outside influence. From humble beginnings, Hart County Trust
          Bank has become a very dynamic bank providing innovative financial
          solutions for our customers. We take a long term management view
          instead of managing to a quarterly balance sheet that meets investors'
          or analysts' expectations. This enables us to provide greater value to
          our customers and the communities we serve. Hart County Bank and Trust
          Company Head Office branch was the only office of the bank until we
          decided it was time to expand. We have been serving the financial
          needs of our customers in Munfordville, Hart county, Kentucky since
          1890. Over the years you'll find our branch in every major city in the
          world.
        </Content>
      </SubContainerLeft>
      <SubContainerRight>
        <AboutTopImage></AboutTopImage>
      </SubContainerRight>
    </Container>
  );
}

export default AboutTheCompany;

const Container = styled.div`
  background: #eee;
  color: black;
  display: flex;
  gap: 3rem;
  padding: 50px 100px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const SubContainerLeft = styled.div`
  width: 50%;
`;

const SubContainerRight = styled.div`
  width: 50%;
`;

export const HaveAglimpse = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 19px;
  font-weight: 1;
`;

export const TheCompany = styled.h2`
  font-size: 30px;
  font-weight: 800;
  font-family: sans-serif;
  margin-top: -10px;
`;

const Content = styled.p`
  line-height: 1.6;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
`;

const AboutTopImage = styled.div`
  width: 500px;
  height: 400px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNbmNnQTdb8qls6AkHiR_td_FQzEeUpSLO1AVglRSlNE3vyjsC6IJOYvlUFVPqFnFWwI&usqp=CAU");
  background-size: cover;
  margin-top: 70px;
`;
