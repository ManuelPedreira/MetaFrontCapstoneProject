import { ReactElement, cloneElement, CSSProperties } from "react";

type GridItemWrapperProps = {
  children: ReactElement;
  visible?: boolean;
  gridArea?: string;
};

const GridItemWrapper = ({ children, visible = true, gridArea }: GridItemWrapperProps) => {
  const styles: CSSProperties = {
    ...(gridArea ? { gridArea } : {}),
  };

  return visible ? cloneElement(children, { style: { ...children.props.style, ...styles } }) : null;
};

export default GridItemWrapper;
