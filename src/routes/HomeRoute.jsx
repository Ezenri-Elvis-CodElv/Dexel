import { Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ScrollToTop from "../ScrollToTop";

const HomeRoutes = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeRoutes;