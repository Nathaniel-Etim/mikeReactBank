import React from "react";
import { styled } from "styled-components";
import { UnorderedListStyle } from "../navComponent/navMenu";

function FotterComponent() {
  return (
    <FotterComponentStyled>
      <span>
        {" "}
        HYPEX <h4> BANK</h4>{" "}
      </span>
      <FotterSecondItem>
        <FotterUnorderedList>
          <li>Home</li>
          <li> About Us</li>
          <li>Services</li>
          <li>Loan</li>
        </FotterUnorderedList>
        <p>Copyright © 2023 Hypex Financial Trust Bank |All rights reserved</p>
      </FotterSecondItem>
      <div>
        <FotterSecondItem>
          <h3>Contact us:</h3>
          <li>Phone Number : 08113779150</li>
          <li>Phone Number : 08113779150</li>
          <li>Mail : tester@gmail.com </li>
        </FotterSecondItem>
      </div>
    </FotterComponentStyled>
  );
}

export default FotterComponent;

const FotterComponentStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: gray;
  justify-content: space-evenly;
  align-items: center;

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
`;

const FotterUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 20px;
  gap: 30px;
  box-sizing: border-box;

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

const FotterSecondItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  & h3 {
    margin: 0;
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
