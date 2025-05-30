import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import HomeRoute from "./routes/HomeRoute";
import Faqs from "./Pages/Faqs";
import Shop from "./Pages/Shop";
import Landingpage from "./Pages/Landingpage";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import PlatForm from "./Pages/PlatForm";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ResetPassword from "./auth/ResetPassword";
import ForgetPassword from "./auth/ForgetPassword";
import Solution from "./Pages/Solution";
import Blog from "./Pages/Blog";
import Resources from "./Pages/Resources";
import Product from "./Pages/Product";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "faqs", element: <Faqs /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "platform", element: <PlatForm /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <Contact /> },
      { path: "shop", element: <Shop /> },
      { path: "blog", element: <Blog /> },
      { path: "resources", element: <Resources /> },
      { path: "solution", element: <Solution /> },
      { path: "product", element: <Product /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot-password", element: <ForgetPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
