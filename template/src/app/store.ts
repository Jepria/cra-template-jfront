import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import WorkstateReducer from "./WorkstateSlice";

export const store = configureStore({
  reducer: {
    Workstate: WorkstateReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
