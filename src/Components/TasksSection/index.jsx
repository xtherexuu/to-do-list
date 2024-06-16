import React from "react";
import { Header, HeaderHeading, Wrapper } from "./styled";

export default function TasksSection({ heading, children }) {
  return (
    <Wrapper>
      <Header>
        <HeaderHeading>{heading}</HeaderHeading>
      </Header>
      {children}
    </Wrapper>
  );
}
