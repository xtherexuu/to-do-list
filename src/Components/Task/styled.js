import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lbg};
  border-radius: 12px;
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "priority progress"
    "content content"
    "date date"
    "manage manage";
  align-items: center;
`;

export const TaskPriority = styled.div`
  margin-bottom: 10px;
  display: inline-block;
  padding: 5px 7px;
  border-radius: 12px;
  font-size: 0.75rem;
  grid-area: priority;
  margin-right: 10px;
  ${({ priority }) =>
    priority === "High"
      ? css`
          background-color: ${({ theme }) => theme.colors.red};
        `
      : priority === "Medium"
      ? css`
          background-color: orange;
        `
      : priority === "Low"
      ? css`
          background-color: green;
        `
      : css`
          display: none;
        `}
`;

export const TaskProgressContainer = styled.div`
  margin-bottom: 10px;
  grid-area: progress;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
`;

export const TaskProgressBar = styled.div`
  position: relative;
  height: 5px;
  width: 100%;
  background-color: darkgray;
  border-radius: 5px;
  ${({ progress }) =>
    progress &&
    css`
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        height: 5px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.blue};
        width: calc(100% * ${({ progress }) => progress});
      }
    `}
`;

export const TaskProgressPercentage = styled.p`
  font-size: 0.7rem;
`;

export const TaskContent = styled.p`
  margin-bottom: 10px;
  grid-area: content;
  font-weight: 500;
  word-break: break-word;
  ${({ isDone }) =>
    isDone &&
    css`
      text-decoration: line-through;
    `}
`;

export const TaskDateContainer = styled.div`
  margin-bottom: 10px;
  grid-area: date;
  display: flex;
  color: darkgray;
  display: flex;
  align-items: center;
  gap: 5px;
  ${({ clockColor }) =>
    clockColor === "red"
      ? css`
          & > svg {
            color: ${({ theme }) => theme.colors.lightRed};
          }
        `
      : clockColor === "blue"
      ? css`
          & > svg {
            color: ${({ theme }) => theme.colors.lightBlue};
          }
        `
      : null}
`;

export const TaskDate = styled.p`
  font-size: 0.85rem;
`;

export const ManageTaskContainer = styled.div`
  grid-area: manage;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px;
  & > svg {
    width: 18px;
    height: 18px;
  }
  &:active {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
  ${({ isDone }) =>
    isDone &&
    css`
      color: ${({ theme }) => theme.colors.lightBlue};
    `}
`;
