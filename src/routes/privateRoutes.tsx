import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated }: any) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
