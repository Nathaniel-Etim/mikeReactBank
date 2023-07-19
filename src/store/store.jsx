import { configureStore } from "@reduxjs/toolkit";
import UserInterface from "./UIstore";
import EventSlice from "./EventStore";

const Store = configureStore({
  reducer: {
    ui: UserInterface.reducer,
    event: EventSlice.reducer,
  },
});

export default Store;
