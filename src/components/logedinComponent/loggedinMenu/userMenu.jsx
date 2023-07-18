import React, { useState } from "react";
import { styled } from "styled-components";
import {
  BsWallet,
  BsPersonFill,
  BsSendCheck,
  BsMailbox,
  BsFingerprint,
  BsInfo,
  BsDoorOpenFill,
  BsDot,
  BsHouse,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function UserSideBar() {
  const navigate = useNavigate();
  const [menuItem, _setMenuUtem] = useState([
    {
      icon: <BsHouse className="icon" />,
      Text: "Account Summary",
    },
    {
      icon: <BsPersonFill className="icon" />,
      Text: "User Profile",
    },
    {
      icon: <BsWallet className="icon" />,
      Text: "E-Statement",
    },
    {
      icon: <BsWallet className="icon" />,
      Text: "Beneficiaries",
    },
    {
      icon: <BsSendCheck className="icon" />,
      Text: "Send Money",
    },
    {
      icon: <BsWallet className="icon" />,
      Text: "Virtual Cards",
    },
    {
      icon: <BsMailbox className="icon" />,
      Text: "Messages",
    },
    {
      icon: <BsFingerprint className="icon" />,
      Text: "Change Password",
    },
    {
      icon: <BsInfo className="icon" />,
      Text: "Help & Support",
    },
    {
      icon: <BsDoorOpenFill className="icon" />,
      Text: "Logout",
    },
  ]);

  function onGoToUserProfile() {
    navigate("userProfile");
  }

  return (
    <SideBar>
      <UserDetails onClick={onGoToUserProfile}>
        <h3>Nathaniel etim</h3>
        <h6>
          Account status:
          <span className="type-active">
            active <BsDot className="icon " />
          </span>
        </h6>
      </UserDetails>

      {menuItem.map((item, index) => {
        function onGoToDashboard() {
          if (item.Text === "Account Summary") {
            navigate("/logedIn");
          }
          if (item.Text === "E-Statement") {
            navigate("transactions");
          }
          if (item.Text === "User Profile") {
            navigate("userProfile");
          }
          if (item.Text === "Beneficiaries") {
            navigate("beneficiaries");
          }
          if (item.Text === "Send Money") {
            navigate("transfers");
          }
          return;
        }
        return (
          <SideBarMenu key={index} onClick={onGoToDashboard}>
            {item.icon}
            <h6>{item.Text}</h6>
          </SideBarMenu>
        );
      })}
    </SideBar>
  );
}
export default UserSideBar;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-right: 0.6px solid #8b89899f;
  height: 90vh;
  gap: 25px;
  width: 209px;
  overflow-y: scroll;
  padding: 0 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 803px) {
    align-items: flex-start;
    justify-content: center;
    max-width: 40px;
    padding: 0 5px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8080802c;
  flex-direction: column;
  border-radius: 35px 0;
  padding: 10px;
  height: 100px;
  gap: 10px;
  box-sizing: border-box;
  cursor: pointer;

  & h3 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1.2;
    color: #334152;
    margin: 0;
  }

  & h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    gap: 5px;
    color: #212f40;

    & span {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: green;

      & .icon {
        font-size: 30px;
      }
    }

    & .type-active {
      color: green;
    }

    & .type-inactive {
      color: red;
    }
  }
  @media screen and (max-width: 803px) {
    display: none;
  }
`;

const SideBarMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(10px);
  }

  & h6 {
    margin: 0;
    font-size: 0.9rem;

    @media screen and (max-width: 803px) {
      display: none;
    }
  }

  & .icon {
    width: 20px;
    height: 20px;
    color: #047bf8;
  }
`;
