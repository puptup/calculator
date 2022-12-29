import styled from "styled-components";

export const DisplayWrapper = styled.div`
  padding: 30px 40px 20px 0;
  display: flex;
  flex-direction: column;
  border-radius: 50px 50px 0 0;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 20px;
  overflow: hidden;
`;

export const FormulaText = styled.div`
  font-size: 20px;
  height: 20px;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const ValueText = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 20px;
  height: 20px;
`;
