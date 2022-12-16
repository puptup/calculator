import React from "react";
import { CalculatorWrapper, MainScreen } from "../styles/calculator";
import ControlPanel from "./control-panel";
import Display from "./display";
import History from "./history";
import KeyPad from "./keypad";

interface CalculatorCCState {
  showHistory: boolean;
}

class CalculatorCC extends React.Component<{}, CalculatorCCState> {
  state = { showHistory: false };

  toggleShowHistory = () => {
    this.setState((prev) => ({
      showHistory: !prev.showHistory,
    }));
  };

  render() {
    const { showHistory } = this.state;
    return (
      <CalculatorWrapper data-test="calculator">
        <MainScreen>
          <ControlPanel toggleShowHistory={this.toggleShowHistory} showHistory={showHistory} />
          <Display />
          <KeyPad />
        </MainScreen>
        {showHistory && <History />}
      </CalculatorWrapper>
    );
  }
}

export default CalculatorCC;
