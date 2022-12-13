/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";

interface HistoryProps {
  history: {
    value: string;
    formula: string;
  }[];
  clearHistory: () => void;
}

const History: FC<HistoryProps> = ({ history, clearHistory }) => {
  return (
    <div>
      <button type="button" onClick={clearHistory}>
        Clear history
      </button>
      {history.map(({ value, formula }, index) => (
        <div key={index}>
          {index + 1} {formula} = {value}
        </div>
      ))}
    </div>
  );
};

export default History;
