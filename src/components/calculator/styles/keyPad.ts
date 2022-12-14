import styled from "styled-components";

export const KeyPadWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 40px 0;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button<{ size: number }>`
  width: ${(props) => props.size * 60 + (props.size - 1) * 10}px;
  font-size: 20px;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.button.primary};
  border-radius: 15px;
  border: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  transition: all 0.2s linear;
  &:hover {
    background-color: ${({ theme }) => theme.palette.button.secondary};
  }
  &:active {
    box-shadow: inset 0px 0px 5px #ffffff;
  }
`;

export const KeysRow = styled.div`
  display: flex;
  gap: 10px;
`;
