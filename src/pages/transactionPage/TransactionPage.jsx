import React from "react";
import Transactions from "../../components/homeDashboard/userTransaction";
import styled from "styled-components";

function TransactionPage() {
  return (
    <TransactionPageContainer>
      <Transactions height="auto" />
    </TransactionPageContainer>
  );
}

export default TransactionPage;
const TransactionPageContainer = styled.div`
  overflow-y: scroll;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
