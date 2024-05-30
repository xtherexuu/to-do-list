import React from "react";
import LoginSection from "../../Components/LoginSection";
import { StyledForm } from "./styled";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function SignupPage() {
  return (
    <LoginSection
      additionalText="Don't have an account?"
      headingText="Hello, let's sign up!"
      linkText="Log in here!"
      linkPath="/login"
    >
      <StyledForm>
        <Input name="name" placeholder="Steve" LabelText="Name:" />
        <Input name="surname" placeholder="White" LabelText="Surname:" />
        <Input
          name="email"
          placeholder="somemail@xyz.com"
          LabelText="E-mail:"
          type="email"
        />
        <Input
          name="password"
          placeholder="*************"
          LabelText="Password:"
          type="password"
        />
        <Input
          name="confirmPassword"
          placeholder="*************"
          LabelText="Confirm password:"
          type="password"
        />
        <Button>Signup</Button>
      </StyledForm>
    </LoginSection>
  );
}
