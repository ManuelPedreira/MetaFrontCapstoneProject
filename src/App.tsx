import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./theme/GlobalStyles";
import Wrapper from "./ui/Wrapper";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Wrapper background>
        <Footer />
      </Wrapper>
      <GlobalStyles />
    </>
  );
}

export default App;
