import React from "react";
import AboutContent from "../../components/aboutContent/aboutContent";
import AboutTheCompany from "../../components/aboutBody/aboutTheCompany";
import AboutMileStone from "../../components/aboutBody/aboutMilestones";
import WhatGuidesUs from "../../components/aboutBody/whatGuidesUs";
import TeamMembers from "../../components/aboutBody/teamMembers";
import SubForm from "../../components/subFotter/subFotter";

function AboutPage() {
  return (
    <div>
      <AboutContent />
      <AboutTheCompany />
      <AboutMileStone />
      <WhatGuidesUs />
      <TeamMembers />
      <SubForm />
    </div>
  );
}

export default AboutPage;
