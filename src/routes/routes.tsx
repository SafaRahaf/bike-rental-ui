import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { adminPaths } from "./adminRoutes";
import { userPaths } from "./userRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/admin",
        element: (
          <ProtectedRoute requiredRole="admin">
            <Outlet />
          </ProtectedRoute>
        ),
        children: adminPaths,
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute requiredRole="user">
            <Outlet />
          </ProtectedRoute>
        ),
        children: userPaths,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
