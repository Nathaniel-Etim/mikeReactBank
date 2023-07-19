import { createSlice } from "@reduxjs/toolkit";

const account1 = {
  name: "samuel edet",
  password: 1111,
  accountNumber: 12345677,
  movements: [100, 500, -50, 5000, -1000],
};

const account2 = {
  name: "Nathanie edet",
  password: 2222,
  accountNumber: 12345678,
  movements: [100, 500, -50, 5000, -1000],
};

const accounts = [account1, account2];

const EventSlice = createSlice({
  name: "uiStore",
  initialState: {
    showPinInput: false,
    accounts,
    currentAccount: {},
    userCanLogin: false,
  },
  reducers: {
    onLogUserHandelerFn(state, action) {
      const allAcounts = state.accounts;
      const inputValues = action.payload;
      const isAValidUser = allAcounts.find((element) => {
        return element.accountNumber === inputValues.accountNumber;
      });

      if (!isAValidUser) {
        console.log("'");
        return;
      } else {
        state.currentAccount = isAValidUser;
        state.userCanLogin = true;
      }
    },
  },
});

export const EventSliceAction = EventSlice.actions;

export default EventSlice;
