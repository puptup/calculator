/* eslint-disable no-param-reassign */
import { Operation } from "@constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculatorState } from "@types";
import CalculatorInvoker from "@utils/command/invoker";

const initialState: CalculatorState = {
  value: "0",
  formula: [],
  history: [],
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    calculatorAction(state, action: PayloadAction<Operation | number>) {
      console.log("tests");
      CalculatorInvoker.executeCommandBySign(state, action.payload);
    },
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { calculatorAction, setValue } = calculatorSlice.actions;

export default calculatorSlice.reducer;
