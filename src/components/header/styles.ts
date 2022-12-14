import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 20px;
  &.active {
    color: orange;
  }
`;
