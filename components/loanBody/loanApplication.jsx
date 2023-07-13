import React from "react";
import { Container } from "../aboutBody/aboutTheCompany";
import { SubContainerLeft } from "../aboutBody/aboutTheCompany";
import { SubContainerRight } from "../aboutBody/aboutTheCompany";
import { styled } from "styled-components";
import { HomeLoanContainer } from "../homecontent/homeLoan";
import { useState } from "react";
import { LoanContent } from "../homecontent/homeLoan";
import { GridImage } from "../homecontent/homeLoan";

function LoanApplication() {
  const reStyled = {
    background: "#eef",
  };

  const [eachLoan, setEachLoan] = useState([
    {
      image: "https://hypextb.com/public/img/bg-img/2.jpg",
      title: "We take care of you",
    },
    {
      image: "https://hypextb.com/public/img/bg-img/3.jpg",
      title: "No documents needed",
    },
    {
      image: "https://hypextb.com/public/img/bg-img/4.jpg",
      title: "Fast & easy loans",
    },
    {
      image: "https://hypextb.com/public/img/bg-img/2.jpg",
      title: "We take care of you",
    },
  ]);

  const EachGrid = eachLoan.map((element, index) => {
    return (
      <LoanContent key={index}>
        <GridImage image={element.image}></GridImage>
        <h4>{element.title}</h4>
      </LoanContent>
    );
  });
  return (
    <Container style={reStyled}>
      <SubContainerLeft>
        <FormWritings>
          <h1>Fill the form below to apply for a loan</h1>
          <span>*FOR ONLY EXISTING CUSTOMERS *</span>
          <p>
            A representative will get in touch with you via the channels
            provided on the proceedings of your loan request.
          </p>
        </FormWritings>
        <Form>
          <form>
            <section>
              <div>
                <label htmlFor="firstName">First name</label>
                <br />
                <input type="text" name="firstName" id="firstName" />
              </div>
              <div>
                <label htmlFor="lastName">Last name</label>
                <br />
                <input type="text" name="LastName" id="lastName" />
              </div>
            </section>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" />
            <label htmlFor="phoneNumber">Phone number</label>
            <br />
            <input type="number" name="phoneNumber" id="phoneNumber" />
            <label htmlFor="country">Country</label>
            <br />
            <input type="text" name="country" id="country" />

            <button>START APPLICATION</button>
          </form>
        </Form>
      </SubContainerLeft>
      <SubContainerRight>
        <HomeLoanContainer>{EachGrid}</HomeLoanContainer>
      </SubContainerRight>
    </Container>
  );
}

export default LoanApplication;

const FormWritings = styled.div`
  color: black;
  line-height: 1.7;

  & h1 {
    color: black;
    font-size: 40px;
  }

  & span {
    color: red;
    font-weight: 800;
    font-size: 18px;
  }
`;

const Form = styled.section`
  color: black;
  width: 100%;

  & input {
    width: 100%;
    height: 38px;
    margin-bottom: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  & section {
    display: flex;
    gap: 3rem;
    width: 100%;
  }

  & div {
    width: 46%;
  }

  & label {
    font-size: 17px;
    opacity: 0.7;
    font-weight: 600;
    font-family: sans-serif;
  }

  & button {
    width: 100%;
    background: red;
    color: white;
  }
`;
