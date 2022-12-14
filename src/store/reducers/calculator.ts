/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Operation } from "../../constants";
import CalculatorInvoker from "../../utils/command/invoker";
import { CalculatorState } from "../../types";

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
      CalculatorInvoker.executeCommandBySign(state, action.payload);
    },
  },
});

export const { calculatorAction } = calculatorSlice.actions;

export default calculatorSlice.reducer;
