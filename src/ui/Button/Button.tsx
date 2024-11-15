import { StyledButton } from "./Button.styled";

type ButtonProps = {
  value: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  type?: "button" | "submit";
};

const Button = ({ value, disabled, onClick, className, type = "button" }: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      disabled={disabled}
      value={value}
      type={type}
    />
  );
};

export default Button;
