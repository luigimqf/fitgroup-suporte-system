import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { userToken } = useContext(AuthContext);

  return userToken ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
