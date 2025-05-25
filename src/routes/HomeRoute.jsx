import { Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/Footer";

const HomeRoutes = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeRoutes;