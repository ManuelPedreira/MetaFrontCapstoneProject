import { useEffect, useState } from "react";
import theme from "../theme/theme";

const phoneBreak = parseInt(theme.frames.resolution.phoneBreak.minWidth);

const useIsPhone = () => {
  const [isPhone, setIsPhone] = useState<boolean>(window.innerWidth < phoneBreak);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < phoneBreak);
    };
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {isPhone};
};

export default useIsPhone;
