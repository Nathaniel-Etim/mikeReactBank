import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "../ourServices/homeServices";
import { BsDot } from "react-icons/bs";
import { Btn } from "../homecontent/homeLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Transactions(height) {
  const currentuser = useSelector((store) => store.event.currentAccount);

  const path = useLocation().pathname;
  const [showButton, setShowButton] = useState(true);
  let text = "Show all transaction";

  const navigate = useNavigate();
  const [transaction, _setTransactions] = useState([
    {
      id: "m1",
      date: "27/10/2020",
      name: "Nathaniel Eim",
      amount: -50000,
    },
    {
      id: "m3",
      date: "31/12/2020",
      name: "Samuel Jonh",
      amount: -20000,
    },
    {
      id: "m5",
      date: "3/10/2021",
      name: "jna  Eim",
      amount: 10000,
    },
    {
      id: "m2",
      date: "27/10/2020",
      name: "samuel Joseph",
      amount: -50000,
    },
    {
      id: "m4",
      date: "27/10/2020",
      name: "Edet okon",
      amount: 50000,
    },
    {
      id: "m6",
      date: "27/10/2020",
      name: "Manny sky",
      amount: -50000,
    },
    {
      id: "m7",
      date: "27/10/2020",
      name: "Car wash",
      amount: 50000,
    },
    {
      id: "m8",
      date: "27/10/2020",
      name: "KFC ",
      amount: -50000,
    },
  ]);

  React.useEffect(() => {
    if (path == "/logedIn/transactions") {
      setShowButton(false);
    }
  });

  function onViewAllTransaction() {
    navigate("transactions");
  }

  function onGoToDashboard() {
    navigate("/logedIn");
  }

  const EachtransactionDetail = currentuser.movements.map((element, index) => {
    const transactionType = element.amount < 0 ? "Debit" : "Credit";
    return (
      <CardStyled key={index}>
        <EachTranction>
          <FirstItem>
            <h3 className="date">{element.date}</h3>
          </FirstItem>
          <div>
            <h3 className="userName">{element.reciverName}</h3>
            <h4 className={`type type-${transactionType} spec`}>
              {transactionType}
            </h4>
          </div>

          <BsDot className="icon" />
          <h3 className="status">Successful</h3>
          <h4 className={`amount amount-${transactionType}`}>
            {" "}
            ${element.amount}
          </h4>
        </EachTranction>
      </CardStyled>
    );
  });

  return (
    <TransactionHistoryContainer>
      <TransactionTop>
        <h3>Transaction History</h3>
        <Line />
      </TransactionTop>
      <Transaction height={height}>
        <TransactionHeader>
          <h3 className="date">DATE</h3>
          <h3>DESCRIPTION</h3>
          <h3>STATUS</h3>
          <h3>AMOUNT</h3>
        </TransactionHeader>
        {EachtransactionDetail}
      </Transaction>
      {showButton && (
        <MoreBtn onClick={onViewAllTransaction}>Show all transaction</MoreBtn>
      )}
      {!showButton && (
        <MoreBtn onClick={onGoToDashboard}>View Dashboard</MoreBtn>
      )}
    </TransactionHistoryContainer>
  );
}

export default Transactions;

export const MoreBtn = styled(Btn)`
  width: 180px;
  color: white;
`;

export const FirstItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const TransactionHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d8d3d3d3;
  padding: 10px 10px 10px 10px;
  border-radius: 2px;
  gap: 10px;
  box-sizing: border-box;
`;

const TransactionTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h3 {
    margin: 0;
  }
`;

export const Transaction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 200px ${({ height }) => height};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TransactionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & h3 {
    display: flex;
    align-items: center;
    margin: 0;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    border: none;
    font-size: 0.81rem;
    color: rgba(90, 99, 126, 0.49);
    letter-spacing: 1px;
  }
  & .date {
    @media screen and (max-width: 599px) {
      display: none;
    }
  }
`;

export const CardStyled = styled.div`
  background-color: whitesmoke;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #f5f5f55e;
  border-radius: 10px;
  cursor: pointer;

  transform: scale(1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const EachTranction = styled(TransactionHeader)`
  font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
    system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #3e4b5b;
  align-items: center;
  /* justify-content: flex-start; */

  & .date {
    font-size: 10px;
  }

  & .icon {
    display: none;
  }

  & .spec {
    display: none;
  }

  @media screen and (max-width: 803px) {
    & .status {
      display: none;
    }
    & .icon {
      display: flex;
      color: #0080007d;
      width: 22px;
      height: 30px;
    }
  }

  & h3 {
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-size: 0.99rem;
    font-weight: 500;
    line-height: 1.5;
    color: #3e4b5b;
    text-align: left;
    margin: 0;
  }

  & .userName {
    width: 121px;
  }

  & h4 {
    font-weight: 500;
    font-size: 0.99rem;
    margin: 0;
  }

  & .type {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 58px;

    height: fit-content;
    padding: 3px 5px;
    border-radius: 5px;
    box-sizing: border-box;
    color: #fff;

    /* for debit */
    /* background-color: #e65252; */
  }

  & .amount-Debit {
    color: #e65252;
  }

  & .type-Debit {
    background-color: #e65252;
  }

  & .type-Credit {
    background-color: #0080007d;
  }

  & .amount-Credit {
    color: #0080007d;
  }
`;
