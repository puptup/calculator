/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import { Operation } from "@constants";
import { useAppDispatch, useAppSelector } from "@hooks";
import { RootState } from "@store";
import { calculatorAction, setValue } from "@store/reducers/calculator";
import {
  Button,
  HistoryHead,
  HistoryTitle,
  HistoryWrapper,
  List,
  ListElement,
} from "@styles/history";
import React from "react";

const mapState = (state: RootState) => state.calculator.history;

const History = () => {
  const history = useAppSelector(mapState);
  const dispatch = useAppDispatch();

  const clearHistory = () => {
    dispatch(calculatorAction(Operation.ClearHistory));
  };

  const setValueToScreen = (value: string) => () => {
    dispatch(setValue(value));
  };

  return (
    <HistoryWrapper data-test="history">
      <HistoryHead>
        <HistoryTitle>History</HistoryTitle>
        <Button data-test="clear_history" size={1.5} type="button" onClick={clearHistory}>
          Clear all
        </Button>
      </HistoryHead>
      {history.length ? (
        <List data-test="history_list">
          {history.map(({ value, formula }, index) => (
            <ListElement key={index} onClick={setValueToScreen(value)}>
              {formula.join("")} = {value}
            </ListElement>
          ))}
        </List>
      ) : (
        <div>History is empty</div>
      )}
    </HistoryWrapper>
  );
};

export default History;
