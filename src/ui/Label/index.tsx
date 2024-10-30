import { ReactNode } from "react";
import { StyledLabel } from "./Label.styled";

type LabelProps = {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
};

const Label = ({ children, className, htmlFor }: LabelProps) => {
  return (
    <StyledLabel className={className} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

export default Label;
