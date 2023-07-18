import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "../ourServices/homeServices";
import AllBeneficiary from "./allBeneficiary";
import AddBeneficiary from "./addBeneficiary";

function BeneficiariesContainer() {
  const [viewBeneficiary, setViewBeneficiary] = useState(true);
  return (
    <BeneficiaryContainerStyled>
      <HeaderContainer>
        <h4
          onClick={() => {
            setViewBeneficiary(false);
          }}
        >
          view all beneficiary {!viewBeneficiary && <Line />}
        </h4>
        <h4
          onClick={() => {
            setViewBeneficiary(true);
          }}
        >
          Add beneficiary {viewBeneficiary && <Line />}
        </h4>
      </HeaderContainer>
      {/* <Line /> */}
      {!viewBeneficiary && <AllBeneficiary />}
      {viewBeneficiary && <AddBeneficiary viewAddBen={setViewBeneficiary} />}
    </BeneficiaryContainerStyled>
  );
}

export default BeneficiariesContainer;

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
