import { createWrapper } from "next-redux-wrapper";
import { globalSlice } from "./slices/global";
import { Action } from "redux";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";

// const combinedReducer = combineReducers({
//   [globalSlice.name]: globalSlice.reducer,
// });

// create a makeStore function
const makeStore = () =>
  configureStore({
    reducer: {
      [globalSlice.name]: globalSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// export an assembled wrapper
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });