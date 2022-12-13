import { configureStore } from "@reduxjs/toolkit";
import CalculatorReducer from "./reducers/calculator";

const store = configureStore({
  reducer: {
    calculator: CalculatorReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
