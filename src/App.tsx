import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./theme/GlobalStyles";
import SectionWrapper from "./ui/SectionWrapper";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <RouterProvider router={router} />
      <SectionWrapper background>
        <Footer />
      </SectionWrapper>
    </ThemeProvider>
  );
}

export default App;
