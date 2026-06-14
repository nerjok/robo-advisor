import { configureStore, combineReducers } from "@reduxjs/toolkit";
import investmentReducer from "./reducers/investment-state.reducers";
import { loadState } from "./browser-storage";

const rootReducer = combineReducers({
  investmentReducer,
});

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  preloadedState: loadState(),
});

// types (important for TS)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
