import { RootState } from "@store";
import { setTheme } from "@store/reducers/theme";
import { ControlPanelWrapper, IconWrapper } from "@styles/controlPanel";
import React from "react";
import { connect } from "react-redux";

interface ControPanelProps {
  theme: string;
  setNewTheme: (theme: "dark" | "ligth") => void;
  showHistory: boolean;
  toggleShowHistory: () => void;
}

class ControlPanel extends React.PureComponent<ControPanelProps> {
  switchTheme = () => {
    const { theme, setNewTheme } = this.props;
    setNewTheme(theme === "dark" ? "ligth" : "dark");
  };

  render() {
    const { theme, showHistory, toggleShowHistory } = this.props;
    return (
      <ControlPanelWrapper>
        <IconWrapper data-test="show_history" higthLite={showHistory} onClick={toggleShowHistory}>
          <i className="material-icons">history</i>
        </IconWrapper>
        {theme === "dark" ? (
          <IconWrapper data-test="to_light_mode" higthLite onClick={this.switchTheme}>
            <i className="material-icons">light_mode</i>
          </IconWrapper>
        ) : (
          <IconWrapper data-test="to_dark_mode" higthLite onClick={this.switchTheme}>
            <i className="material-icons">dark_mode</i>
          </IconWrapper>
        )}
      </ControlPanelWrapper>
    );
  }
}

const mapState = (state: RootState) => ({
  theme: state.theme.actual,
});

const mapDispatch = {
  setNewTheme: setTheme,
};

export default connect(mapState, mapDispatch)(ControlPanel);
