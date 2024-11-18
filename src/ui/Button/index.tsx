import SpinerSVG from "../svg/SpinnerSVG";
import { ButtonWrapper, StyledButton, StyledSpinner } from "./Button.styled";

type ButtonProps = {
  value: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  type?: "button" | "submit";
  loading?: boolean;
};

const Button = ({
  value,
  disabled,
  onClick,
  className,
  type = "button",
  loading = false,
}: ButtonProps) => {
  return (
    <ButtonWrapper className={className}>
      {loading ? (
        <StyledSpinner>
          <SpinerSVG />
        </StyledSpinner>
      ) : null}
      <StyledButton
        onClick={onClick}
        disabled={disabled}
        value={value}
        type={type}
        $loading={loading}
      />
    </ButtonWrapper>
  );
};

export default Button;
