import * as React from "react";
import styled from "styled-components";
import { HeaderWrapper, Link } from "./styles";

const LinksContainer = styled.ul`
  margin-top: 10px;
  list-style: none;
`;
const LinkWrapper = styled.li`
  margin-right: 10px;
  display: inline;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.background.primary};
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
