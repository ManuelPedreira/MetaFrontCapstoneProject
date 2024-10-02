import { RouteObject } from "react-router-dom";
import Landing from "./pages/Landing";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
    /*  errorElement: <ErrorPage />, */
  },
  /*   {
    path: "post/:postId",
    element: <PostDetail />,
    errorElement: <ErrorPage />,
  }, */
];

export default routes;
