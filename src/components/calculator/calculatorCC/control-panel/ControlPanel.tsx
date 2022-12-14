import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../../store";
import { setTheme } from "../../../../store/reducers/theme";
import { ControlPanelWrapper, IconWrapper } from "../../styles/controlPanel";

const mapState = (state: RootState) => ({
  theme: state.theme.actual,
});

const mapDispatch = {
  setNewTheme: setTheme,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  showHistory: boolean;
  toggleShowHistory: () => void;
}

class ControlPanel extends React.PureComponent<Props> {
  switchTheme = () => {
    const { theme, setNewTheme } = this.props;
    if (theme === "dark") {
      setNewTheme("ligth");
    } else {
      setNewTheme("dark");
    }
  };
  render() {
    const { showHistory, toggleShowHistory } = this.props;
    return (
      <ControlPanelWrapper>
        <IconWrapper higthLite={showHistory} onClick={toggleShowHistory}>
          <i className="material-icons">history</i>
        </IconWrapper>
        <IconWrapper higthLite onClick={this.switchTheme}>
          <i className="material-icons">dark_mode</i>
        </IconWrapper>
      </ControlPanelWrapper>
    );
  }
}

export default connector(ControlPanel);