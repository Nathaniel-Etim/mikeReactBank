import React, { useEffect } from "react";
import NavBar from "../navComponent/navBar";
import { styled } from "styled-components";
import UserSideBar from "./loggedinMenu/userMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { Spinner } from "../beneficiaries/addBeneficiary";
import UserPin from "../transfer/PinSection";
import { useSelector } from "react-redux";

function UserNavBar() {
  const toggleUserPinInput = useSelector((state) => state.ui.showPinInput);
  const userExist = useSelector((store) => store.event.userCanLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userExist) {
      navigate("/Login");
    }
  }, [userExist, navigate]);

  return (
    <UserLogedinContainer>
      <NavBar />
      {/* <Spinner /> */}
      {toggleUserPinInput && <UserPin />}{" "}
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
  height: 100vh;
  overflow: hidden;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 5px 2px;
  height: 89vh;
  overflow: hidden;
`;

const OtherContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  box-sizing: border-box;
  flex: 1;
`;
