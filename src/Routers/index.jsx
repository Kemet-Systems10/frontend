import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <>Dashboard</>,
        index: true,
      },
      {
        path: "/Dashboard",
        element: <>Dashboard</>,
      },
      {
        path: "POS",
        element: <>POS</>,
      },
      {
        path: "Products",
        element: <>Products</>,
      },
      {
        path: "Categories",
        element: <>Categories</>,
      },
      {
        path: "Inventory",
        element: <>Inventory</>,
      },
      {
        path: "Orders",
        element: <>Orders</>,
      },
      {
        path: "Customers",
        element: <>Customers</>,
      },
      {
        path: "Users",
        element: <>Users</>,
      },
      {
        path: "Payments",
        element: <>Payments</>,
      },
      {
        path: "Reports",
        element: <>Reports</>,
      },
      {
        path: "Settings",
        element: <>Settings</>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
