import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 15px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HeaderWelcome = styled.p`
  font-size: 0.85rem;
  & > b {
    font-weight: 600;
  }
`;

export const HeaderHeading = styled.h2`
  font-weight: 600;
  font-size: 1.4rem;
`;

export const AddTaskForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin-top: 25px;
`;

export const AddTaskInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
`;

export const AddTaskInput = styled.input`
  padding: 8px;
  font-size: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lbg};
  color: ${({ theme }) => theme.colors.white};
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const AddTaskButton = styled.button`
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px;
  &:active {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const LastAddedTasksContainer = styled.div`
  padding-bottom: 81px;
  margin-top: 30px;
`;

export const LastAddedTasksHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LastAddedTaskHeading = styled.h3`
  font-weight: 500;
`;

export const SeeAllTasksButton = styled(Link)`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.blue};
`;

export const LastAddedTasks = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
