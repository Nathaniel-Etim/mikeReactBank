import React from "react";
import { styled } from "styled-components";
import DashBoardHeader from "./dashBoardTop";

function DashBoardContainer() {
  return (
    <DashboardContainer>
      <DashBoardHeader />
    </DashboardContainer>
  );
}

export default DashBoardContainer;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 92vh;
  max-width: 1000px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
