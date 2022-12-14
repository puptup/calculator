import React, { useState } from "react";
import { CalculatorWrapper, MainScreen } from "../styles/calculator";
import ControlPanel from "./control-panel";
import Display from "./display";

import History from "./history";
import KeyPad from "./keypad";

const CalculatorFC = () => {
  const [showHistory, setShowHistory] = useState(false);

  const toggleShowHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <CalculatorWrapper>
      <MainScreen>
        <ControlPanel toggleShowHistory={toggleShowHistory} showHistory={showHistory} />
        <Display />
        <KeyPad />
      </MainScreen>
      {showHistory && <History />}
    </CalculatorWrapper>
  );
};

export default CalculatorFC;
