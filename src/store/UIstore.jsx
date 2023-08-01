import { createSlice } from "@reduxjs/toolkit";

const UserInterface = createSlice({
  name: "uiStore",
  initialState: {
    showPinInput: false,
  },
  reducers: {
    showUserPin(state) {
      state.showPinInput = true;
    },

    hideUserPin(state) {
      state.showPinInput = false;
    },
  },
});

export const userInterfaceAction = UserInterface.actions;

export default UserInterface;
