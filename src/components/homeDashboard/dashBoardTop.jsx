import React from "react";
import { styled } from "styled-components";
import { BsDot } from "react-icons/bs";

function DashBoardHeader() {
  return (
    <DashboardCard>
      <UserDetails>
        <DetailsLeft>
          <h3>Nathaniel Joseph Etim</h3>
          <h6>
            Account status:
            <span className="type-active">
              active <BsDot className="icon " />
            </span>
          </h6>
        </DetailsLeft>
        <DetailsLeft>
          <h4>balance</h4>
          <h4>lastDATE UPDATD</h4>
        </DetailsLeft>
      </UserDetails>
      <div>
        <h6>userLocation</h6>
        <h6>BURRENT DATE</h6>
        <span>
          <h3>Account nubber</h3>
          <h3>account type </h3>
        </span>
      </div>
    </DashboardCard>
  );
}

export default DashBoardHeader;
const DashboardCard = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: #e8e2e2;
  width: 100%;
  border-radius: 15px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(to right, #0033ff, #003780cf);
  padding: 30px;
  box-sizing: border-box;
  min-height: 250px;
  border: 1px solid gray;
  border-radius: 0px 0px 170px 0px;
`;

const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  & h3 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1.2;
    color: #0b0e12;
    margin: 0;
  }

  & h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    gap: 5px;
    font-size: 20px;
    color: #212f40;

    & span {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: green;

      & .icon {
        font-size: 40px;
      }
    }

    & .type-active {
      color: green;
    }

    & .type-inactive {
      color: red;
    }
  }
`;
