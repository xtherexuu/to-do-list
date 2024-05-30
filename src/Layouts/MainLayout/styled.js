import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: #5937ff;
  /* background-color: white; */
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

export const StyledLink = styled(Link)`
  color: unset;
  text-decoration: none;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 15px;
`;

export const Heading = styled.h1`
  margin: 0;
  color: white;
  font-size: 1.4rem;
  font-weight: 800;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled(Link)`
  border: none;
  background-color: #9dff68;
  padding: 5px 10px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  color: black;
  ${({ color2 }) =>
    color2 &&
    css`
      background-color: #ff4837;
    `}
`;

export const Footer = styled.footer``;
