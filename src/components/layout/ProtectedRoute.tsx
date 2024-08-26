import { ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import {
  TUser,
  useCurrentToken,
  selectCurrentUser,
  logout,
  setUser,
} from "../../redux/features/authSlice";
import { jwtDecode } from "jwt-decode";

type TProtectedRoute = {
  children: ReactNode;
  requiredRole?: string;
};

const ProtectedRoute = ({ children, requiredRole }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  let verifiedUser: TUser | null = null;
  try {
    verifiedUser = jwtDecode<TUser>(token);
    const now = Date.now() / 1000;
    if (verifiedUser?.exp < now) {
      throw new Error("Token expired");
    }
    if (!user) {
      dispatch(setUser({ user: verifiedUser, token }));
    }
  } catch (error) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
