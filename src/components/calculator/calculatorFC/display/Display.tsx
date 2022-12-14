import React from "react";
import { useAppSelector } from "../../../../hooks";
import { DisplayWrapper, FormulaText, ValueText } from "../../styles/display";

const Display = () => {
  const { formula, value } = useAppSelector((state) => state.calculator);

  return (
    <DisplayWrapper>
      <FormulaText>{formula.join("")}</FormulaText>
      <ValueText>{value}</ValueText>
    </DisplayWrapper>
  );
};

export default Display;
