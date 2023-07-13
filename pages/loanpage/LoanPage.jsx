import React from "react";
import LoanHeader from "../../components/loanHeader/loanHeader";
import LoanOffering from "../../components/loanBody/loanOffering";
import LoanApplication from "../../components/loanBody/loanApplication";
import SubForm from "../../components/subFotter/subFotter";

function LoanPage() {
  return (
    <div>
      <LoanHeader />
      <LoanOffering />
      <LoanApplication />
      <SubForm />
    </div>
  );
}

export default LoanPage;
