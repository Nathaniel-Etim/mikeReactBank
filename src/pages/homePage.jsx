import React from "react";
import HomeContainer from "../components/homecontent/homeLogin";
import HomeLoan from "../components/homecontent/homeLoan";
import OurServices from "../components/ourServices/homeServices";
import CoreValue from "../components/homeCorevalues/coreValues";
import SubForm from "../components/subFotter/subFotter";

function HomeScreen() {
  return (
    <>
      <HomeContainer />
      <HomeLoan />
      <OurServices />
      <CoreValue />
      <SubForm />
    </>
  );
}

export default HomeScreen;
