import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  &.active {
    color: orange;
  }
`;
