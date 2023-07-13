import React from "react";
import ServicesHeader from "../../components/servicesHeader/sevicesHeader";
import WhatWeOfferHeader from "../../components/servicesBody/whatWeOfferHeader";
import WhatWeOfferBody from "../../components/servicesBody/whatWeOfferBody";
import HowWeHelp from "../../components/servicesBody/howWeHelp";

function ServicePage() {
  return (
    <div>
      <ServicesHeader />
      <WhatWeOfferHeader />
      <WhatWeOfferBody />
      <HowWeHelp />
    </div>
  );
}

export default ServicePage;
