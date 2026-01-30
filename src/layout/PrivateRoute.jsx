import { Redirect } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true" ||
    sessionStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? children : <Redirect to="/login" />;
}
