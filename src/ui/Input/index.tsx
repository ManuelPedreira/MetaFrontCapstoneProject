import { ChangeEventHandler } from "react";
import { InputsWrapper, StyledInput, StyledLabel } from "./Input.styled";

type InputProps = {
  label: string;
  value?: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isError?: boolean;
  id?: string;
};

const Input = ({ label, value, type, onChange, id }: InputProps) => {
  return (
    <InputsWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput value={value} type={type} onChange={onChange} id={id}></StyledInput>
    </InputsWrapper>
  );
};

export default Input;
