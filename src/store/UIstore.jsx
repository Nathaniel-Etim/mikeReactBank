import { createSlice } from "@reduxjs/toolkit";

const UserInterface = createSlice({
  name: "uiStore",
  initialState: {
    showPinInput: false,
  },
  reducers: {
    //
  },
});

export const userInterfaceAction = UserInterface.actions;

export default UserInterface;
