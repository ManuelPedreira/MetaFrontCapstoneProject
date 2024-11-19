const routesListData = [
  { name: "Home", route: "/" , footerPhone: true },
  { name: "About", route: "/" , footerPhone: true },
  { name: "Menu", route: "/" , footerPhone: true },
  { name: "Reservations", route: "/reservations" , footerPhone: false },
  { name: "Order", route: "/" , footerPhone: true },
  { name: "Login", route: "/" , footerPhone: true },
] as const;

type RouteData = {
  name: string;
  route: string;
  footerPhone: boolean;
};

type NavName = (typeof routesListData)[number]["name"];

export const routesList: readonly RouteData[] = routesListData;

export const getRoute = (pageName: NavName) => {
  return routesListData.find(({ name }) => name === pageName)?.route ?? "/";
};

export const getIsRouteFootherOnPhone  = (path: string) => {
  return routesListData.find(({ route }) => route === path)?.footerPhone ?? true;
};
