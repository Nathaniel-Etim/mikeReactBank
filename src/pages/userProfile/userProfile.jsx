import React from "react";
import DashBoardHeader from "../../components/homeDashboard/dashBoardTop";
import UserInfoSection from "../../components/userDetailPage/userInfo";
import { DashboardContainer } from "../../components/homeDashboard/HomeDashboard";

function UserProfile() {
  return (
    <DashboardContainer>
      <DashBoardHeader />
      <UserInfoSection />
    </DashboardContainer>
  );
}

export default UserProfile;
