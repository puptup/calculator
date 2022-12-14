import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  /* margin: 0 auto; */
  margin-left: calc(50% - 200px);
  position: relative;
  width: fit-content;
  background-color: #21242d;
  border-radius: 50px;
  box-shadow: 19px 20px 21px 0px rgb(12 14 16 / 26%);
  display: flex;
  transition: width 1s ease-in-out;
`;

export const MainScreen = styled.div`
  width: 400px;
`;
