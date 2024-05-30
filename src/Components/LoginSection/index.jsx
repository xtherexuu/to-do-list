import React from "react";
import {
  AdditionalLink,
  AdditionalText,
  SectionHeading,
  Wrapper,
} from "./styled";

export default function LoginSection({
  headingText,
  additionalText,
  linkText,
  linkPath,
  children,
}) {
  return (
    <Wrapper>
      <SectionHeading>{headingText}</SectionHeading>
      {children}
      <AdditionalText>
        {additionalText}{" "}
        <AdditionalLink to={linkPath}>{linkText}</AdditionalLink>
      </AdditionalText>
    </Wrapper>
  );
}
