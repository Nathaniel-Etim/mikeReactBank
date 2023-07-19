import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";

function DashBoardHeader() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [country, setCountry] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const [error, setError] = useState(null);
  const currentuser = useSelector((store) => store.event.currentAccount);
  const statusType =
    currentuser.accountStatus === "active" ? "type-active" : "type-inactive";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Fetch user's location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          // Reverse geocoding to get country information
          try {
            const response = await fetch(
              `https://geolocation-db.com/json/geoip.php?latitude=${latitude}&longitude=${longitude}`
            );

            if (!response.ok) {
              throw new Error("Failed to fetch country information.");
            }
            const data = await response.json();
            setCountry(data.country_name);
          } catch (error) {
            setError(error.message);
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
    clearInterval(timer);
  }, []);

  const currentTime = currentDateTime.toLocaleTimeString();
  const currentDate = currentDateTime.toLocaleDateString();
  return (
    <DashboardCard>
      <UserDetails>
        <DetailsLeft>
          <h3>{currentuser.name}</h3>
          <h6>
            Account status:
            <span className={statusType}>
              {currentuser.accountStatus} <BsDot className="icon " />
            </span>
          </h6>
        </DetailsLeft>
        <DetailsRight>
          <h4>{currentuser.balance}</h4>
          <h6>last updated on the {currentTime} </h6>
        </DetailsRight>
      </UserDetails>
      <DetailBottom>
        <BottomLeft>
          <h6>Location: {country} </h6>
          <h6>
            Access/Time: {currentTime} , {currentDate}
          </h6>
        </BottomLeft>
        <BottomRight>
          <h3>Account number : {currentuser.accountNumber}</h3>
          <h3>Account type : Savings </h3>
        </BottomRight>
      </DetailBottom>
    </DashboardCard>
  );
}

export default DashBoardHeader;
const DashboardCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8e2e2;
  width: 100%;
  border-radius: 15px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: linear-gradient(to right, #0033ff, #003780cf);
  padding: 30px;
  gap: 10px;
  box-sizing: border-box;
  min-height: 250px;
  border: 1px solid gray;
  border-radius: 0px 0px 170px 0px;
`;

const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
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

    @media screen and (max-width: 529px) {
      font-size: 15px;
    }

    & span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #00800045;
      border-radius: 20px;
      padding: 5px;
      box-sizing: border-box;

      & .icon {
        /* font-size: 40px; */
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

const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  justify-content: center;

  & h4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-size: 35px;
    font-weight: 500;
    line-height: 1.2;
    color: #171d25;
    margin: 0;
  }

  & h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    color: #171d25a6;
    margin: 0;
  }
  @media screen and (max-width: 686px) {
    margin-left: -180px;
  }
`;

const DetailBottom = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  /* to ensure it occupies the same width and height */
  box-sizing: border-box;
  gap: 20px;
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    color: #171d25a6;
    margin: 0;
  }
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    color: #252c36e0;
    margin: 0;
    border-left: 1px solid gray;
    padding: 0 4px;
  }
`;
