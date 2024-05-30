import React from "react";
import { StyledButton } from "./styled";

export default function Button({ children, bgColor }) {
  return <StyledButton bgColor={bgColor}>{children}</StyledButton>;
}
