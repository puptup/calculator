import styled from "styled-components";
import { Button as KeyPadButton } from "./keyPad";

export const HistoryWrapper = styled.div`
  background-color: #323844;
  padding: 20px;
  border-radius: 40px;
  margin-left: 10px;
  color: white;
`;

export const HistoryTitle = styled.div`
  font-size: 20px;
`;

export const Button = styled(KeyPadButton)`
  height: 30px;
  font-size: 16px;
`;

// export const Button = styled.button<{ size: number }>`
//   width: ${(props) => props.size * 40 + (props.size - 1) * 10}px;
//   display: block;
//   font-size: 16px;
//   height: 30px;
//   color: white;
//   background-color: #2a2e39;
//   border-radius: 15px;
//   border: 0;
//   transition: all 0.2s linear;
//   &:hover {
//     background-color: #4c5059;
//   }
//   &:active {
//     box-shadow: inset 0px 0px 5px #ffffff;
//   }
// `;

export const HistoryHead = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
`;
