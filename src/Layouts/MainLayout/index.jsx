import React from "react";
import {
  Button,
  Buttons,
  Footer,
  Header,
  Heading,
  StyledLink,
  Wrapper,
} from "./styled";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Wrapper>
      <Header>
        <Heading>
          <StyledLink to="/">TasksHarmony</StyledLink>
        </Heading>
        <Buttons>
          <Button to="/login">Login</Button>
          <Button to="/signup" color2={true}>
            Signup
          </Button>
        </Buttons>
      </Header>
      <Outlet />
      <Footer></Footer>
    </Wrapper>
  );
}
