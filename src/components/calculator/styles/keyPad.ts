import styled from "styled-components";

export const KeyPadWrapper = styled.div`
  background-color: #323844;
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
  background-color: #2a2e39;
  border-radius: 15px;
  border: 0;
  color: white;
  transition: all 0.2s linear;
  &:hover {
    background-color: #4c5059;
  }
  &:active {
    box-shadow: inset 0px 0px 5px #ffffff;
  }
`;

export const KeysRow = styled.div`
  display: flex;
  gap: 10px;
`;
