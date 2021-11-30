import { globalSlice } from "./slices/global";
import { AppThunk } from "./store";

export const addGlobal =
  (name: string, value: any): AppThunk =>
  (dispatch) => {
    dispatch(globalSlice.actions.set({ name, value }));
  };
