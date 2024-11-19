import { RouteObject } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import ReservationPage from "./pages/ReservationPage";
import { getRoute } from "./types/routesList";
import ReservationConfirmPage from "./pages/ReservationConfirmPage";
import PageWrapper from "./components/PageWrapper";

const routes: RouteObject[] = [
  {
    path: getRoute("Home"),
    element: <PageWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: getRoute("Reservations"),
        element: <ReservationPage />,
      },
      {
        path: `${getRoute("Reservations")}/confirm`,
        element: <ReservationConfirmPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

export default routes;
