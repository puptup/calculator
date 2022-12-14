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
  font-size: 14px;
  height: 14px;
  overflow: hidden;
  position: relative;
  color: #717990;
`;

export const ValueText = styled.div`
  color: white;
  font-size: 24px;
  height: 24px;
`;
