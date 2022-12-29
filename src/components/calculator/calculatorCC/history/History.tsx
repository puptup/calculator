/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import { Operation } from "@constants";
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
import { connect } from "react-redux";

interface HistoryProps {
  history: {
    value: string;
    formula: string[];
  }[];
  setValue: (value: string) => void;
  clearHistory: () => void;
}

class History extends React.PureComponent<HistoryProps> {
  setValueToScreen = (value: string) => () => {
    this.props.setValue(value);
  };

  render() {
    const { history, clearHistory } = this.props;
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
              <ListElement key={index} onClick={this.setValueToScreen(value)}>
                {formula.join("")} = {value}
              </ListElement>
            ))}
          </List>
        ) : (
          <div>History is empty</div>
        )}
      </HistoryWrapper>
    );
  }
}

const mapState = (state: RootState) => ({
  history: state.calculator.history,
});

const mapDispatch = {
  clearHistory: () => calculatorAction(Operation.ClearHistory),
  setValue,
};

export default connect(mapState, mapDispatch)(History);
