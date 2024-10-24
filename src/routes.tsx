import { RouteObject } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import ReservationPage from "./pages/Reservation";
import { getRoute } from "./types/routesList";

const routes: RouteObject[] = [
  {
    path: getRoute("Home"),
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: getRoute("Reservations"),
    element: <ReservationPage />,
  },
];

export default routes;
