import React from "react";
import { StyledForm } from "./styled";
import Input from "../../Components/Input";
import LoginSection from "../../Components/LoginSection";
import Button from "../../Components/Button";

export default function LoginPage() {
  return (
    <LoginSection
      headingText="Hello, let's log in!"
      additionalText="Already have an account?"
      linkText="Sign up here!"
      linkPath="/signup"
    >
      <StyledForm>
        <Input
          LabelText="E-mail: "
          placeholder="somemail@xyz.com"
          name="email"
          type="email"
        />
        <Input
          LabelText="Password: "
          placeholder="************"
          name="password"
          type="password"
        />
        <Button>Login</Button>
      </StyledForm>
    </LoginSection>
  );
}
