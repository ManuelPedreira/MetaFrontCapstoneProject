import { WrapperContainer } from "./SectionWrapper.style";

type SectionWrapperProps = {
  children: React.ReactNode;
  background?: boolean;
  className?: string;
};

const SectionWrapper = ({ children, background, className }: SectionWrapperProps) => {
  return <WrapperContainer className={className} $background={background}>{children} </WrapperContainer>;
};

export default SectionWrapper;
