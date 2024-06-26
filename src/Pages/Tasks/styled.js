import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const FiltersSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ButtonDescription = styled.p`
  font-size: 0.8rem;
`;

export const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  & > svg {
    width: 20px;
    height: 20px;
  }
  &:active {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
  ${({ isOpened }) =>
    isOpened &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `}
`;

export const FiltersWindow = styled.div`
  padding: 0 15px;
`;

export const FilterCategory = styled.div`
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid gray;
`;

export const FilterCategoryHeading = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 15px;
`;

export const FilterLabel = styled.label`
  width: auto;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const FilterInput = styled.div`
  display: inline-block;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  width: 15px;
  height: 15px;
  & > svg {
    display: none;
  }
  position: relative;
  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: ${({ theme }) => theme.colors.blue};
      & > svg {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
      }
    `}
`;

export const SortWindow = styled.div`
  padding: 0 15px;
`;

export const SortCategory = styled.div`
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid gray;
`;

export const SortCategoryHeading = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const SortOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
`;

export const SortButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 10px;
  & > svg {
    width: 19px;
    height: 22px;
  }
  &:active {
    color: ${({ theme }) => theme.colors.blue};
  }
  ${({ isChecked }) =>
    isChecked &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `}
`;

export const TasksContainer = styled.div`
  padding: 15px 15px 90px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
