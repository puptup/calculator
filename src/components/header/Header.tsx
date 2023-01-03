import { HeaderWrapper, Link, LinksContainer, LinkWrapper } from "@styles/header";
import { addToast } from "puptuptoasts";
import * as React from "react";

const Header = () => {
  const addToastOnSwitch = (page: string) => () => {
    addToast({
      type: "info",
      description: `Now at ${page} components page`,
      title: "Page",
    });
  };

  return (
    <HeaderWrapper>
      <LinksContainer>
        <LinkWrapper onClick={addToastOnSwitch("functional")}>
          <Link to="/">FC</Link>
        </LinkWrapper>
        <LinkWrapper onClick={addToastOnSwitch("class")}>
          <Link to="/cc">CC</Link>
        </LinkWrapper>
      </LinksContainer>
    </HeaderWrapper>
  );
};

export default Header;
