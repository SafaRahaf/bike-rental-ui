import jwtDecode from "jwt-decode";
import { TUser } from "../redux/features/authSlice";

export const verifyToken = (token: string) => {
  try {
    const decoded = jwtDecode<TUser>(token);
    const now = Date.now() / 1000;
    if (decoded.exp < now) {
      throw new Error("Token expired");
    }
    return decoded;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
