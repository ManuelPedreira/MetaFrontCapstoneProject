import { StyledButton } from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  gridArea?: string;
};

const Button = ({ children, disabled, onClick, className, gridArea }: ButtonProps) => {
  return (
    <StyledButton className={className} style={{ gridArea }} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
