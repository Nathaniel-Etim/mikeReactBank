import React from "react";
import { styled } from "styled-components";

function NavBar() {
  return (
    <NavContainer>
      <span>
        {" "}
        HYPEX <h4> BANK</h4>{" "}
      </span>
      <p>Default language : English </p>
    </NavContainer>
  );
}
export default NavBar;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  width: 100%;
  padding: 1px 10px;
  box-sizing: border-box;
  /* padding-right: 10px; */
  gap: 10px;
  height: 51px;

  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;

    font-weight: bolder;
    width: fit-content;
    gap: 3px;
    cursor: pointer;

    & h4 {
      background-color: red;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 10px 10px 0 10px;
    }
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 11px;
    font-weight: 100;
    font-family: "Courier New", Courier, monospace;
  }
`;
