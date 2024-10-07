import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./theme/GlobalStyles";
import SectionWrapper from "./ui/SectionWrapper";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <main>
      <NavBar />
      <RouterProvider router={router} />
      <SectionWrapper background>
        <Footer />
      </SectionWrapper>
      <GlobalStyles />
    </main>
  );
}

export default App;
