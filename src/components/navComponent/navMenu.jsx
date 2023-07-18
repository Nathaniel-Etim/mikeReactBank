import react, { useState } from "react";
import { BsMouseFill, BsList, BsArrowLeft } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function NavMenu() {
  const navigate = useNavigate();

  function onGoToLoginPageHandelerFn() {
    navigate("Login");
  }

  const [isOpen, setIsOpen] = useState(null);

  function Open() {
    setIsOpen(false);
    console.log(isOpen);
  }

  function Close() {
    setIsOpen(null);
  }

  const Figure = isOpen === false ? "100%" : "0%";

  let reStyler;

  if (Figure === "100%") {
    reStyler = {
      transform: `translate(0%, 0%)`,
    };
  } else {
    reStyler = {};
  }

  return (
    <NavMenuContainer>
      <UnorderedListStyle style={reStyler}>
        <NavLink2 onClick={Close}>
          <h2>
            <BsArrowLeft />
          </h2>
        </NavLink2>
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
      <OpenPhoneNavBtn onClick={Open}>
        <button>
          <BsList />
        </button>
      </OpenPhoneNavBtn>
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
  background-color: rgba(33, 36, 41, 1);
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
  transition: 0.2s linear;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: initial;
    width: 45%;
    background: rgba(0, 0, 0, 0.85);
    height: 200%;
    padding-top: 300px;
    padding-left: 50px;
    gap: 50px;
    z-index: 4;
    transform: translate(-100%, 0%);
  }

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

    @media screen and (max-width: 800px) {
      font-size: 18px;
    }

    &:hover {
      color: #af1414ba;
    }
  }
`;

const MouseClick = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 400px;
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

const OpenPhoneNavBtn = styled.div`
  font-size: 40px;
  font-weight: 800;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
  }

  & button {
    background: transparent;
    color: white;
  }
`;

const NavLink2 = styled.li`
  color: white;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
