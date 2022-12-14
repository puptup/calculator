import styled from "styled-components";

export const ControlPanelWrapper = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const IconWrapper = styled.div<{ higthLite: boolean }>`
  opacity: ${({ higthLite }) => (higthLite ? "1" : "0.5")};
  cursor: pointer;
`;
