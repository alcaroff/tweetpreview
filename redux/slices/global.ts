import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface globalState {
  tweetText: string;
}

const initialState: globalState = {
  tweetText: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    set(state, { payload }) {
      console.log(`set => ${payload.name}`);
      return { ...state, [payload.name]: payload.value };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.global,
      };
    },
  },
});
