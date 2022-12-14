/* eslint-disable react/no-array-index-key */
import React from "react";
import { Operation } from "../../../../constants";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { calculatorAction } from "../../../../store/reducers/calculator";
import { Button, HistoryHead, HistoryTitle, HistoryWrapper, List } from "../../styles/history";

const History = () => {
  const { history } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const clearHistory = () => {
    dispatch(calculatorAction(Operation.ClearHistory));
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
            <li key={index}>
              {index + 1}. {formula} = {value}
            </li>
          ))}
        </List>
      ) : (
        <div>History is empty</div>
      )}
    </HistoryWrapper>
  );
};

export default History;
