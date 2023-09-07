import React from "react";
import styled from "styled-components";

function NewPasswordCard() {
  return (
    <Card>
      <h5>Update Password</h5>
      <EachInputContainer>
        <InputContainer>
          <label> Account Number :</label>
          <input type="text" required />
        </InputContainer>{" "}
        <InputContainer>
          <label> Account Number :</label>
          <input type="text" required />
        </InputContainer>
      </EachInputContainer>
    </Card>
  );
}

export default NewPasswordCard;
const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 60%;
  margin: 5px;
  border: 1px solid grey;
  padding: 20px 20px;
  gap: 50px;

  h5 {
    font-size: 1.25rem;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    font-weight: 500;
    line-height: 1.2;
    color: #334152;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    font-size: 15px;
    font-family: "Avenir Next W01", "Proxima Nova W01", "Rubik", -apple-system,
      system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    border: none;
    color: rgba(90, 99, 126, 0.749);
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  & input {
    border: none;
    border-bottom: 1px solid rgba(90, 99, 126, 0.749);
    width: 250px;
    color: rgba(90, 99, 126, 0.749);

    &:focus {
      outline: none;
    }
  }
`;

const EachInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
