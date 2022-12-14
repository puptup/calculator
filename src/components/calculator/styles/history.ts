import styled from "styled-components";
import { Button as KeyPadButton } from "./keyPad";

export const HistoryWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 20px;
  border-radius: 40px;
  margin-left: 10px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const HistoryTitle = styled.div`
  font-size: 20px;
`;

export const Button = styled(KeyPadButton)`
  height: 30px;
  font-size: 16px;
`;

export const HistoryHead = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListElement = styled.li`
  cursor: pointer;
  margin-bottom: 10px;
`;
