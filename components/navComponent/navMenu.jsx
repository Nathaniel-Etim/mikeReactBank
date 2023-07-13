import react from "react";
import { BsMouseFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function NavMenu() {
  const navigate = useNavigate();

  function onGoToLoginPageHandelerFn() {
    navigate("Login");
  }

  return (
    <NavMenuContainer>
      <UnorderedListStyle>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          end
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          end
        >
          <li> About Us</li>
        </NavLink>
        <NavLink
          to="Services"
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          end
        >
          <li>Services</li>
        </NavLink>
        <NavLink
          to="Loan"
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          end
        >
          <li>Loan</li>
        </NavLink>
        <NavLink
          to="Contact"
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          end
        >
          <li>Contact</li>
        </NavLink>
      </UnorderedListStyle>
      <MouseClick onClick={onGoToLoginPageHandelerFn}>
        <BsMouseFill />
        <h5>Virtual Banking</h5>
      </MouseClick>
    </NavMenuContainer>
  );
}

export default NavMenu;

const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #504e4edb;
  height: 80px;
  justify-content: space-between;
`;

export const UnorderedListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 20px;
  gap: 30px;
  box-sizing: border-box;

  & .active {
    color: rgba(165, 42, 42, 0.692);
    text-decoration: underline;
  }

  & .notActive {
    color: white;
  }

  & li {
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;

    &:hover {
      color: #af1414ba;
    }
  }
`;

const MouseClick = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 40%;
  height: 100%;
  background-color: #af1414ba;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom-left-radius: 130px;
  font-size: 20px;
  color: white;
  border-top-left-radius: 10px;

  &:hover {
    & h5 {
      color: black;
    }
  }
`;
