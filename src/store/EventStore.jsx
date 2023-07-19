import { createSlice } from "@reduxjs/toolkit";

const account1 = {
  name: "samuel edet",
  password: 1111,
  accountNumber: 12345677,
  accountStatus: "suspended",
  balance: 120000,
  movements: [
    {
      reciverName: "Nathaniel",
      date: "27/11/2232",
      amount: 100,
      dicription: "feeding",
    },
    {
      reciverName: "DAVID",
      date: "27/21/2232",
      amount: -1100,
      dicription: "morgage",
    },
    {
      reciverName: "KFT",
      date: "27/11/2023",
      amount: 10000,
      dicription: "laptop",
    },
    {
      reciverName: "Joseph",
      date: "27/11/2232",
      amount: -100,
      dicription: "eng",
    },
    {
      reciverName: "Imoh",
      date: "27/11/2232",
      amount: -100,
    },
    {
      reciverName: "Donals",
      date: "27/11/2232",
      amount: -150,
    },
    {
      reciverName: "Chicken",
      date: "27/11/2232",
      amount: -100,
    },
  ],
};

const account2 = {
  name: "Nathanie edet",
  password: 2222,
  accountStatus: "active",
  balance: 120000,
  accountNumber: 12345678,
  movements: [
    {
      reciverName: "Nathaniel",
      date: "27/11/2232",
      amount: 100,
    },
    {
      reciverName: "DAVID",
      date: "27/11/2232",
      amount: -1100,
    },
    {
      reciverName: "KFT",
      date: "27/11/2232",
      amount: 10000,
    },
    {
      reciverName: "Joseph",
      date: "27/11/2232",
      amount: -100,
    },
    {
      reciverName: "Imoh",
      date: "27/11/2232",
      amount: -100,
    },
  ],
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

      if (isAValidUser) {
        state.currentAccount = isAValidUser;
        console.log("entered");
        if (state.currentAccount.password === inputValues.password) {
          state.userCanLogin = true;
        }
      } else {
        return;
      }
    },

    onLogUserOut(state) {
      state.currentAccount = {};
      state.userCanLogin = false;
    },
  },
});

export const EventSliceAction = EventSlice.actions;

export default EventSlice;
