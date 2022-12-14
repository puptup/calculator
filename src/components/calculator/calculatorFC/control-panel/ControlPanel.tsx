import React from "react";
import { ControlPanelWrapper, IconWrapper } from "../../styles/controlPanel";

interface ControlPanelProps {
  showHistory: boolean;
  toggleShowHistory: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ showHistory, toggleShowHistory }) => {
  return (
    <ControlPanelWrapper>
      <IconWrapper higthLite={showHistory} onClick={toggleShowHistory}>
        <i className="material-icons">history</i>
      </IconWrapper>
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
