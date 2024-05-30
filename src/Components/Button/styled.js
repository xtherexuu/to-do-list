import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 7px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  ${({ bgColor }) =>
    bgColor === "green"
      ? css`
          color: black;
          background-color: ${({ theme }) => theme.colors.green};
          &:active {
            background-color: ${({ theme }) => theme.colors.lightGreen};
          }
        `
      : bgColor === "red"
      ? css`
          color: white;
          background-color: ${({ theme }) => theme.colors.red};
          &:active {
            background-color: ${({ theme }) => theme.colors.lightRed};
          }
        `
      : css`
          color: white;
          background-color: ${({ theme }) => theme.colors.blue};
          &:active {
            background-color: ${({ theme }) => theme.colors.lightBlue};
          }
        `}
`;
