import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setTheme } from "../../../../store/reducers/theme";
import { ControlPanelWrapper, IconWrapper } from "../../styles/controlPanel";

interface ControlPanelProps {
  showHistory: boolean;
  toggleShowHistory: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ showHistory, toggleShowHistory }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.actual);

  const switchTheme = () => {
    if (theme === "dark") {
      dispatch(setTheme("ligth"));
    } else {
      dispatch(setTheme("dark"));
    }
  };

  return (
    <ControlPanelWrapper>
      <IconWrapper higthLite={showHistory} onClick={toggleShowHistory}>
        <i className="material-icons">history</i>
      </IconWrapper>
      <IconWrapper higthLite onClick={switchTheme}>
        <i className="material-icons">dark_mode</i>
      </IconWrapper>
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
