const routesListData = [
  { name: "Home", route: "/" },
  { name: "About", route: "/" },
  { name: "Menu", route: "/" },
  { name: "Reservations", route: "/reservations" },
  { name: "Order", route: "/" },
  { name: "Login", route: "/" },
] as const;

type RouteData = {
  name: string;
  route: string;
};

type NavName = (typeof routesListData)[number]["name"];

export const routesList: readonly RouteData[] = routesListData;

export const getRoute = (pageName: NavName) => {
  return routesListData.find(({ name }) => name === pageName)?.route ?? "/";
};
