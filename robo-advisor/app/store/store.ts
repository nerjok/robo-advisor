import { configureStore } from "@reduxjs/toolkit";
import  investmentReducer from "./reducers/investment-state.reducers";

export const store = configureStore({
  reducer: {
    investmentReducer: investmentReducer
  },
});

// types (important for TS)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
