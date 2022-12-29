import { useAppDispatch, useAppSelector } from "@hooks";
import { RootState } from "@store";
import { setTheme } from "@store/reducers/theme";
import { ControlPanelWrapper, IconWrapper } from "@styles/controlPanel";
import React from "react";

interface ControlPanelProps {
  showHistory: boolean;
  toggleShowHistory: () => void;
}

const mapState = (state: RootState) => state.theme.actual;

const ControlPanel: React.FC<ControlPanelProps> = ({ showHistory, toggleShowHistory }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(mapState);

  const switchTheme = () => {
    dispatch(setTheme(theme === "dark" ? "ligth" : "dark"));
  };

  return (
    <ControlPanelWrapper>
      <IconWrapper data-test="show_history" higthLite={showHistory} onClick={toggleShowHistory}>
        <i className="material-icons">history</i>
      </IconWrapper>
      {theme === "dark" ? (
        <IconWrapper data-test="to_light_mode" higthLite onClick={switchTheme}>
          <i className="material-icons">light_mode</i>
        </IconWrapper>
      ) : (
        <IconWrapper data-test="to_dark_mode" higthLite onClick={switchTheme}>
          <i className="material-icons">dark_mode</i>
        </IconWrapper>
      )}
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
