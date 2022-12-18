import { CalculatorWrapper, MainScreen } from "@styles/calculator";
import React, { useState } from "react";

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
    <CalculatorWrapper data-test="calculator">
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
