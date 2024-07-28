import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer/footer";

const App = () => {
  const { pathname } = useLocation();

  return (
    <main>
      <Header />
      <Outlet />
      {pathname === "/" && <Footer />}
    </main>
  );
};

export default App;
