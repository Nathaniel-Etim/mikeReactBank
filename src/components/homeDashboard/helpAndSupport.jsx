import React from "react";
import styled from "styled-components";
import { Line } from "../ourServices/homeServices";
import { CardStyled } from "../homeDashboard/finaincialOverview";
import { InputContainer } from "../beneficiaries/addBeneficiary";
import { Btn } from "../homecontent/homeLogin";

function HelpAndSupportComponent() {
  return (
    <BeneficiaryContainerStyled>
      <HeaderContainer>
        <h4>
          Get Help <Line />
        </h4>
      </HeaderContainer>
      <Message>
        <CustomInputContainer>
          <label> Tell Us How We Can Help</label>
          <input type="text" placeholder="Type your subject" />
          <textarea cols={7} rows={6} placeholder="Input your message here" />
        </CustomInputContainer>
        <Btn>Send</Btn>
      </Message>
    </BeneficiaryContainerStyled>
  );
}

export default HelpAndSupportComponent;

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

const Message = styled(CardStyled)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 390px;
  min-height: 200px;
  font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
    system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif;
  font-weight: 500;
  line-height: 1;
  color: #334152;
`;

const CustomInputContainer = styled(InputContainer)`
  & input {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1;
    height: 30px;
    width: 90%;
  }
  & textarea {
    border: none;
    width: 90%;
    border-bottom: 1px solid rgba(90, 99, 126, 0.749);
    width: 250px;
    color: rgba(90, 99, 126, 0.749);
    resize: vertical;

    &:focus {
      outline: none;
    }
  }
`;
