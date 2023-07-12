import React from "react";
import NavBar from "../navComponent/navBar";
import { styled } from "styled-components";
import UserSideBar from "./loggedinMenu/userMenu";
import { Outlet } from "react-router-dom";

function UserNavBar() {
  return (
    <UserLogedinContainer>
      <NavBar />
      <UserSection>
        <UserSideBar />
        <OtherContent>
          <Outlet />
        </OtherContent>
      </UserSection>
    </UserLogedinContainer>
  );
}

export default UserNavBar;

const UserLogedinContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 5px 10px;
  height: 90vh;
  overflow: hidden;
`;

const OtherContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
