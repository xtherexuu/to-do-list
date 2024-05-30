import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  border: solid 2px ${({ theme }) => theme.colors.blue};
  border-radius: 6px;
  padding: 7px;
  &:focus {
    outline-color: ${({ theme }) => theme.colors.lightBlue};
  }
  &:invalid {
    border-color: ${({ theme }) => theme.colors.red};
    outline-color: ${({ theme }) => theme.colors.red};
  }
`;
