import React from "react";
import {
  HeaderContainer,
  BeneficiaryContainerStyled,
} from "./beneficiaries/beneficiaries";
import { Line } from "./ourServices/homeServices";
import NewPasswordCard from "./userDetailPage/editPasswordContainer";

function EditUserPassword() {
  return (
    <BeneficiaryContainerStyled>
      <HeaderContainer>
        <h4>
          Change Password <Line />
        </h4>
      </HeaderContainer>
      <NewPasswordCard />
    </BeneficiaryContainerStyled>
  );
}

export default EditUserPassword;
