import { WrapperContainer } from "./SectionWrapper.style";

type SectionWrapperProps = {
  children: React.ReactNode;
  background?: boolean;
};

const SectionWrapper = ({ children, background }: SectionWrapperProps) => {
  return <WrapperContainer $background={background}>{children}</WrapperContainer>;
};

export default SectionWrapper;
