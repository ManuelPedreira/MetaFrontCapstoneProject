import { ChangeEventHandler } from "react";
import { InputsWrapper, StyledInput, StyledLabel } from "./Input.styled";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  value?: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isError?: boolean;
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  register?: ReturnType<UseFormRegister<FieldValues>>;
};

const Input = ({
  label,
  value,
  isError = false,
  type,
  onChange,
  id,
  style,
  className,
  register,
}: InputProps) => {
  return (
    <InputsWrapper className={className} style={style}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        value={value}
        type={type}
        onChange={onChange}
        id={id}
        {...register}
        $isError={isError}
      />
    </InputsWrapper>
  );
};

export default Input;
