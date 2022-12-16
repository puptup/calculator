import * as React from "react";

import { HeaderWrapper, Link, LinksContainer, LinkWrapper } from "./styles";

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
