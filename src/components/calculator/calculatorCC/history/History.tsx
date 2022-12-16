/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Operation } from "../../../../constants";
import { RootState } from "../../../../store";
import { calculatorAction, setValue } from "../../../../store/reducers/calculator";
import {
  Button,
  HistoryHead,
  HistoryTitle,
  HistoryWrapper,
  List,
  ListElement,
} from "../../styles/history";

const mapState = (state: RootState) => ({
  history: state.calculator.history,
});

const mapDispatch = {
  clearHistory: () => calculatorAction(Operation.ClearHistory),
  setValue,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

class History extends React.PureComponent<PropsFromRedux> {
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
                {index + 1}. {formula} = {value}
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

export default connector(History);
