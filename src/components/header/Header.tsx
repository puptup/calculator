import * as React from "react";
import styled from "styled-components";
import { HeaderWrapper, Link } from "./styles";

const LinksContainer = styled.ul``;
const LinkWrapper = styled.li`
  margin-right: 10px;
`;

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
