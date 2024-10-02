import { WrapperContainer } from "./Wrapper.style";

type WrapperProps = {
  children: React.ReactNode;
  background?: boolean;
};

const Wrapper = ({ children, background }: WrapperProps) => {
  return <WrapperContainer $background={background}>{children}</WrapperContainer>;
};

export default Wrapper;
