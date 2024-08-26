import jwtDecode from "jwt-decode";

export const verifyToken = (token: string) => {
  try {
    const decoded = jwtDecode<TUser>(token);
    // Optionally, check token expiration
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
