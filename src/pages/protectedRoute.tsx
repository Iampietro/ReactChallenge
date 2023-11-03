import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import NavBar from "./navbar";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <NavBar/>
      {children}
    </div>
  )
};