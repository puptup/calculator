import { HeaderWrapper, Link, LinksContainer, LinkWrapper } from "@styles/header";
import * as React from "react";

const Header = () => {
  return (
    <HeaderWrapper>
      <LinksContainer>
        <LinkWrapper>
          <Link to="/">FC</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/cc">CC</Link>
        </LinkWrapper>
      </LinksContainer>
    </HeaderWrapper>
  );
};

export default Header;
