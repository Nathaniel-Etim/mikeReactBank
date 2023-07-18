import React from "react";
import ServicesHeader from "../../components/servicesHeader/sevicesHeader";
import WhatWeOfferHeader from "../../components/servicesBody/whatWeOfferHeader";
import WhatWeOfferBody from "../../components/servicesBody/whatWeOfferBody";
import HowWeHelp from "../../components/servicesBody/howWeHelp";
import SubForm from "../../components/subFotter/subFotter";

function ServicePage() {
  return (
    <div>
      <ServicesHeader />
      <WhatWeOfferHeader />
      <WhatWeOfferBody />
      <HowWeHelp />
      <br />
      <br />
      <br />
      <br />
      <SubForm></SubForm>
    </div>
  );
}

export default ServicePage;
