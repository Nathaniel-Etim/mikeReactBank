import React from "react";
import HomeContainer from "../components/homecontent/homeLogin";
import HomeLoan from "../components/homecontent/homeLoan";
import OurServices from "../components/ourServices/homeServices";
import CoreValue from "../components/homeCorevalues/coreValues";
import SubForm from "../components/subFotter/subFotter";
import WhatWeOfferBody from "../components/servicesBody/whatWeOfferBody";
import { Line } from "../components/ourServices/homeServices";
import { TopServiceContent } from "../components/ourServices/homeServices";

function HomeScreen() {
  return (
    <>
      <HomeContainer />
      <HomeLoan />
      <TopServiceContent>
        <Line></Line>
        <h4>TAKE LOOK AT </h4>
        <h2>Our services</h2>
      </TopServiceContent>
      <WhatWeOfferBody />
      <CoreValue />
      <SubForm />
    </>
  );
}

export default HomeScreen;
