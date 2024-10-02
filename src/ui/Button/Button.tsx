import { StyledButton } from "./Button.styled";

type ButtonProps = {
 children: React.ReactNode;
 onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({children, onClick}: ButtonProps) => {
 return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button;