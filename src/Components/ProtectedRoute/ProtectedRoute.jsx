import { useAuth } from "Context";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  return <>{auth?.token ? children : <Navigate to="/" replace />}</>;
};
