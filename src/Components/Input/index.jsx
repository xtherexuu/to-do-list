import React from "react";
import { Label, StyledInput } from "./styled";

export default function Input({
  LabelText,
  name,
  placeholder,
  type,
  error,
  errorText,
}) {
  return (
    <Label>
      {LabelText}
      <StyledInput name={name} placeholder={placeholder} type={type} required />
    </Label>
  );
}
