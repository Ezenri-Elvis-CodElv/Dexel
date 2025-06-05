import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import PrivateRoute from "./routes/PrivateRoute";

// Public Pages
import Landingpage from "./Pages/Landingpage";
import AboutUs from "./Pages/AboutUs";
import Faqs from "./Pages/Faqs";
import Wishlist from "./Pages/Wishlist";
import PlatForm from "./Pages/PlatForm";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Resources from "./Pages/Resources";
import Solution from "./Pages/Solution";
import Product from "./Pages/Product";

// Auth Pages
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ResetPassword from "./auth/ResetPassword";
import ForgetPassword from "./auth/ForgetPassword";

// Dashboard Pages
import DashboardTransaction from "./pages/DashboardTransaction";
import MultiRailPaymentsPage from "./pages/payment/MultiRailPaymentsPage";
import RetailManagementPage from "./pages/payment/RetailManagementPage";
import FraudPreventionPage from "./pages/payment/FraudPreventionPage";
import ReconciliationPage from "./pages/payment/ReconciliationPage";
import ReportingPage from "./pages/payment/ReportingPage";

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
      
      // Product sub-pages (public)
      { path: "product/multi-rail", element: <MultiRailPaymentsPage /> },
      { path: "product/retail-management", element: <RetailManagementPage /> },
      { path: "product/fraud-prevention", element: <FraudPreventionPage /> },
      { path: "product/reconciliation", element: <ReconciliationPage /> },
      { path: "product/reporting", element: <ReportingPage /> },
    ],
  },
  
  // Authentication routes (public)
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot-password", element: <ForgetPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
  
  // Protected dashboard routes
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      { index: true, element: <DashboardTransaction /> },
      { path: "payments", element: <MultiRailPaymentsPage /> },
      { path: "retail-management", element: <RetailManagementPage /> },
      { path: "fraud-prevention", element: <FraudPreventionPage /> },
      { path: "reconciliation", element: <ReconciliationPage /> },
      { path: "reporting", element: <ReportingPage /> },
    ],
  },
  
  // 404 Not Found (you might want to add this)
  // { path: "*", element: <NotFound /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;