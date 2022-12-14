/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Operation } from "../../../../constants";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { calculatorAction, setValue } from "../../../../store/reducers/calculator";
import {
  Button,
  HistoryHead,
  HistoryTitle,
  HistoryWrapper,
  List,
  ListElement,
} from "../../styles/history";

const History = () => {
  const { history } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const clearHistory = () => {
    dispatch(calculatorAction(Operation.ClearHistory));
  };

  const setValueToScreen = (value: string) => () => {
    dispatch(setValue(value));
  };

  return (
    <HistoryWrapper>
      <HistoryHead>
        <HistoryTitle>History</HistoryTitle>
        <Button size={1.5} type="button" onClick={clearHistory}>
          Clear all
        </Button>
      </HistoryHead>
      {history.length ? (
        <List>
          {history.map(({ value, formula }, index) => (
            <ListElement key={index} onClick={setValueToScreen(value)}>
              {index + 1}. {formula} = {value}
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
