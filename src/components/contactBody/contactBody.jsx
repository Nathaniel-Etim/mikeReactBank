import React from "react";
import { styled } from "styled-components";

function ContactBody() {
  return (
    <Cover>
      <section>
        <Sides>
          <h2>Customer Service Center</h2>
          <div>
            <p>
              <span>Telephone:</span> +1 270-524-2231 +1 571-969-2945
              <br />
              <span>Hours:</span>
              <br />
              <Shift>
                <p>
                  Mon – Fri: 7am – 8pm <br />
                  Saturday & Sunday: 9am – 4pm
                </p>
                <p>
                  Holidays: <br /> Unless otherwise noted, most holidays: 9am –
                  4pm Friday after Thanksgiving: 7am – 8pm Christmas Eve: 9am –
                  4pm Christmas Day: Closed New Year’s Eve: 9am – 4pm
                </p>
              </Shift>
            </p>
          </div>
          <Lined>
            <p>
              General account inquiries about your checking, savings, loans, and
              CD accounts
            </p>
            <div>
              <p>Personal online banking questions</p>
            </div>
            <div>
              <p>Bank debit card questions</p>
            </div>
            <div>
              <p>Questions regarding Mobile Deposits</p>
            </div>
          </Lined>
          <div>
            <span>Email:</span>
            <p>
              <Red>helphartcountytrustbank@gmail.com </Red> (Please do not send
              account information. Responses may take up to 48 hours.)
            </p>
          </div>
          <div>
            <h2 className="topper">24-Hour Telephone Banking</h2>
            <p>
              <span>Telephone:</span>
              <Red>+1 270-524-2231 +1 571-969-2945</Red>
              <p>
                General account inquiries about your checking, savings, loans
                and CD accounts
              </p>
            </p>
          </div>

          <div>
            <h2 className="topper">Loan Operation</h2>
            <p>
              <span>Mail payments to:</span>
              <br />
              P.O. Box 10209 <br /> Greensboro, NC 27404-0209
            </p>
          </div>
        </Sides>
        <Sides>
          <h2>Business Support</h2>
          <div>
            <p>
              <span>Telephone:</span> +1 270-524-2231 +1 571-969-2945
              <br />
              <span>Hours:</span> Mon – Fri: 7am – 8pm
              <p>
                <span>Assistance With:</span>
              </p>
              <Lined>
                <p>ACH file submissions</p>
                <div>
                  <p>Domestic and international Wire submissions</p>
                </div>
                <div>
                  <p>
                    Online banking setup, access or changes for business users
                  </p>
                </div>
                <div>
                  <p>Desktop Remote Deposit Capture</p>
                </div>
                <div>
                  <p>Positive Pay</p>
                </div>
              </Lined>
            </p>
          </div>
          <div>
            <span>Email:</span>
            <p>
              <Red>helphartcountytrustbank@gmail.com </Red> (Please do not send
              account information. Responses may take up to 48 hours.)
            </p>
          </div>

          <div>
            <h2 className="topper">Mortage Loan</h2>
            <p>
              <span>Telephone:</span>
              <br />
              +1 270-524-2231 +1 571-969-2945
            </p>
          </div>

          <div>
            <h2 className="topper">Address</h2>
            <p>331 Main St, Munfordvile, KY 42765, Unitec State</p>
          </div>
        </Sides>
      </section>
    </Cover>
  );
}

export default ContactBody;

const Cover = styled.div`
  padding: 30px 150px;
  line-height: 1.8;

  @media screen and (max-width: 800px) {
    padding: 30px 30px;
  }

  & section {
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Sides = styled.div`
  color: black;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  & span {
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 800;
  }

  & p {
    font-size: 17px;
    font-family: sans-serif;
  }

  & h2 {
    font-family: sans-serif;
    font-size: 30px;
    font-weight: 800;

    @media screen and (max-width: 800px) {
      font-size: 20px;
    }
  }
`;

const Shift = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
`;

const Lined = styled.div`
  color: black;

  & div {
    border-top: 1px solid rgba(0, 0, 0, 0.17);
  }
`;

const Red = styled.i`
  color: red;
  font-family: sans-serif;
`;
