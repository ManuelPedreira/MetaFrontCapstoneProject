import { StyledButton } from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({ children, disabled, onClick, className }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
