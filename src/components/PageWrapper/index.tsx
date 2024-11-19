import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { StyledPageWrapper } from "./PageWrapper.styled";
import usePhoneResponsive from "../../hooks/usePhoneResponsive";
import { getIsRouteFootherOnPhone } from "../../types/routesList";

const PageWrapper = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  const { isPhone } = usePhoneResponsive();
  const location = useLocation();

  useEffect(() => {
    const showFoother = !isPhone || (isPhone && getIsRouteFootherOnPhone(location.pathname));
    setIsFooterVisible(showFoother);

    return () => setIsFooterVisible(true);
  }, [isPhone, location]);

  return (
    <StyledPageWrapper>
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer visible={isFooterVisible} />
    </StyledPageWrapper>
  );
};

export default PageWrapper;
