import React from "react";
import { styled } from "styled-components";
import DashBoardHeader from "./dashBoardTop";
import FinancialOverview from "./finaincialOverview";
import Transactions from "./userTransaction";

function DashBoardContainer() {
  return (
    <DashboardContainer>
      <DashBoardHeader />
      <FinancialOverview />
      <Transactions />
    </DashboardContainer>
  );
}

export default DashBoardContainer;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1000px;
  overflow-y: scroll;
  gap: 20px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
