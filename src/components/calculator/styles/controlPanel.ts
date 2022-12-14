import styled from "styled-components";

export const ControlPanelWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  color: white;
  margin-top: 20px;
`;

export const IconWrapper = styled.div<{ higthLite: boolean }>`
  color: ${({ higthLite }) => (higthLite ? "white" : "gray")};
  cursor: pointer;
`;
