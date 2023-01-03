import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 20px;
  font-size: 20px;
  &.active {
    color: orange;
  }
`;

export const LinksContainer = styled.ul`
  margin-top: 10px;
  list-style: none;
  display: flex;
`;
export const LinkWrapper = styled.li`
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;
