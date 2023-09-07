import React from "react";
import styled from "styled-components";
import { Line } from "../ourServices/homeServices";
import { CardStyled } from "../homeDashboard/finaincialOverview";

function Message() {
  return (
    <BeneficiaryContainerStyled>
      <HeaderContainer>
        <h4>
          Messages <Line />
        </h4>
      </HeaderContainer>
      <MessageBox>
        <h4>No Message</h4>
      </MessageBox>
    </BeneficiaryContainerStyled>
  );
}

export default Message;

const BeneficiaryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 1px 0 0 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  & h4 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1;
    color: #334152;
    margin: 0;
    cursor: pointer;
  }
`;

const MessageBox = styled(CardStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 300px;
  font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
    system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif;
  font-weight: 500;
  line-height: 1;
  color: #334152;
`;
