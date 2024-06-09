import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.footer`
  position: fixed;
  bottom: 0px;
  width: calc(100vw);
  left: 0;
  border-radius: 12px 12px 0 0;
  padding: 15px 15px 20px;
  background-color: ${({ theme }) => theme.colors.lbg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  height: 20px;
  width: 20px;
  & > svg {
    height: 100%;
    width: 100%;
    &.svg--active {
      display: none;
    }
  }
  &.active {
    & > svg {
      display: none;
      &.svg--active {
        color: ${({ theme }) => theme.colors.blue};
        display: block;
      }
      &.svg--alwaysActive {
        color: ${({ theme }) => theme.colors.blue};
        display: block;
      }
    }
  }
`;

export const AddTaskButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 8px;
  color: ${({ theme }) => theme.colors.white};
  & > svg {
    height: 20px;
    width: 20px;
  }
`;
