import React from "react";
import { Container } from "../aboutBody/aboutTheCompany";
import { TheCompany } from "../aboutBody/aboutTheCompany";
import { SubContainerLeft } from "../aboutBody/aboutTheCompany";
import { SubContainerRight } from "../aboutBody/aboutTheCompany";
import { Content } from "../aboutBody/aboutTheCompany";
import { styled } from "styled-components";

function LoanOffering() {
  const reStyled = {
    fontFamily: "sans-serif",
    fontSize: "16px",
    fontWeight: "600",
  };

  const ContainerRestyled = {
    alignItems: "center",
    background: "#eef",
  };
  return (
    <Container style={ContainerRestyled}>
      <SubContainerLeft>
        <TheCompany>Loan</TheCompany>
        <Content style={reStyled}>
          From time to time in life and business, we find ourselves needing a
          little or a lot more money than we have to meet certain pressing
          financial goals. At Hart County Trust Bank our loan offerings provide
          a fall-back position to secure the funds you need.
        </Content>
        <Button>APPLY NOW</Button>
      </SubContainerLeft>
      <SubContainerRight>
        <Image></Image>
      </SubContainerRight>
    </Container>
  );
}

export default LoanOffering;

const Button = styled.button`
  background: red;
  border-radius: 0;
  color: white;
  font-size: 11px;
  font-weight: 800;
  font-family: sans-serif;
  padding: 10px 30px;
`;

const Image = styled.div`
  width: 100%;
  background: url("https://www.zenithbank.com/media/1461/personal-banking-loans.jpg?anchor=center&mode=crop&width=768&height=576&rnd=131394549420000000");
  height: 300px;
  background-size: cover;
`;
